import Header from "./components/Header/Header"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./Layout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Starter from "./components/Starter/Starter"
import Wraps from "./components/Wraps/Wraps"
import Club from "./components/Clubsandwich/Club"
import Rice from "./components/Rice and chowmein/Rice"
import Contact from "./components/Contact/Contact"
import Cart from "./components/Cart/Cart"

function App() {
    const router=createBrowserRouter([{
      path:'',
      element:<Layout/>,
      children:[{
        path:'/',
        element:<Home />,
        children:[{
          path:'/',
          element:<Starter/>
        },{
          path:'/wrap',
          element:<Wraps/>
        },{
          path:'/club',
          element:<Club/>
        },{
          path:'/rice',
          element:<Rice/>
        }]
      },{
        path:'/About',
        element:<About/>
    },{
      path:'/contactus',
      element:<Contact/>
    },
  {
    path:'/Cart',
    element:<Cart/>
  }],
  }])
  
    return (
     <>
     <RouterProvider router={router}/>
     </>
    )
  }

export default App
