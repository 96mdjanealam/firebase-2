import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function RootMain() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
