import React from 'react';

const Contact = () => {
  return (
    <div id="contato" className="contato flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl mt-12 mb-20">

      <div className="md:mr-8">
        <img id="contato-img" src="assets/contact.svg" alt="contato" className="w-64 md:w-10/12 h-auto" />
      </div>

      <div className='mt-8 flex flex-col items-center md:items-start md:mt-40'>

        <h1 className="text-4xl md:text-7xl text-gray-950 mb-4">Reach me <strong>here</strong>:</h1>

        <div className="flex">
          <a href="mailto:eu@gilbertomorales.com">
            <img src="assets/email.svg" alt="Email" className='w-16 lg:w-20 h-auto mr-4'/>
          </a>
          <a href="https://github.com/eumorales" target="_blank">
            <img src="assets/github.svg" alt="Github" className='w-16 lg:w-20 h-auto'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
