import React from 'react';
import phoneImg from './images/phone.svg';
// call for the custom hook to be used
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  // returns the state saved on context
  // const data = useGlobalContext();
  return (
    //hides the menu when mouses hover over section
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from startup to Fortune 500s-use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their business online
          </p>
          <button className='btn'>Start now </button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='' className='phone-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
