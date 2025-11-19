import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { WaggonContext } from "../../Context/Context";

function SideMenu() {
  const Context = useContext(WaggonContext);
  const isMenuOpen = Context.isSideMenuOpen;
  const { theme, toggleTheme } = useContext(WaggonContext)
  const storedUser = localStorage.getItem('userData')
  const parsedUser = JSON.parse(storedUser)

  return (
    <>
      {/* Fondo oscuro detrás del menú */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={Context.openAndCloseMenu}
        />
      )}

      {/* Panel lateral */}
      <aside
        className={`${theme === 'Dark' ? 'fixed top-0 right-0 z-50 h-full w-72 bg-gray-700 shadow-lg transform transition-transform duration-300 ease-in-out' : 'fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out'}
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        lg:hidden`}
      >
        <div className="flex justify-between items-center p-4  border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={Context.openAndCloseMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-6">
          <li >
            <NavLink to="/my-account" onClick={() => { Context.closeDetail?.(); Context.closeCheckout?.(); Context.openAndCloseMenu?.(); }}>
            My Account
            </NavLink>
          </li>
          <li >
            <NavLink to="/my-orders" onClick={() => { Context.closeDetail?.(); Context.closeCheckout?.(); Context.openAndCloseMenu?.(); }}>
              My Orders
            </NavLink>
          </li>
          <li >
            <NavLink to="/my-order" onClick={() => { Context.closeDetail?.(); Context.closeCheckout?.(); Context.openAndCloseMenu?.(); }}>
              My Order
            </NavLink>
          </li>
          

          <li onClick={Context.closeDetail }>
            <NavLink to="/" onClick={() => { Context.closeDetail?.(); Context.closeCheckout?.(); Context.openAndCloseMenu?.(); }} >
              Home
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-between items-center p-4 w-full border-t fixed bottom-3">
          <h2>
            <NavLink to="/sign-in" className= 'text-lg font-semibold '>
              {parsedUser.name}
            </NavLink>
          </h2>
       </div>
      </aside>
    </>
  );
}

export default SideMenu;
