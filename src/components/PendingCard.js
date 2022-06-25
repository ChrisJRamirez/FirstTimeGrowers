import React, { useState } from 'react';

const initialFormValues = { answer: '' };

export default function PendingCard({ question, id }) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [approving, setApproving] = useState(true);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='max-w-xs m-auto my-2 overflow-hidden bg-white rounded shadow-lg'>
      <form class='px-6 py-4' onSubmit={onSubmit}>
        {/* Approve/Archive Buttons */}
        <div className='w-full'>
          <button className='w-1/2 m-auto bg-green-500'>Approve</button>
          <button className='w-1/2 m-auto bg-red-500'>Archive</button>
        </div>

        {/* Question */}
        <h4 class='font-bold text-l text-center mb-2'>
          Why did the apple cross the road?
        </h4>

        {/* Answer/Reason */}
        <input
          class='block w-full p-4 rounded-lg sm:text-md border-2 border-black'
          id='answer'
          name='answer'
          onChange={onChange}
          type='text'
          placeholder='answer'
        />

        {/* Approving/Archiving */}
        <button
          type='submit'
          className='w-full m-auto my-2 text-lg bg-green-200'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
