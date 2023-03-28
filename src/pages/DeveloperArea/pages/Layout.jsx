import React from 'react'
import Button from '../../../components/Button'
import store from '../../../store'
import {logout} from '../../../store/auth'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'




export default function Layout() {
  const logoutLy = ()=>store.dispatch(logout())
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Slider></Slider>
      <div className='my-10'><Button onClick={logoutLy}>Logout</Button></div>
    </div>
  )
}
