import { Input } from 'antd';
import { Controller } from 'react-hook-form';

interface TInput{
  type: string;
  name: string;
  label ?: string
}

const HookInput = ({ type, name, label} : TInput) => {
  return (
    <>
    {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} type={type} id={name}  />
        )}
      />
    </>
  );
};

export default HookInput;
