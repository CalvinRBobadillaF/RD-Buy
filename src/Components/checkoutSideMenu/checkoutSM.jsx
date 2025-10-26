import { useContext } from "react"
import { Link } from "react-router-dom"
import { WaggonContext } from "../../Context/Context"
import OrderCard from "../OrderCard/OrderCard"

function CheckoutSideMenu() {
    const context = useContext(WaggonContext)
    console.log('Cart: ', context.cartProducts)
    
    const handleDelete = (id) => {
        // This line had an error - you were trying to filter context.addProductToCart
        // which is a function, not an array
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
            totalPrice: totalPrice
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])

    }
    
    // Calculate total price from cart products
    const totalPrice = context.cartProducts.reduce((sum, product) => 
        sum + product.price * (product.quantity || 1), 0
      )
    
    return(
        <aside className={`${context.isCheckoutOpen ? 'flex ' : 'hidden '}md:top-[68px] top-[0] md:w-[360px] w-[full] md:h-[calc(100vh-80px)] h-[calc(100vh-65px)] flex-col fixed right-0 bg-white md:border border-black rounded-lg bottom-4 mb-2 overflow-y-auto`}>
            <div className="flex justify-between m-4">
                <p className="bg-gray-400 border border-transparent rounded-sm p-1 font-medium text-x">My Order</p>
                <button onClick={() => context.closeCheckout()} aria-label="Close checkout menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            
            <div className="flex-1 px-4">
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
                    <Link to='my-orders/latest'>
                    <button 
                        className="w-full bg-black text-white py-3 rounded-lg font-medium"
                        onClick={() => {
                            handleCheckout()
                            
                        }}
                    >
                        Checkout
                    </button>
                    </Link>
                </div>
            )}
        </aside> 
    )
}

export default CheckoutSideMenu