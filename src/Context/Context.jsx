import { createContext, useState } from "react"

export const WaggonContext = createContext()
import { dateTime } from "../Utils/date"

export const WaggonProvider = ({ children }) => {
    //Shopping Waggon - counter
    const [Count, setCount] = useState(0)

    const [isLogged, setIsLogged] = useState(false)

    const [theme, setTheme] = useState('Dark')

    const [userData, setUserData] = useState({})

    const [orderPaid, setOrderPaid] = useState([])
    const [cartCount, setCartCount] = useState(0);
    const [ProductTrigger, setProductTrigger] = useState(0);

    console.log(Count)

    const logUser = () => {
        setIsLogged(true)
    }


    const toggleTheme = () => {
        setTheme((prev) => prev === 'Light' ? 'Dark' : 'Light' )
    }

    //Product Detail - aside
    const [isDetailOpen, setDetailOpen] = useState(false)
    const openDetail = () => setDetailOpen(true)
    const closeDetail = () => setDetailOpen(false)

    //Product Detail - show product
    const [showDetail, setShowDetail] = useState({})

    //Cart Products:
    const [cartProducts, setCartProducts] = useState([])


    const addProductToCart = (productToAdd) => {

        setCount(prev => prev + 1)
         setCartCount(prev => prev + 1);
        setProductTrigger(Date.now()); 
        

        const existingProductIndex = cartProducts.findIndex(
            item => item.id === productToAdd.id
        )

        
        
        if (existingProductIndex !== -1) {
       
            const updatedCart = [...cartProducts]
            
      
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

  
    const legacySetCartProducts = (newProducts) => {
        
        setCartProducts(newProducts)
        
        
        const newCount = newProducts.reduce((sum, product) => 
            sum + (product.quantity || 1), 0
        )
        setCount(newCount)
    }

    //Checkout Side Menu:
    const [isCheckoutOpen, setCheckoutOpen] = useState(false)
    const openCheckout = () => setCheckoutOpen(true)
    const closeCheckout = () => setCheckoutOpen(false)
    const changeCheckout = () => setCheckoutOpen(!isCheckoutOpen)

    //SideMenu

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    
    const closeMenu = () => setIsSideMenuOpen(false)
    const openMenu = () => setIsSideMenuOpen(true)
    const openAndCloseMenu = () => setIsSideMenuOpen(!isSideMenuOpen)
    

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
            orderPaid,
            setOrderPaid,
            closeMenu,
            openMenu,
            ProductTrigger,
            changeCheckout,
            setCartProducts: legacySetCartProducts,
            addProductToCart,
            isCheckoutOpen,
            setCheckoutOpen,
            openCheckout,
            closeCheckout,
            order,
            toggleTheme,
            theme,
            openAndCloseMenu,
            isSideMenuOpen,
            setIsSideMenuOpen,
            isLogged,
            setIsLogged,
            logUser,
            userData,
            setUserData,
            setOrder
        }}>
        {children}
        </WaggonContext.Provider>
    )
}


