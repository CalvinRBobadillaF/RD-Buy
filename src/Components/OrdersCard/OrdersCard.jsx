import { useContext } from "react";
import { dateTime } from "../../Utils/date";
import { WaggonContext } from "../../Context/Context";



function OrdersCard(props) {
    const { totalPrice, totalProducts } = props; 
    const { theme } = useContext(WaggonContext)
    
    return (
        
        <div >
         <div className={`${theme === 'Dark' ? ' text-white ' : ' text-black bg-white '} mr-10 ml-10 mb-5 flex justify-between items-center  border border-gray-300 rounded-lg p-4  z-10 shadow-md  `}>
            
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
 