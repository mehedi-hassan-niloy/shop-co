import React, { useState } from 'react'
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

export default function NabBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <>
            {/* Top black bar */}
            <div className="bg-black text-white text-center text-sm py-2">
                Sign up and get 20% off to your first order.{' '}
                <a href="#" className="underline hover:text-gray-300">Sign Up Now</a>
            </div>


            {/* Main Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm relative">
                {/* Left Side (Menu + Logo) */}
                <div className="flex items-center space-x-4">
                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>


                    {/* Logo */}
                    <div className="text-2xl font-extrabold tracking-tight">SHOP.CO</div>
                </div>


                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-gray-800 font-medium ml-10">
                    <div className="group relative">
                        <button
                            onClick={() => setShopOpen(!shopOpen)}
                            className="flex items-center space-x-1 hover:text-black"
                        >
                            <span>Shop</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {shopOpen && (
                            <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Men</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="hover:text-black">On Sale</a>
                    <a href="#" className="hover:text-black">New Arrivals</a>
                    <a href="#" className="hover:text-black">Brands</a>
                </div>


                {/* Search Bar (Desktop) */}
                <div className="hidden md:flex flex-1 justify-center mx-6">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full max-w-md bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>


                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <button className="md:hidden" onClick={() => setSearchOpen(!searchOpen)}>
                        <Search className="w-5 h-5 cursor-pointer hover:text-gray-700" />
                    </button>
                    <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-700" />
                    <User className="w-5 h-5 cursor-pointer hover:text-gray-700" />
                </div>


                {/* Mobile Search Popup */}
                {searchOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md py-3 px-6 md:hidden">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                    </div>
                )}


                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium md:hidden z-50">
                        <details className="w-full text-center">
                            <summary className="cursor-pointer py-2 hover:text-black">Shop</summary>
                            <div className="flex flex-col space-y-2">
                                <a href="#" className="hover:text-black">Men</a>
                                <a href="#" className="hover:text-black">Women</a>
                                <a href="#" className="hover:text-black">Kids</a>
                                <a href="#" className="hover:text-black">Accessories</a>
                            </div>
                        </details>
                        <a href="#" className="hover:text-black">On Sale</a>
                        <a href="#" className="hover:text-black">New Arrivals</a>
                        <a href="#" className="hover:text-black">Brands</a>
                    </div>
                )}
            </nav>
        </>
    )
}
