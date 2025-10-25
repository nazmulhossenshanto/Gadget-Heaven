import React from "react";

const Footer = () => {
  return (
    <footer className=" sm:footer-horizontal   mb-2">
        <div className="flex flex-col items-center justify-center  space-y-3">
            <h1 className="text-2xl font-bold text-black">Gadget Heaven</h1>
            <p className="text-gray-500 mb-5">Leading the way in cutting-edge technology and innovation.</p>
        </div>
      <div className="flex justify-around items-strech ">
        <nav>
        {/*     */}
        <h6 className="font-bold text-black">Services</h6>
        <p className="link link-hover text-gray-500">Product Support</p>
        <p className="link link-hover text-gray-500">Order Tracking</p>
        <p className="link link-hover text-gray-500">Shipping & Delivery</p>
        <p className="link link-hover text-gray-500">Returns</p>
      </nav>

      <nav>
        <h6 className="font-bold text-black">Company</h6>
        <p className="link link-hover text-gray-500">About us</p>
        <p className="link link-hover text-gray-500">Career</p>
        <p className="link link-hover text-gray-500">Contacts</p>
      </nav>

      <nav>
        <h6 className="font-bold text-black">Legal</h6>
        <p className="link link-hover text-gray-500">Terms of Services</p>
        <p className="link link-hover text-gray-500">Privacy policy</p>
        <p className="link link-hover text-gray-500">Cookie policy</p>
      </nav>
      </div>
    </footer>
  );
};

export default Footer;
