import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { WaggonContext } from "../../Context/Context"
import OrderCard from "../OrderCard/OrderCard"

function CheckoutSideMenu() {
    const context = useContext(WaggonContext)
    console.log('Cart: ', context.cartProducts)
    const { theme } = useContext(WaggonContext)
    
    const handleDelete = (id) => {
        
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)

        
        
        // Update the count when deleting items
        const newCount = filteredProducts.reduce((sum, product) => 
            sum + (product.quantity || 1), 0
        )
        context.setCount(newCount)
    }

    const handleCheckout = () => {
        

        const orderToAdd = {
            date: '27.02.25',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice,
            id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`
        }

        

        context.setOrder([...context.order, orderToAdd])
       // context.setCartProducts([]) 

    }
    
    // Calculate total price from cart products
   const totalPrice = context.cartProducts.reduce((sum, product) => 
        sum + product.price * (product.quantity || 1), 0
      ) 



      if (context.cartProducts == 0) {
        return(
            <aside className={`${context.isCheckoutOpen ? 'flex ' : 'hidden '} ${theme === 'Dark' ? 'bg-neutral-600  ' : 'bg-amber-50 '} md:top-[68px] top-[0] md:w-[360px] w-full md:h-[calc(100vh-80px)] h-[calc(100vh-65px)]  flex-col justify-center fixed right-0  md:border border-black rounded-lg bottom-4 mb-2 overflow-y-auto `}>
            
                <div className="flex items-center justify-center h-screen ml-[2vw] ">
      <p className={`${theme === 'Dark' ? 'text-white' : 'text-gray-700'}text-center text-lg   `}>
        You don't have any products yet, start shopping!
      </p>
    </div>
            
        </aside> 
        )
      }
    
    return(
        <aside className={`${context.isCheckoutOpen ? 'flex ' : 'hidden '} ${theme === 'Dark' ? 'bg-neutral-600' : 'bg-white'}  md:top-[10px]  top-[0] md:w-[360px] w-full lg:h-[90vh] lg:mt-20 md:h-[calc(100vh-60px)] h-[calc(100vh-65px)] flex-col fixed right-0   md:border border-black rounded-lg bottom-4 mb-2 overflow-y-auto`}>
            <div className="flex justify-between m-4">
                <p className="bg-gray-400 border border-transparent rounded-sm p-1 font-medium text-x">My Order</p>
                
            </div>
            
            <div className="flex-1  px-4">
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}  
                            id={product.id}
                            image={product.images} 
                            title={product.title} 
                            price={product.price}
                            quantity={product.quantity || 1}
                            handleDelete={handleDelete} 
                        />
                    ))
                }
            </div>
            
            {context.cartProducts.length > 0 && (
                <div className="px-4 mb-6">
                    <div className="flex justify-between items-center mb-2 mt-4 pt-4 border-t border-gray-200">
                        <p className="font-medium">Total:</p>
                        <p className="font-bold">${totalPrice.toFixed(2)}</p>
                    </div>
                    <NavLink to='DR-Buy/my-order'>
                    <button 
                        className="w-full bg-black text-white py-3 rounded-lg font-medium"
                        onClick={() => {
                            handleCheckout()
                            context.closeCheckout()
                        }}
                    >
                        Checkout
                    </button>
                    </NavLink>
                </div>
            )}
        </aside> 
    )
}

export default CheckoutSideMenu

