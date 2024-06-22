import React from 'react';
import { HiOutlineExternalLink } from "react-icons/hi";

const CV = () => {
  const handleOpenPDF = () => {
    const cvUrl = '/CV.pdf'; 
    window.open(cvUrl, '_blank');
  };

  return (
    <button className="mt-5 btn btn-outline" onClick={handleOpenPDF}>
      <span></span>Open CV <HiOutlineExternalLink />
    </button>
  );
};

export default CV;
