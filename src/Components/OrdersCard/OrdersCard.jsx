import { useContext } from "react";
import { dateTime } from "../../Utils/date";
import { WaggonContext } from "../../Context/Context";



function OrdersCard(props) {
    let context = useContext(WaggonContext) 

    const { totalPrice, totalProducts, id } = props; 
const { theme, toggleTheme } = useContext(WaggonContext)
    

    
    
    return (
        
        <div >
         <div className={`${theme === 'Dark' ? 'flex justify-between items-center  border border-gray-300 rounded-lg p-4  z-10 shadow-md bg-neutral-600 text-white' : ' text-black flex justify-between items-center  border border-gray-300 rounded-lg   z-10 shadow-md bg-white'} mr-10 ml-10 mb-5 `}>
            
             <p className="mr-3 text-sm">{dateTime()}</p>
             <div className="flex flex-col sm:grid-cols-2 ">
                 <span className="text-lg font-semibold ">
                     {totalProducts} {totalProducts > 1 ? "items" : "item"}
                 </span>
                 <span className="text-green-600 font-bold text-xl">
                     ${totalPrice.toFixed(2)}
                 </span>
             </div>
         </div>
         </div>
         
        
     );
 }
 
 export default OrdersCard;