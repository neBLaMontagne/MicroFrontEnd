import React from 'react';

const LandingPage = ({ title }) => {
  return (
    <div style={{ margin: '20px', padding: '10px', backgroundColor: 'yellow', textAlign: 'center' }}>
      <h1>{title}</h1>
    </div>
  );
};

export default LandingPage;