import { createContext, useState } from "react"

export const WaggonContext = createContext()

export const WaggonProvider = ({ children }) => {
    //Shopping Waggon - counter
    const [Count, setCount] = useState(0)

    const [theme, setTheme] = useState('light')

    


    const toggleTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light' )
    }

    

    //Product Detail - aside
    const [isDetailOpen, setDetailOpen] = useState(false)
    const openDetail = () => setDetailOpen(true)
    const closeDetail = () => setDetailOpen(false)

    //Product Detail - show product
    const [showDetail, setShowDetail] = useState({})

    //Cart Products:
    const [cartProducts, setCartProducts] = useState([])

    // Function to add products to cart with proper duplicate handling
    const addProductToCart = (productToAdd) => {
        // Increment the total count
        setCount(prev => prev + 1)
        
        // Check if the product is already in the cart by ID
        const existingProductIndex = cartProducts.findIndex(
            item => item.id === productToAdd.id
        )

        
        
        if (existingProductIndex !== -1) {
            // Create a new array to avoid mutation
            const updatedCart = [...cartProducts]
            
            // Increment the quantity of the existing product
            updatedCart[existingProductIndex] = {
                ...updatedCart[existingProductIndex],
                quantity: (updatedCart[existingProductIndex].quantity || 1) + 1
            }
            closeCheckout()
            
            
            setCartProducts(updatedCart)
        } else {
            // Add new product with quantity 1
            setCartProducts([...cartProducts, {...productToAdd, quantity: 1}])
        }
    }

    // Replace the default setCartProducts with a version that properly handles
    // the case where the component is still using the old approach
    const legacySetCartProducts = (newProducts) => {
        // If setting directly (like in OrderCard deletion),
        // just use the standard setter
        setCartProducts(newProducts)
        
        // Update count to match total quantities
        const newCount = newProducts.reduce((sum, product) => 
            sum + (product.quantity || 1), 0
        )
        setCount(newCount)
    }

    //Checkout Side Menu:
    const [isCheckoutOpen, setCheckoutOpen] = useState(false)
    const openCheckout = () => setCheckoutOpen(true)
    const closeCheckout = () => setCheckoutOpen(false)
    const changeCheckout = ( ) => setCheckoutOpen(!isCheckoutOpen)

    //Cart - Orders
    const [order, setOrder] = useState([])
    
    return(
        <WaggonContext.Provider value={{
            Count,
            setCount,
            openDetail,
            closeDetail,
            isDetailOpen,
            showDetail,
            setShowDetail,
            cartProducts,
            // Override the setter with our version
            setCartProducts: legacySetCartProducts,
            // Provide the new function
            addProductToCart,
            isCheckoutOpen,
            setCheckoutOpen,
            openCheckout,
            closeCheckout,
            order,
            toggleTheme,
            theme,
            changeCheckout,
            setOrder
        }}>
        {children}
        </WaggonContext.Provider>
    )
}

