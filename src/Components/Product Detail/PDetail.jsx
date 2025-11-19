import { useContext } from "react"
import { WaggonContext } from "../../Context/Context"


function ProductDetail() {
    const context = useContext(WaggonContext)

    const { theme } = useContext(WaggonContext)
    


    return(
        <aside className={`${context.isDetailOpen ? 'flex ' : 'hidden '} ${theme === 'Dark' ? 'bg-neutral-700 ' : 'bg-white text-black '} top-[0] md:mt-[5vh] lg:mt-[10vh] lg:h-[85vh] overflow-y-scroll w-[full] h-[full] md:w-[360px] sm:h-[85vh]      flex-col fixed right-0  border border-black rounded-lg bottom-4 md:bottom-0`}>
        <div className="flex  m-4 mt-15">
            <button onClick={() => context.closeDetail()}  className=" ">
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-8">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
            </svg>
            </button>
            <p className="bg-gray-600 text-white border border-transparent rounded-sm p-1 font-medium text-x ml-4">{context.showDetail.title}</p>
            
            </div>
            <figure>
                <img className="w-full h-full   p-2" src={context.showDetail.images} alt={context.showDetail.title} />
            </figure>
            <p className="text-center font-bold p-1 md:ml-2 bg-gray-600 text-white text-lg">
                
                <span>${context.showDetail.price}</span>
            </p>
            <p className="p-2 font-medium  ">
                <span>{context.showDetail.description}</span>
            </p>
            

        

       </aside> 
    )
}

export default ProductDetail

