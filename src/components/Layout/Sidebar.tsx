import Sider from 'antd/es/layout/Sider';
import { SidebarGenerator } from '../../utils/SidebarGenerator';
import { AdminPathTwo } from '../../routes/admin.routes';
import { Menu } from 'antd';
import { FacultyPath } from '../../routes/Faculty.routes';
import { StudentPath } from '../../routes/Student.routes';
import { useAppSelector } from '../../redux/features/hook';
import { useCurrentUser } from '../../redux/features/auth/authSlice';

const UserRole = {
  AMDIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student',
};

const Sidebar = () => {
  const user = useAppSelector(useCurrentUser)
  let sidebaritems;
  switch (user!.role) {
    case UserRole.AMDIN:
      sidebaritems = SidebarGenerator(AdminPathTwo, UserRole.AMDIN);
      break;

    case UserRole.FACULTY:
      sidebaritems = SidebarGenerator(FacultyPath, UserRole.FACULTY);
      break;

    case UserRole.STUDENT:
      sidebaritems = SidebarGenerator(StudentPath, UserRole.STUDENT);
      break;

    default:
      return user!.role;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '15px',
        }}
      >
        Ph Univercity
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={sidebaritems}
      />
    </Sider>
  );
};

export default Sidebar;
