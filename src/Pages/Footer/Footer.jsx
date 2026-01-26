import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full bg-[#F0F0F0] pt-[140px] mt-[120px] relative">

            {/* ================= SUBSCRIBE BOX ================= */}
            <div className="absolute top-[-90px] left-1/2 -translate-x-1/2 w-[92%] max-w-[1140px] bg-black rounded-[20px] px-[24px] sm:px-[40px] py-[28px] sm:py-[36px] flex flex-col lg:flex-row items-center justify-between gap-6">

                <h2 className="text-white font-extrabold text-[24px] sm:text-[32px] lg:text-[40px] leading-[1.1] max-w-[520px] text-center lg:text-left">
                    STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
                </h2>

                <div className="flex flex-col gap-4 w-full max-w-[420px]">
                    <div className="flex items-center bg-white rounded-full px-5 py-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full outline-none text-sm"
                        />
                    </div>
                    <button className="bg-white text-black font-semibold rounded-full py-3">
                        Subscribe to Newsletter
                    </button>
                </div>

            </div>

            {/* ================= FOOTER CONTENT ================= */}
            <div className="max-w-[1140px] mx-auto px-4 pt-[80px] pb-10">

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">

                    {/* LOGO COLUMN */}
                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-[28px] font-extrabold">SHOP.CO</h3>
                        <p className="text-gray-600 text-sm mt-4 max-w-[260px]">
                            We have clothes that suits your style and which you're proud to wear. From women to men.
                        </p>

                        <div className="flex gap-3 mt-5">
                            {["f", "i", "t", "p"].map((x, i) => (
                                <div key={i} className="w-9 h-9 border rounded-full flex items-center justify-center text-sm">
                                    {x}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h4 className="font-semibold mb-4 tracking-widest">COMPANY</h4>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>

                    {/* HELP */}
                    <div>
                        <h4 className="font-semibold mb-4 tracking-widest">HELP</h4>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* FAQ */}
                    <div>
                        <h4 className="font-semibold mb-4 tracking-widest">FAQ</h4>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h4 className="font-semibold mb-4 tracking-widest">RESOURCES</h4>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How to - Blog</li>
                            <li>Youtube Playlist</li>
                        </ul>
                    </div>

                </div>

                {/* ================= BOTTOM BAR ================= */}
                <div className="border-t mt-12 pt-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-gray-600">

                    <p>Shop.co © 2000-2023, All Rights Reserved</p>

                    <div className="flex gap-3 items-center flex-wrap justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg" className="h-6" />
                    </div>

                </div>

            </div>
        </footer>
    )
}
