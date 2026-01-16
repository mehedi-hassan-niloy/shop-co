import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'
import Home from '../MainLayout/Home';
import Category from '../Pages/Category/Category';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,


        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Category />
            }
        ]




    }

])

export default router;
