import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Api from '../Api';

const CreateProduct = () => {

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await Api.storeProduct({description: description, price: price, stock: stock}).then(
      response =>  {
        response.status == 201 ? console.log("Creado correctamente") : "";
      }
    ).catch( error => {
      console.log(error);
    });
    navigate('/');
  }

  return (
    <div className=''>
      <h3 className='max-w-md mx-auto mb-4 text-lg'>Create product</h3>
      <form onSubmit={store} className='max-w-md mx-auto'>
        <div className='relative z-0 w-full mb-5 group'>
          <input type="text" value={description} onChange={ (e) => setDescription(e.target.value) }  name='description' id='descrption' placeholder=" "  className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
          <label htmlFor="description" className='peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Description</label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input type="number" value={price} onChange={ (e) => setPrice(e.target.value) }  name='price' id='price' placeholder=" " className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
          <label htmlFor="price" className='peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Price</label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input type="number" value={stock} onChange={ (e) => setStock(e.target.value) }  name='stock' id='stock' placeholder=" " className='block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
          <label htmlFor="stock" className='peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Stock</label>
        </div>
        <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
      </form>
    </div>
  )
}

export default CreateProduct