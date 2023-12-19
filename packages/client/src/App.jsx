import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Reactforms } from './components/Reactforms';
// import { CatForm } from './components/CatForm';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentNew } from './pages/Assessments/AssessmentNew.jsx';
// import { AssessmentList } from './pages/Assessments/AssessmentList';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    element: <DashboardBulletin />,
    path: `/`,
  },
  {
    element: <NewAssessment />,
    path: `/assessment/new`,
  },
  // {
  //  element: <CatForm />,
  //  path: `/assessment/AssessmentNew`,
  // },
  {
    element: <Reactforms />,
    path: `/assessment/AssessmentNew`,
  },

]);

const App = () => <SiteWrapper>
  <RouterProvider router={router} />
</SiteWrapper>;

export default App;
