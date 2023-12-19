import React from 'react';
import { useForm } from 'react-hook-form';

export function Reactforms() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register(`firstName`)} />
      <input {...register(`lastName`, { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register(`age`, { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <h1>  Previous contact with the Cat Judicial System </h1>
      <ul>
        <li> The description goes here</li>
      </ul>
      <h2>Cat Details</h2><br />
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" placeholder="First Name" {...register(`firstName`, { required: true })} />
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" placeholder="First Name" {...register(`firstName`, { required: true })} /><br />
      <h2> Questions & Responses </h2><br />
      <ol>
        <li> Previous contact with the Cat Judicial System</li>
        <div>
          <ul>
            <input type="radio" {...register(`altercationsWithOwner`, { value: `0` })} />
            <label htmlFor="firstName">No</label><br />
            <input type="radio" {...register(`altercationsWithOwner`, { value: `1` })} />
            <label htmlFor="firstName">Yes</label>
          </ul>
        </div>
      </ol>
      <ol>
        <li> Physical altercations with other cats</li>
        <div>
          <ul>
            <input type="radio" {...register(`altercationsWithOwner`, { value: `0` })} />
            <label htmlFor="firstName">0-3 altercations</label><br />
            <input type="radio" {...register(`altercationsWithOwner`, { value: `1` })} />
            <label htmlFor="firstName">3+ altercations</label>
          </ul>
        </div>
      </ol>
      <ol>
        <li> Physical altercations with owner (scratching, biting, etc...)</li>
        <div>
          <ul>
            <input type="radio" {...register(`altercationsWithOwner`, { value: `1` })} />
            <label htmlFor="firstName">10+ altercations</label><br />
            <input type="radio" {...register(`altercationsWithOwner`, { value: `0` })} />
            <label htmlFor="firstName">0-10 altercations</label>
          </ul>
        </div>
      </ol>
      <ol>
        <li> Plays well with dogs</li>
        <div>
          <ul>
            <input type="radio" {...register(`altercationsWithOwner`, { value: `1` })} />
            <label htmlFor="firstName">No</label><br />
            <input type="radio" {...register(`altercationsWithOwner`, { value: `0` })} />
            <label htmlFor="firstName">Yes</label>
          </ul>
        </div>
      </ol>
      <ol>
        <li> Hisses at strangers</li>
        <div>
          <ul>
            <input type="radio" {...register(`altercationsWithOwner`, { value: `1` })} />
            <label htmlFor="firstName">Yes</label><br />
            <input type="radio" {...register(`altercationsWithOwner`, { value: `0` })} />
            <label htmlFor="firstName">No</label>
          </ul>
        </div>
      </ol>
      <div />
      <input type="submit" />
    </form>
  );
}
