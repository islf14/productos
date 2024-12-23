import React, { useEffect, useState } from 'react'
import Api from '../Api';
import { Link } from 'react-router';

const ShowProducts = () => {

  const [ products, setProducts] = useState([]);

  useEffect( () => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await Api.getAllProducts().then(
      response => {
        if (typeof response.data !== 'string'){
          try {
            const type = Object.prototype.toString.call(response.data);
            if( type === '[object Object]' || type === '[object Array]'){
              setProducts(response.data);
              console.log("Productos cargados");
            }
          } catch (err) { console.log(err); }
        } else console.log("Error, string recibido desde el servidor.");
      }
    ).catch(error => { console.log(error) });
  };

  const deleteProduct = async (id) => {
    const isDelete = window.confirm("Borrar producto?");
    if(isDelete){
      await Api.deleteProduct(id).then(
        response => {
          response.status == 200 ? console.log("Eliminado correctamente") : "";
        }
      ).catch(error => { console.log(error) });
      getAllProducts();
    }
  }

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <div className='container'>
        <Link to="/create" className='bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-violet-900 p-3'>Create</Link>
      </div>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className='px-6 py-3'>Description</th>
            <th className='px-6 py-4'>Price</th>
            <th className='px-6 py-4'>Stock</th>
            <th className='px-6 py-4'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map( (product) => (
              <tr key={product.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{product.description}</td>
                <td className='px-6 py-4'>{product.price}</td>
                <td className='px-6 py-4'>{product.stock}</td>
                <td>
                  <Link to={`/edit/${product.id}`} className='px-6 py-4 font-medium text-blue-600 dark:text-blue-500 hover:underline'>Edit</Link>
                  <button onClick={ () => {deleteProduct(product.id)} } className='px-6 py-4 font-medium text-red-600 dark:text-red-500 hover:underline'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowProducts