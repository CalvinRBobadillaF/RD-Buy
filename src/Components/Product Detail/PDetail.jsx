import { useContext } from "react"
import { WaggonContext, WaggonProvider } from "../../Context/Context"


function ProductDetail() {
    const context = useContext(WaggonContext)
    console.log('Product to show: ', context.showDetail)
    return(
        <aside className={`${context.isDetailOpen ? 'flex ' : 'hidden '}top-[0] md:top-[80px] w-[full] h-[full] md:w-[360px] md:h-[100vh-80px]  flex-col fixed right-0 bg-white border border-black rounded-lg bottom-4`}>
        <div className="flex justify-between m-4">
            <p className="bg-gray-400 border border-transparent rounded-sm p-1 font-medium text-x">{context.showDetail.title}</p>
            <button onClick={() => context.closeDetail()}>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
            </svg>
            </button>
            </div>
            <figure>
                <img className="w-full h-full p-2" src={context.showDetail.images} alt={context.showDetail.title} />
            </figure>
            <p className="text-center font-bold p-1 bg-gray-300 text-lg">
                
                <span>${context.showDetail.price}</span>
            </p>
            <p className="p-2 font-medium ">
                <span>{context.showDetail.description}</span>
            </p>

        

       </aside> 
    )
}

export default ProductDetail

//calc(100vh-80px)]