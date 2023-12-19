// CatForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const CatForm = () => {
  const { errors, handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle the form data as needed, e.g., send it to a server, etc.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Previous contact with the Cat Judicial System</label>
        <div>
          <label>
            No
            <input type="radio" name="contactWithJudicialSystem" value="0" ref={register} />
          </label>
          <label>
            Yes
            <input type="radio" name="contactWithJudicialSystem" value="1" ref={register} />
          </label>
        </div>
      </div>

      <div>
        <label>Physical altercations with other cats</label>
        <div>
          <label>
            0-3 altercations
            <input type="radio" name="altercationsWithOtherCats" value="0" ref={register} />
          </label>
          <label>
            3+ altercations
            <input type="radio" name="altercationsWithOtherCats" value="1" ref={register} />
          </label>
        </div>
      </div>

      <div>
        <label>Physical altercations with owner</label>
        <div>
          <label>
            0-10 altercations
            <input type="radio" name="altercationsWithOwner" value="0" ref={register} />
          </label>
          <label>
            10+ altercations
            <input type="radio" name="altercationsWithOwner" value="1" ref={register} />
          </label>
        </div>
      </div>

      <div>
        <label>Plays well with dogs</label>
        <div>
          <label>
            No
            <input type="radio" name="playsWellWithDogs" value="1" ref={register} />
          </label>
          <label>
            Yes
            <input type="radio" name="playsWellWithDogs" value="0" ref={register} />
          </label>
        </div>
      </div>

      <div>
        <label>Hisses at strangers</label>
        <div>
          <label>
            Yes
            <input type="radio" name="hissesAtStrangers" value="1" ref={register} />
          </label>
          <label>
            No
            <input type="radio" name="hissesAtStrangers" value="0" ref={register} />
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CatForm;
