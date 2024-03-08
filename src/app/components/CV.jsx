import React from 'react';

const CV = () => {
  const handleOpenPDF = () => {
    const cvUrl = '/CV.pdf'; 
    window.open(cvUrl, '_blank');
  };

  return (
    <button className="mt-5 btn btn-outline" onClick={handleOpenPDF}>
      Open CV
    </button>
  );
};

export default CV;
