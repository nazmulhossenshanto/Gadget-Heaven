import React from "react";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Home */}
      <header className=" w-full">
        <Navbar></Navbar>
      </header>
      {/* main */}
      <main className='w-11/12 mx-auto my-3  '>

               {/* <aside className='col-span-3 sticky h-fit top-0'>
                 <LeftAside></LeftAside>
               </aside> */}
               
                    <Outlet></Outlet>
              
               {/* <aside className='col-span-3 sticky h-fit top-0'>
                <RightAside></RightAside>
               </aside> */}
            </main>
      {/* footer */}
      <footer className=" w-full">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
