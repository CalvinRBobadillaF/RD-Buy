import { useContext, useState } from "react"
import { WaggonContext } from "../../../Context/Context"
import ProductAnimation from "../../ProductAnimation/ProductAnimation";

function Card(data) {
    const Context = useContext(WaggonContext)
    const { theme } = useContext(WaggonContext)

    const [cartCount, setCartCount] = useState(0);
    const [toastTrigger, setToastTrigger] = useState(0);

    
    const addProductToCart = (e, productData) => {
        e.stopPropagation(); // Prevent event propagation to the main div
         setCartCount(prev => prev + 1);
        setToastTrigger(Date.now()); // cambia el trigger → muestra el toast
        
        // Check if the product already exists in the cart
        const productExists = Context.cartProducts.findIndex(
            item => item.id === productData.id
        )
        
        if (productExists >= 0) {
            // Create a new array to avoid mutation
            const updatedCart = [...Context.cartProducts]
            
            // Increment the quantity of the existing product
            updatedCart[productExists] = {
                ...updatedCart[productExists],
                quantity: (updatedCart[productExists].quantity || 1) + 1
            }
            
            Context.setCartProducts(updatedCart)
        } else {
            // Add new product with quantity 1
            Context.setCartProducts([...Context.cartProducts, {...productData, quantity: 1}])
        }
        
        // Increment the count
        Context.setCount(Context.Count + 1)
        
    }
    
    const showProduct = (productDetail) => {
        Context.openDetail();
        Context.setShowDetail(productDetail); // Correct way to update state
    };

    
    
    return (
        
        <div 
            className={`${theme === 'Dark' ? '  ' : 'bg-white '} sm:w-[40vw]   md:ml-[2vw]   cursor-pointer lg:h-[50vh]     rounded-lg sm:mb-6 `}
            onClick={() => showProduct(data.data)}
        >
            <ProductAnimation trigger={toastTrigger} />
            <figure className="relative m-3 mb-0 w-[93vw] lg:w-[21vw]  sm:w-[40vw] md:w-[40vw] h-4/5  ">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black m-2 text-m lg:text-lg px-3 py-0.5 ">
                    {data.data.category.name}
                </span>
                <img 
                    src={data.data.images[0]} 
                    alt={data.data.title} 
                    className="w-full h-full object-cover rounded-t-md"
                />
                <button 
                    className={`${theme === 'dark' ? 'absolute top-0 right-0 flex justify-center items-center bg-gray-700 w-6 h-6 rounded-full m-2 text-white font-bold' : 'absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 text-black font-bold'}absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 text-black font-bold`}
                    onClick={(e) => addProductToCart(e, data.data)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                </button>
            </figure>
            <p className={`${theme === 'Dark' ? 'bg-neutral-700' : 'bg-white'} flex justify-between ml-3 md:w-[40vw] lg:w-[21vw] sm:w-[40vw]  p-2.5 rounded-b-lg mt-0 shadow-5 text-2xl w-[93vw] `}>
                <span className=" text">{data.data.title}</span>
                <span className="font-medium ">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card

