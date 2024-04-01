import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/home/Home.jsx';
import AppliedJobs from './components/AppliedJobs.jsx';
import Blogs from './components/Blogs.jsx';
import Statistics from './components/Statistics.jsx';
import Error from './components/Error.jsx';
import Job from './components/home/Job.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const [categoriesResponse, jobsResponse] = await Promise.all([
            fetch('/categories.json'),
            fetch('/jobs.json')
          ]);
          const [categories, jobs] = await Promise.all([
            categoriesResponse.json(),
            jobsResponse.json()
          ]);
          return { categories, jobs };
        }
      },
      {
        path: "/featured-jobs/:jobId",
        element: <Job></Job>,
        loader: ()=> fetch('../public/jobs.json')
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
