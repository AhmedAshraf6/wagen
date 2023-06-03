import React from 'react';

export default function GooMap() {
  return (
    <div className=' flex justify-center '>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14944129.285795204!2d34.43814049736791!3d23.87298016868065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2seg!4v1685823012874!5m2!1sen!2seg'
        width='600'
        height='300'
        loading='lazy'
        className='rounded-3xl -mt-[30px]'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}
