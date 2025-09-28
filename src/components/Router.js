import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import App from '../App';
import WatchVideo from './WatchVideo'
import Body from './Body';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path:"/watch",
                element:<WatchVideo />
            }
        ]
    },
  
])

export default appRouter