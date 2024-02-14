import { Button, Row } from 'antd';
import { FieldValues, useForm, useFormContext } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/features/hook';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verify.Token';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import HookForm from '../components/form/HookForm';
import HookInput from '../components/form/HookInput';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register } = useForm({
  //   defaultValues: {
  //     id: 'A-0001',
  //     password: 'admin123',
  //   },
  // });
  const [login, { data, error }] = useLoginMutation();
  // console.log(login);

  console.log('data =>', data);
  console.log('error =>', error);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastid = toast.loading('loggin in');

    try {
      const userinfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userinfo).unwrap();
      console.log(res);

      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('logged in', { id: toastid, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
      console.log(user);
    } catch (error) {
      toast.error('something went wrong..', { id: toastid, duration: 2000 });
    }
  };

  const defaultValues = {
    userId: 'A-0001',
    password: 'admin123',
  }

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <HookForm onSubmit={onSubmit} defaultValues={defaultValues}>
        {/* <label htmlFor="id">ID:</label> */}
        <HookInput type="text" name="userId" label="UserId" />
        {/* <label htmlFor="id">password:</label> */}
        <HookInput type="text" name="password" label="password" />
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </HookForm>
    </Row>
  );
};

export default Login;
