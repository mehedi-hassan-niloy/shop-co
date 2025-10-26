import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'
import Home from '../MainLayout/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error></Error>
        ,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]

    }

])

export default router;
