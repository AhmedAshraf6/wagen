import React from 'react';

export default function GooMap() {
  return (
    <div className=' flex justify-center mx-4'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.0618505378416!2d36.581756!3d28.387199799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a9adcd63e1b7f7%3A0x42da15fa861474e2!2z2YjYrNmK2YYg2YTYqtmC2YbZitipINin2YTZhdi52YTZiNmF2KfYqg!5e0!3m2!1sen!2ssa!4v1685893341298!5m2!1sen!2ssa'
        width='600'
        height='300'
        loading='lazy'
        className='rounded-3xl -mt-[30px]'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}
