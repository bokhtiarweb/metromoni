import React from 'react'
import NavBar from '../components/shared/NavBar'
import Footer from '../components/shared/Footer'
import { Outlet } from 'react-router-dom'

export default function Main() {

  return (
    <div>
        <header className='bg-base-100 fixed top-0 left-0 w-full shadow-md z-50'>
            <NavBar></NavBar>
        </header>
        <main className='pt-16 px-4'>
            <Outlet></Outlet>
        </main>
        <footer className='bg-slate-600'>
            <Footer></Footer>
        </footer>
    </div>
  )
}
