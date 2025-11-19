import { useContext } from "react"
import { WaggonContext } from "../../../Context/Context"

function Card(data) {
    const Context = useContext(WaggonContext)
    const { theme, toggleTheme } = useContext(WaggonContext)
    
    const addProductToCart = (e, productData) => {
        e.stopPropagation(); // Prevent event propagation to the main div
        
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
            className={`${theme === 'Dark' ? '  sm:w-[40vw]   md:ml-[2vw]   cursor-pointer lg:h-[50vh]    rounded-lg sm:mb-6 ' : 'bg-white w-56 ml-[5.5vw] cursor-pointer sm:w-[40vw]  lg:h-[50vh]  rounded-lg sm:mb-6 '}`}
            onClick={() => showProduct(data.data)}
        >
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
            <p className={`${theme === 'Dark' ? 'flex justify-between ml-3 md:w-[40vw] lg:w-[21vw] sm:w-[40vw] bg-neutral-700 p-2.5 rounded-b-lg mt-0 shadow-5 text-2xl w-[93vw] ' : 'flex justify-between ml-3 md:w-[40vw] lg:w-[21vw] sm:w-[40vw] bg-gray-300 p-2.5 rounded-b-lg mt-0 shadow-5 text-2xl w-[93vw]'}`}>
                <span className=" text">{data.data.title}</span>
                <span className="font-medium ">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card

//ml-[5.5vw  ]  w-56 