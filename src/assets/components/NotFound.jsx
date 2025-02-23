import React from 'react'
import '../css/notFound.css'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='NotFound'>
        <h1 className='titleNotFound text-center display-1'>404</h1>
        <h2 className='text-center'>Página Não Encontrada</h2>
        <h3 className='text-center'>Desculpe, mas parece que não encontramos seu resultado</h3>
        <Link className='backHome btn' to={'/'}>Voltar a Home</Link>
    </div>
  )
}

export default NotFound