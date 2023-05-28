import React from 'react';

const CardSection = () => {
  return (
<div class="flex flex-wrap">
  <div class="w-full md:w-1/2 mb-4 md:mb-0">
    <div class="flex flex-col rounded-lg bg-[#DDC69F] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
     
      <div class="flex flex-col justify-start p-6">
        <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          Pizza du Moment
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
       
      </div>
    </div>
  </div>
  <div class="w-full md:w-1/2">
    <div class="flex flex-col rounded-lg bg-[#DDC69F] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <img
        class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="/img/Pdm.jpeg"
        alt=""
      />
      <div class="flex flex-col justify-start p-6">
        <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          Pizza gamda neek
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
        <p class="text-xs text-neutral-500 dark:text-neutral-300">
          Last updated 3 mins ago
        </p>
      </div>
    </div>
  </div>

  <div class="w-full md:w-1/2">
    <div class="flex flex-col rounded-lg bg-[#9EB7E5] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <img
        class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="/img/Pdm.jpeg"
        alt=""
      />
      <div class="flex flex-col justify-start p-6">
        <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          Pizza gamda neek
        </h5>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
        <p class="text-xs text-neutral-500 dark:text-neutral-300">
          Last updated 3 mins ago
        </p>
      </div>
    </div>
  </div>
</div>



  


  );
};

export default CardSection;
