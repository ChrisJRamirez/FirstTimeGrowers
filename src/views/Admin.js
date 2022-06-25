import React, { useState } from 'react';
import PendingCard from '../components/PendingCard';
const testQuestions = [
  {
    question: 'How do you get the code for the bank vault?',
    answer: 'You checkout their branch.',
    reason: null,
    archived: false,
  },
  {
    question: 'What do you call a busy waiter?',
    answer: 'A server.',
    reason: null,
    archived: false,
  },
  {
    question: 'What do you call an idle server?',
    answer: 'A waiter.',
    reason: null,
    archived: false,
  },
  {
    question: 'What diet did the ghost developer go on?',
    answer: 'Boolean.',
    reason: null,
    archived: false,
  },
  {
    question: 'Why was the developer unhappy at their job?',
    answer: 'They wanted arrays.',
    reason: null,
    archived: false,
  },
];

export default function Admin() {
  return (
    <section className='flex justify-around w-full border-2 border-rose-100'>
      {/* <div className='w-2/5 border-2 border-rose-500'> */}
      <div className='w-2/5'>
        {/* make into card component */}
        <PendingCard />
      </div>
      <div className='w-2/5 border-2 border-rose-500'>111</div>
    </section>
  );
}
