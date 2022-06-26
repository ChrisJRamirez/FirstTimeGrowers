import React from 'react';

export default function ArchivedCard({ question, reason, id }) {
  return (
    <div className='max-w-xs m-auto my-2 overflow-hidden bg-white rounded shadow-lg'>
      <div className='px-6 py-4'>
        <h3>Id: {id}</h3>
        <h3>Question: {question}</h3>
        <h3>Reason: {reason}</h3>
      </div>
    </div>
  );
}
