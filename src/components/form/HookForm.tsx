import { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TConfig = {
  defaultValues?: Record<string, any>;
}

interface TForm extends TConfig {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
}

const HookForm = ({ onSubmit, children, defaultValues }: TForm) => {
  const formConfig: TConfig = {}
  if (defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default HookForm;
