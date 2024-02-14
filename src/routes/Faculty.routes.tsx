import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import FacultyOfferCor from "../pages/faculty/FacultyOfferCor";

export const FacultyPath = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <FacultyDashboard/>,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <FacultyOfferCor/>,
  }
]
