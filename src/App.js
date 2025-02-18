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
import Testimonials from './Components/Testimonial/Testimonial';
import Faq from './Components/Faq/Faq.jsx';
import OurGoals from './Components/About/OurGoals.jsx';


import AdminDashboard from './Components/Admin/Admin.jsx';
import CourseSection from './Components/Home/opencourse';
import PaymentPage from './Components/Pricing/Payment.js';
import ShoppingCart from './Components/Home/ShoppingCart.jsx';
import AdminShoppingCartPage from "./Components/Admin/AdminShoppingCart.jsx"; 
import { CartProvider } from "./Context/CartContext.js";

import AdminProfile from './Components/Admin/admin_profile';



const router = createBrowserRouter([{

  path: '/', element: <Layout />, children: [{
   
     index: true, element: <Home />
  },
    {

  
    path: '/home', element: <Home />
  }, {
  
    path: '/contact', element: <Contact />
  }, {
  
    path: '/login', element: <Login />
  }, {
  
    path: '/AdminDashboard', element: <AdminDashboard />

  }, {
  
    path: '/register', element: <Register />
  }, {
  
    path: '/about', element: <About />
  }, {
  
    path: '/courses', element: <Courses />
  },
  {
  
    path: '/ShoppingCart', element: <ShoppingCart/>
  },
  {
  
    path: '/opencourse', element: <CourseSection/>
  },
  {
  
    path:'/pricing',element:<Pricing/>
  } ,{
    path:'/testimonials',element:<Testimonials/>
  }  ,{
    path:'/faq',element:<Faq/>
  },{
    path:'/goals',element:<OurGoals/>
  } ,
  {
  
    path: '*', element: <NotFound />

  },
  {

  path:"/payment" ,element:<PaymentPage />
  }
  ,
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    path: '/AdminProfile', element: <AdminProfile/>
    
  },
  ,  
  {

    path:"/AdminShopping" ,element:<AdminShoppingCartPage />

    }
    ,
    {
     
      path:"/admin_profile" ,element:<AdminProfile />
      }
      ,
  // { path:"/about", element:<AboutUs />

  //     }
]

}])




function App() {
  return (
  
  
    <CartProvider>
        
        <RouterProvider router={router} />
</CartProvider>
   
  
  

  );
}

export default App;
