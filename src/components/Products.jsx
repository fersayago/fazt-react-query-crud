import { useQuery } from '@tanstack/react-query'
import { getProducts } from "../api/productsAPI"


const Products = () => {
  const { isLoading, data: products, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })
  
  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Error: {error.message}</div>

  return (
    <>
      <h1>Products List</h1>
      <div>
        {
          products.map(item => (
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
      </div>
    </>
  )
}

export default Products