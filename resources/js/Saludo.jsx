import React from 'react'
import { Outlet } from 'react-router'

const Saludo = () => {
  return (
    <>
    <div>hola desde saludo lasjflksjf</div>
    <button className='bg-red-500'>agregar</button>
    <input class="bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-violet-900" type="submit" value="Ingresar"></input>
    <Outlet/>
    </>
  )
}

export default Saludo