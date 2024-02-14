import OfferCourse from "../pages/student/OfferCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const StudentPath = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <StudentDashboard/>,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferCourse/>,
  }
]