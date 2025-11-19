// App.jsx
import { useRoutes, BrowserRouter } from "react-router-dom";
import { WaggonContext, WaggonProvider } from "../../../Context/Context";
import Home from "../home";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import SignIn from "../SignIn/SignIn";
import NotFound from "../NotFound/NotFound";
import MyOrders from "../MyOrders/MyOrders";
import NavBar from "../../../Components/NavBar/NavBar";
import Layout from "../../../Components/NavBar/Layout/Layout";
import CheckoutSideMenu from "../../../Components/checkoutSideMenu/checkoutSM";



import Electronics from "../Categories/Electronics";
import Clothes from "../Categories/Clothes";
import Furniture from "../Categories/furniture";
import { useContext } from "react";
import SignOn from "../SignOn/SignOn";
import PaymentComponent from "../../../Components/Payment/Payment";

/* AppRoutes: OK que lo declares fuera, pero recuerda que useRoutes()
   debe ejecutarse dentro de un Router — y lo estarás usando dentro de <BrowserRouter>. */
function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/DR-Buy", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders/latest", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/electronics", element: <Electronics /> },
    { path: "/clothes", element: <Clothes /> },
    { path: "/furniture", element: <Furniture /> },
    { path: "*", element: <NotFound /> },
    { path: "/payment", element: <PaymentComponent/> }
  ]);

  return routes;
}

/* Componente que consume el contexto — debe ser hijo de WaggonProvider */
function AppContent() {
  const { theme } = useContext(WaggonContext);
  let context = useContext(WaggonContext)
  let logged = context.isLogged

  const storedUser = localStorage.getItem('userData')
  const storedUserData = JSON.parse(storedUser)
  console.log(storedUserData)

  // Usa valores claros y legibles
  const backgroundColor = theme === "Dark" ? "#343a40 " : "#ffffff ";
 
  const color = theme === "Dark" ? "#e9ecef " : "#343a40 ";

  if (logged == false && storedUser ) {
    return(
      <>
      <SignIn />
      </>
    )
  }

  if (logged == false ) {
    return(
      <>
      <SignOn/>
      </>
    )
  }

  
  return (
    <div style={{
    backgroundColor,
    color,
    minHeight: "100vh",
    overflowY: "scroll",
    overflowX: "hidden",
    transition: "background-color 0.5s ease-in-out",
    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"
  }}>
      <BrowserRouter>
      <NavBar />
        
        

        <Layout>
          <AppRoutes />
        </Layout>

        <CheckoutSideMenu />
        
      </BrowserRouter>
      
    </div>
  );
}

/* App: proveedor envolviendo el contenido */
function App() {
  
  return (
    <WaggonProvider>
      <AppContent />
    </WaggonProvider>
  );
}

export default App;


