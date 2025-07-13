import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github from './components/github/Github.jsx'
import Login from './components/login/Login.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
    
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "user/:userid",
        element: <User/>
      },
   
      {
        path: "login",
        element: <Login/>
      },,
      {
        path: "dashboard",
        element: <Dashboard/>
      }
      
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>  </StrictMode>,
)
