import { NavLink } from "react-router-dom";
import { WaggonContext } from "../../Context/Context";
import { useContext } from "react";

import SideMenu from "../SideMenu/SideMenu";
import ProductAnimation from "../ProductAnimation/ProductAnimation";

function NavBar() {

  const Context = useContext(WaggonContext);
  const isMenuOpen = Context.isSideMenuOpen
  const ActiveStyle = "flex";
  const storedUser = localStorage.getItem('userData')
  const parsedUser = JSON.parse(storedUser)

  
  
  


  if(isMenuOpen == true) {
    return <SideMenu/> 
  }   

  

  
  
  return(
    
    <nav className={`${Context.theme == 'Dark' ? 'bg-neutral-700' : 'bg-gray-300'} justify-between items-center fixed  lg:sticky  transition-colors duration-500 ease-in-out shadow-lg    z-16  w-full py-3 px-4 text-sm font-medium bottom-0 lg:top-0 `}
    >
      <div className="  flex justify-between items-center w-full ">
        
        <ul className="flex justify-between items-center w-full lg:w-150 px-4   text-xs">
          <li className="font-semibold text-lg hidden lg:block " onClick={ Context.closeDetail}>
            <NavLink to="/" className={({ isActive }) => (isActive ? ActiveStyle : undefined)}>
              RD-Buy
            </NavLink>
          </li>

          
          <li onClick={() => { Context.closeDetail?.(); Context.closeCheckout?.(); }}>
            <NavLink
            
              to="/"
              className={({ isActive }) =>
                `${isActive ? ActiveStyle : ""} flex flex-col items-center justify-center text-xs md:text-sm`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              All
            </NavLink>
          </li>

          <li onClick={() => { Context.closeDetail?.(); Context.closeCheckout?.(); }}>
            <NavLink
            
              to="DR-Buy/electronics"
              className={({ isActive }) =>
                `${isActive ? ActiveStyle : ""} flex flex-col items-center justify-center text-xs md:text-sm`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              Electronics
            </NavLink>
          </li>

          <li onClick={Context.changeCheckout}  className="flex flex-col items-center justify-center text-xs md:text-sm">
            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 mb-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

            {Context.Count === 0 ? 'Cart' : Context.Count}
            
          </li>

          <li onClick={() => { Context.closeDetail?.(); Context.closeCheckout?.(); }}>
            <NavLink
            
              to="DR-Buy/clothes"
              className={({ isActive }) =>
                `${isActive ? ActiveStyle : ""} flex flex-col items-center justify-center text-xs md:text-sm`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              Clothes
            </NavLink>
          </li>

          <li onClick={() => { Context.closeDetail?.(); Context.closeCheckout?.(); }}>
            <NavLink
            
              to="DR-Buy/furniture"
              className={({ isActive }) =>
                `${isActive ? ActiveStyle : ""} flex flex-col items-center justify-center text-xs md:text-sm`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
              Furniture
            </NavLink>
          </li>
          
        </ul>

        {/* Right menu */} 
        <ul className='md:flex items-center   gap-3  top-0 left-0  '>
          <li>
            <NavLink to="/" className={isMenuOpen ? 'flex z-10 sticky px-3 py-108 ' : 'hidden lg:flex'}>
              {parsedUser.name}
            </NavLink>
          </li>

          <li className="font-semibold text-2xl  fixed left-[40vw] sm:left-[45vw] lg:hidden   top-2  ">
            <NavLink to="/" className={({ isActive }) => (isActive ? ActiveStyle : undefined)}>
              RD-Buy
            </NavLink>
          </li>

          <li className="" onClick={Context.openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8 lg:hidden lg:right-7 fixed right-3 top-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

          </li>

          <li className="hidden md:block">
            <NavLink to="DR-Buy/my-order" className={isMenuOpen ? 'flex' : 'hidden lg:flex'}>
              My-order
            </NavLink>
          </li>

          <li className=" md:block">
            <NavLink to="DR-Buy/my-orders" className={isMenuOpen ? 'flex' : 'hidden lg:flex'}>
              My-orders
            </NavLink>
          </li>

          <li className="hidden md:block">
            <NavLink to="DR-Buy/my-account" className={isMenuOpen ? 'flex' : 'hidden lg:flex'}>
              My-Account
            </NavLink>
          </li>

          
        </ul>
      </div>
    </nav> 

    


  );
}


export default NavBar;



