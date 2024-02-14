import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { AdminPathTwo } from './admin.routes';
import { routeGenerator } from '../utils/routes.Generator';
import { FacultyPath } from './Faculty.routes';
import { StudentPath } from './Student.routes';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/admin',
    element: <App />,
    children: routeGenerator(AdminPathTwo),
  },
  {
    path: '/faculty',
    element: <App />,
    children: routeGenerator(FacultyPath),
  },
  {
    path: '/student',
    element: <App />,
    children: routeGenerator(StudentPath),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default routes;
