import React, { useContext, useState } from "react";
import OrderCard from "../OrderCard/OrderCard"
import Layout from "../NavBar/Layout/Layout";
import { WaggonContext } from "../../Context/Context";
import { dateTime } from "../../Utils/date";
import { useNavigate } from "react-router-dom";

// Componente de pago simple con tarjeta predefinida (no editable), lista de productos, total y overlay de "Pago realizado"
// Usa Tailwind CSS

export default function PaymentComponent() {
  // productos por defecto si no vienen por props
  let context = useContext(WaggonContext)
  const navigate = useNavigate();
 const { theme, toggleTheme } = useContext(WaggonContext)

  const [processing, setProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalPrice = context.cartProducts.reduce((sum, product) => 
        sum + product.price * (product.quantity || 1), 0
      )



  const handlePay = () => {
    if (processing) return;
    setProcessing(true);
    setShowSuccess(true);

    // Mostrar overlay 2 segundos y luego desaparecer
    setTimeout(() => {
      setShowSuccess(false);
      setProcessing(false);
      context.setOrder([])
      navigate('/')
    }, 2000);

    const orderToAdd = {
            date: dateTime,
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice,
            
        }

    context.setOrderPaid([...context.orderPaid, orderToAdd])
    context.setCartProducts([])
    
  };



  if (context.order == 0) {
        return(
            <div className={`${theme === 'Dark' ? ' text-white flex items-center justify-center h-screen' : 'bg-white text-black flex items-center justify-center h-screen'}`}>
      <p className="text-center text-lg ">
        You don't have a recent order, create a new one!
      </p>
    </div>
        )
      }
// max-w-3xl mx-auto
  return (
    <Layout>
    <div className="  overflow-y-scroll ">
      {/* Contenedor principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT: Card info (no editable) */}
        <div className={`${theme === 'Dark' ? ' rounded-lg shadow p-6' : 'bg-white rounded-lg shadow p-6'}`}>
          <h2 className="text-lg font-semibold mb-4">Payment info</h2>

          <label className="block text-sm text-gray-600 mb-1">Owner</label>
          <input
            value="JOHN DOE"
            disabled
            className="w-full mb-3 p-3 border rounded disabled:opacity-60 disabled:cursor-not-allowed"
          />

          <label className="block text-sm text-gray-600 mb-1">Card number</label>
          <input
            value="4242 4242 4242 4242"
            disabled
            className="w-full mb-3 p-3 border rounded disabled:opacity-60 disabled:cursor-not-allowed"
          />

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-1">Expiration</label>
              <input
                value="12 / 30"
                disabled
                className="w-full p-3 border rounded disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
            <div className="w-1/3">
              <label className="block text-sm text-gray-600 mb-1">CVC</label>
              <input
                value="123"
                disabled
                className="w-full p-3 border rounded disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <p className="text-xs mt-3 text-gray-500">Testing card </p>
        </div>

        {/* RIGHT: Productos y resumen */}
        <div className="rounded-lg shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold ">Products</h2>

            <ul className="space-y-3 ">
              {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard 
                            key={product.id}  
                            id={product.id}
                            image={product.images} 
                            title={product.title} 
                            price={product.price}
                            quantity={product.quantity || 1}
                            
                        />
                    ))
                }

            </ul>

            <div className="flex justify-between items-center border-t pt-3">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-3 mb-15">
            <button
              onClick={handlePay}
              disabled={processing}
              className={`w-full py-3 rounded-md text-white font-semibold shadow ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {processing ? 'Procesing...' : 'Make payment'}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay de éxito (z-index alto). Cuando showSuccess es true, mostramos un overlay gris que cubre todo y un mensaje centrado */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fondo gris semitransparente */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* Card del mensaje */}
          <div className="relative z-10 bg-white rounded-lg p-6 shadow-xl w-80 text-center">
            <h3 className="text-xl font-semibold mb-2 text-black">Payment processed</h3>
            <p className="text-gray-600" >Thank you! — Your payment was processed correctly.</p>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
}
