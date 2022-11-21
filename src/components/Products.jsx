import { useQuery } from '@tanstack/react-query'
import { getProducts } from "../api/productsAPI"

const Products = () => {
  const { isLoading, data: products, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: products => products.sort((a, b) => b.id - a.id)
  })
  
  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Error: {error.message}</div>

  return products.map(item => (
    <div key={ item.id }>
      <h3>{ item.name }</h3>
      <p>{ item.description }</p>
      <p>{ item.price }</p>
      <button>Delete</button>
      <input type='checkbox' />
      <label htmlFor="">In Stock</label>
    </div>
  ))
}

export default Products