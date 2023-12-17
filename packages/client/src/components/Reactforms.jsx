import { useForm } from 'react-hook-form';

export function Reactforms() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => {
      // Handle form submission here
    })}>
      <input {...register(`firstName`)} />
      <input {...register(`lastName`, { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register(`age`, { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}
