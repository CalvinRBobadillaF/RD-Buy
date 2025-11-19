import { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import Layout from "../../../Components/NavBar/Layout/Layout"
import OrderCard from "../../../Components/OrderCard/OrderCard"
import { WaggonContext } from "../../../Context/Context"

function MyOrder() {
  let context = useContext(WaggonContext)
  const { theme } = useContext(WaggonContext)

  const totalPrice = context.cartProducts.reduce(
    (sum, product) => sum + product.price * (product.quantity || 1), 0
  );

  if (context.order == 0) {
    return (
      <div className="flex justify-center items-center  h-screen px-4 lg:ml-[10vw]">
        <p
          className={`${theme === 'Dark' ? 'text-white' : 'text-gray-600'} text-center text-lg`}
        >
          You don't have a recent order, create a new one!
        </p>
      </div>
    );
  }

  return (
    <Layout>
      <div className="flex justify-center md:justify-between  items-center mt-12 md:mt-[-10vh]  mb-1  ">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>

        <h1 className={`${theme === 'Dark' ? 'text-white' : 'text-gray-700'}   text-lg font-semibold`}>
          My order
        </h1>

        
      </div>

      <div className="p-4 space-y-3 mb-5 " >
        {context.order?.slice(-1)[0].products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            image={product.images}
            title={product.title}
            price={product.price}
            quantity={product.quantity || 1}
          />
        ))}

        <p className={`${theme === 'Dark' ? 'text-white' : 'text-gray-700'} text-center font-semibold`}>
          Total amount: ${totalPrice.toFixed(2)}
        </p>
      </div>

      <NavLink to="/DR-Buy/payment" className="flex justify-center">
        <button
          className={`${theme === 'Dark' ? 'bg-blue-900 text-white' : 'bg-neutral-700 text-white'} 
           bottom-25 left-4 right-4 px-25 py-4 md:px-5 md:py-5 rounded-md text-center md:w-[20vw]  items-center   md:mb-40  mb-30  text-amber-50 shadow-lg`}
        >
          Pay now
        </button>
      </NavLink>
    </Layout>
  );
}

export default MyOrder;


//<div className="w-6" md:ml-[5vw] ml-[5vw] flex flex-col items-center flex />