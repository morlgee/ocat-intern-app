import React, { useEffect, useState } from 'react';
import { AssessmentService } from '../../services/AssessmentService';
// import {Reactforms} from '../components/Reactforms';

// export const AssessmentList2 = () => {
export const AssessmentNew = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      setAssessments(await AssessmentService.getList());
    };
    fetchAssessments();
  }, []);

  return (
    <div>
      {/*
          List goes here
          Please use the library react-table https://www.npmjs.com/package/react-table
      */}
    </div>
  );
};
