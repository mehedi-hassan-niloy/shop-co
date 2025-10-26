import React from 'react'
import NabBar from '../Pages/NabBar/NabBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer/Footer'

export default function MainLayout() {
    return (
        <div>
            <NabBar />
            <Outlet />
            <Footer />
        </div>
    )
}
