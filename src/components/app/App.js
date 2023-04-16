import React from 'react';
import './App.css';
import features from '../../mocks/features';
import PageWrapper from '../layout/page-wrapper/page-wrapper';

function App() {
  return <PageWrapper features={features}/>;
}

export default App;
