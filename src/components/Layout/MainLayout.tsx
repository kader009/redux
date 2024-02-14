import { Button, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
// import { AdminSidebar } from '../../routes/admin.routes';
// import { SidebarGenerator } from '../../utils/SidebarGenerator';
// import { AdminPathTwo } from '../../routes/admin.routes';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/features/hook';
import { logout } from '../../redux/features/auth/authSlice';
const { Header, Content, Footer } = Layout;

// const items: MenuProps['items'] = [
//   {
//     key: 'Dashboard',
//     label: <NavLink to='/admin/dashboard'>Dashboard</NavLink>
//   },
//   {
//     key: 'User Management',
//     label: 'User Management',
//     children: [
//       {
//         key: 'Create Admin',
//         label: <NavLink to='/admin/create-admin'>Create Admin</NavLink>,
//       },
//       {
//         key: 'Create Student',
//         label: <NavLink to='/admin/create-student'>Create Student</NavLink>,
//       },
//       {
//         key: 'Create Faculty',
//         label: <NavLink to='/admin/create-faculty'>Create Faculty</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const LogOutHandle = () =>{
    dispatch(logout())
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button onClick={LogOutHandle}>logout</Button>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
