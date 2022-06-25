import React, { useState } from 'react';

const initialFormValues = { answer: '', reason: 'unrelated' };

export default function PendingCard({ question, id }) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [approving, setApproving] = useState(true);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    // check if we are approving or archiving
    e.preventDefault();
  };

  return (
    <div className='max-w-xs m-auto my-2 overflow-hidden bg-white rounded shadow-lg'>
      <form className='px-6 py-4' onSubmit={onSubmit}>
        {/* Approve/Archive Buttons */}
        <div className='w-full'>
          <button
            onClick={() => {
              setApproving(true);
            }}
            className='w-1/2 m-auto bg-green-500'
          >
            Approve
          </button>
          <button
            onClick={() => {
              setApproving(false);
            }}
            className='w-1/2 m-auto bg-red-500'
          >
            Archive
          </button>
        </div>

        {/* Question */}
        <h4 className='mb-2 font-bold text-center text-l'>{question}</h4>

        {/* Answer/Reason */}
        {approving ? (
          <input
            className='block w-full p-4 border-2 border-black rounded-lg sm:text-md'
            id='answer'
            name='answer'
            onChange={onChange}
            type='text'
            value={formValues.answer}
            placeholder='answer'
          />
        ) : (
          <div className='flex justify-around w-full my-2'>
            <label className='w-1/5'>Reason</label>
            <select
              id='reason'
              name='reason'
              onChange={onChange}
              value={formValues.reason}
              className='w-3/5 text-center'
            >
              <option value='unrelated'>Unrelated</option>
              <option value='inappropriate'>Inappropriate</option>
              <option value='incorrectly worded'>Incorrectly Worded</option>
            </select>
          </div>
        )}

        {/* SUBMISSTION Approving/Archiving */}
        <button
          type='submit'
          className='w-full m-auto my-2 text-lg'
          style={{ backgroundColor: approving ? '#90EE90' : '#FA8072' }}
        >
          {approving ? 'Submit' : 'Archive'}
        </button>
      </form>
    </div>
  );
}
