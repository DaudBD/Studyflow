import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Homepage from './pages/Homepage.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import Featured from './Components/Featured.jsx';
import HowItWorks from './Components/HowItWorks.jsx';
import NotFound from './notfound/NotFound.jsx';
import Login from './signin/Login.jsx';
import Signup from './pages/signup/Sign-Up.jsx';
import Pricing from './Components/Pricing.jsx';
import About from './pages/about.jsx';
import Blog from './pages/blog.jsx';
import Careers from './pages/careers.jsx';
import HelpCenter from './pages/help-center.jsx';
import StudyTips from './pages/study-tips.jsx';
import Contact from './pages/contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "features",
        element: <Featured />,
      },
      {
        path: "how-it-works",
        element: <HowItWorks />,
      },
      { path: "pricing", element: <Pricing /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "careers", element: <Careers /> },
      { path: "help-center", element: <HelpCenter /> },
      { path: "study-tips", element: <StudyTips /> },
      { path: "contact", element: <Contact /> },
      {
        path: "sign-in",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
