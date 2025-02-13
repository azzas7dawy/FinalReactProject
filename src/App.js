/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import './index.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Courses from './Components/Courses/Courses';
import About from './Components/About/About';
import Pricing from './Components/Pricing/PricingPage.js';
import NotFound from './Components/NotFound/NotFound.jsx';

import AdminDashboard from './Components/Admin/Admin.jsx';
import CourseSection from './Components/Home/opencourse';
import PaymentPage from './Components/Pricing/Payment.js';
import ShoppingCart from './Components/Home/ShoppingCart.jsx';
import AdminShoppingCartPage from "./Components/Admin/AdminShoppingCart.jsx"; 
import { CartProvider } from "./Context/CartContext.js";




const router = createBrowserRouter([{
  // eslint-disable-next-line react/react-in-jsx-scope
  path: '/', element: <Layout />, children: [{
     // eslint-disable-next-line react/react-in-jsx-scope
     index: true, element: <Home />
  },
    {

    // eslint-disable-next-line react/react-in-jsx-scope
    path: '/home', element: <Home />
  }, {
    // eslint-disable-next-line react/react-in-jsx-scope
    path: '/contact', element: <Contact />
  }, {
    // eslint-disable-next-line react/react-in-jsx-scope
    path: '/login', element: <Login />
  }, {
    // eslint-disable-next-line react/react-in-jsx-scope
    path: '/AdminDashboard', element: <AdminDashboard />

  }, {
    // eslint-disable-next-line react/react-in-jsx-scope
    path: '/register', element: <Register />
  }, {
    // eslint-disable-next-line react/react-in-jsx-scope
    path: '/about', element: <About />
  }, {
    // eslint-disable-next-line react/react-in-jsx-scope
    path: '/courses', element: <Courses />
  },
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    path: '/ShoppingCart', element: <ShoppingCart/>
  },
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    path: '/opencourse', element: <CourseSection/>
  },
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    path:'/pricing',element:<Pricing/>
  } ,
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    path: '*', element: <NotFound />
  },
  {
  // eslint-disable-next-line react/react-in-jsx-scope
  path:"/payment" ,element:<PaymentPage />
  }
  ,  
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    path:"/AdminShoppingCart" ,element:<AdminShoppingCartPage />
    }
    ,
  // { path:"/about", element:<AboutUs />

  //     }
]

}])

function App() {
  return (
  
    // eslint-disable-next-line react/react-in-jsx-scope
    <CartProvider>
        
        <RouterProvider router={router} />
</CartProvider>
   
    // eslint-disable-next-line react/react-in-jsx-scope
  

  );
}

export default App;
