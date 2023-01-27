import Input from '@/components/Input/Input';
import { useForm } from 'react-hook-form';

//TODO: developed form and types. This markup
const CreateUser = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue='test' {...register('example')} />
      <Input
        control={control}
        name='description'
        label='Описание'
        fullWidth
        validation={{
          required: true,
        }}
        size='small'
      />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type='submit' />
    </form>
  );
};

export default CreateUser;
