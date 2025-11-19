import { useContext } from "react"
import { WaggonContext } from "../../../Context/Context"
import Layout from "../../../Components/NavBar/Layout/Layout"
import OrdersCard from "../../../Components/OrdersCard/OrdersCard"
import { Link } from "react-router-dom"
function MyOrders() {
    const context = useContext(WaggonContext)
    console.log('ordenes:', context.order)
     const { theme, toggleTheme } = useContext(WaggonContext)

    if (context.orderPaid == 0) {
        return(
            <div className="flex items-center justify-center h-screen">
      <p className={`${theme === 'Dark' ? 'text-center text-lg text-white' : 'text-center text-lg text-black'}`}>
        You don't have a recent order, create a new one!
      </p>
    </div>
        )
    }

    
    return(
        
        <Layout >
            
            {context.orderPaid.map((order, index) => (
                <Link key={index} to={`/my-order/`}> 
                <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
                </Link>
            ))}
            
        </Layout>
    )
}

export default MyOrders