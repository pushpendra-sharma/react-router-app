import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './home';
import About from './about';
import Contact from './contact';
import PracticeIndex from './practice';

// Import practice components
import Accordion from '../components/practice/Accordion';
import Tabs from '../components/practice/Tabs';
import Modal from '../components/practice/Modal';
import Autocomplete from '../components/practice/Autocomplete';
import StarRating from '../components/practice/StarRating';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      // Practice routes
      {
        path: 'practice',
        element: <PracticeIndex />,
      },
      {
        path: 'practice/accordion',
        element: <Accordion />,
      },
      {
        path: 'practice/tabs',
        element: <Tabs />,
      },
      {
        path: 'practice/modal',
        element: <Modal />,
      },
      {
        path: 'practice/autocomplete',
        element: <Autocomplete />,
      },
      {
        path: 'practice/star-rating',
        element: <StarRating />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
