import React from 'react';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../services/AssessmentService';

export function Reactforms() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> Cat Assessment Form </h1>
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
            <input type="radio" {...register(`previousContactWithJudSystem`, { value: 0 })} />
            <label htmlFor="firstName">No</label><br />
            <input type="radio" {...register(`previousContactWithJudSystem`, { value: 1 })} />
            <label htmlFor="firstName">Yes</label>
          </ul>
        </div>
      </ol>
      <ol>
        <li> Physical altercations with other cats</li>
        <div>
          <ul>
            <input type="radio" {...register(`altercationsWithOtherCat`, { value: 0 })} />
            <label htmlFor="firstName">0-3 altercations</label><br />
            <input type="radio" {...register(`altercationsWithOtherCat`, { value: 1 })} />
            <label htmlFor="firstName">3+ altercations</label>
          </ul>
        </div>
      </ol>
      <ol>
        <li> Physical altercations with owner (scratching, biting, etc...)</li>
        <div>
          <ul>
            <input type="radio" {...register(`altercationsWithOwner`, { value: 1 })} />
            <label htmlFor="firstName">10+ altercations</label><br />
            <input type="radio" {...register(`altercationsWithOwner`, { value: 0 })} />
            <label htmlFor="firstName">0-10 altercations</label>
          </ul>
        </div>
      </ol>
      <ol>
        <li> Plays well with dogs</li>
        <div>
          <ul>
            <input type="radio" {...register(`playsWithDogs`, { value: 1 })} />
            <label htmlFor="altercationsWithOwner">No</label><br />
            <input type="radio" {...register(`playsWithDogs`, { value: 0 })} />
            <label htmlFor="altercationsWithOwner">Yes</label>
          </ul>
        </div>
      </ol>
      <ol>
        <li> Hisses at strangers</li>
        <div>
          <ul>
            <input type="radio" {...register(`hissesAtStrangers`, { value: 1 })} />
            <label htmlFor="firstName">Yes</label><br />
            <input type="radio" {...register(`hissesAtStrangers`, { value: `0` })} />
            <label htmlFor="firstName">No</label>
          </ul>
        </div>
      </ol>
      <div />
      <input type="submit" />
    </form>
  );
}
const onSubmit = async (data) => {
  // Calculate scores based on responses
  console.log(`access on submit`);
  data.score = calculateScore(data);
  data.riskLevel = calculateRisk(data.score);
  await AssessmentService.submit({ assessment: data });
  // Additional logic after submitting the form
};
const calculateScore = (formData) => {

  console.log(`access calculate score`);
  let score = 0;
  score += formData.previousContactWithJudSystem.value;
  score += formData.altercationsWithOtherCat.value;
  score += formData.altercationsWithOwner.value;
  score += formData.playsWithDogs.value;
  score += formData.hissesAtStrangers.value;
  console.log(formData.playsWithDogs.value);
  return score;
};
const calculateRisk = (score) => {
  let riskLevel = `low`;

  if (score >= 0 && score <= 2) {
    riskLevel = `low`;
  } else if (score >= 3 && score <= 4) {
    riskLevel = `medium`;
  } else if (score >= 5 && score <= 6) {
    score = `high`;
  }
  return riskLevel;
};
