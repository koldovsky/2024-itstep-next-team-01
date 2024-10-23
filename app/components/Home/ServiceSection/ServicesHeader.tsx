import React from 'react';

export default function ServicesHeader() {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-mrsSaint text-specialText mb-2">Our services</h1>
      <h2 className="font-frank text-5xl text-primaryText mb-4">Services We Provide</h2>
      <hr className='text-hrColor w-2/12 border-2 my-3 mx-auto' />
      <p className="font-inter text-secondaryText">We offer a variety of floral services, from unique bouquets to event decoration.</p>
    </header>
  ); 
}