import React from 'react';

const Contact = () => {
  return (
    <div id="contato" className="contato flex justify-between items-center mx-auto max-w-6xl mt-12 mb-20">

      <div>
        <img id="contato-img" src="assets/contact.svg" alt="contato" className="max-w-lg h-auto" />
      </div>

      <div className='mt-52 ml-24'>

        <h1 className="text-7xl text-gray-950">Reach me <strong>here</strong>:</h1>

        <div className="flex mt-3 mb-5 gap-10">
        <a href="mailto:eu@gilbertomorales.com">
    <img src="assets/email.svg" alt="Email" className='max-w-24'/>
  </a>
  <a href="https://github.com/eumorales" target="_blank">
    <img src="assets/github.svg" alt="Github" className='max-w-20 mt-2'/>
  </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;