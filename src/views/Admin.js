import React, { useState, useEffect } from 'react';
import PendingCard from '../components/PendingCard';
import axios from 'axios';
import ArchivedCard from '../components/ArchivedCard';

export default function Admin() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // .get(`${process.env.REACT_APP_DEV_API_URL}/api/question/
    axios
      .get('http://localhost:9000/api/question')
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        alert('had an error grabbing ur questions homie');
        console.log(err);
      });
  }, []);

  return (
    <section className='flex justify-around w-full border-2 border-rose-100'>
      <div className='w-2/5 overflow-auto h-[48rem]'>
        <h2 className='text-xl text-center'>Pending</h2>
        {questions
          .filter(({ answer, reason }) => !answer && !reason)
          .map(({ question, id }) => {
            return <PendingCard question={question} id={id} key={id} />;
          })}
      </div>
      <div className='w-2/5 overflow-auto h-[48rem]'>
        <h2 className='text-xl text-center'>Archived</h2>
        {questions
          .filter(({ reason }) => reason)
          .map(({ question, reason, id }) => {
            return (
              <ArchivedCard
                id={id}
                key={id}
                question={question}
                reason={reason}
              />
            );
          })}
      </div>
    </section>
  );
}
