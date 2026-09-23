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
import InfoPage from './pages/InfoPage.jsx';


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
      { path: "about", element: <InfoPage title="About StudyFlow" description="StudyFlow helps students turn big academic goals into focused daily actions, track their progress, and build a study routine that lasts." /> },
      { path: "blog", element: <InfoPage title="StudyFlow Blog" description="Ideas and practical guidance for better study habits, thoughtful planning, and steady academic progress." /> },
      { path: "careers", element: <InfoPage title="Careers" description="We are building tools that make studying feel clearer and more manageable. Check back for future opportunities to join the StudyFlow team." /> },
      { path: "help-center", element: <InfoPage title="Help Center" description="Need help getting started? Create an account, set a study goal, and break it into daily tasks. For further assistance, contact our team." /> },
      { path: "study-tips", element: <InfoPage title="Study Tips" description="Plan a small set of achievable tasks, study in focused blocks, take short breaks, and review your progress at the end of each day." /> },
      { path: "contact", element: <InfoPage title="Contact StudyFlow" description="Questions or feedback? Send a note to leodaudbd@gmail.com and tell us how we can help." /> },
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
