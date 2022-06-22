import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useState, useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const FAQ = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DEV_API_URL}/api/question/approved`)
      .then((res) => {
        const questions = res.data;
        setQuestions(questions);
      })
      .catch((err) => {
        // setQuestions(faqs);
      });
  }, []);

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-5/6 px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto divide-y-2 divide-gray-200 '>
          <h2 className='text-3xl font-extrabold text-center text-gray-900 sm:text-4xl'>
            Frequently asked questions
          </h2>
          <dl className='mt-6 space-y-6 divide-y divide-gray-200'>
            {questions.map((faq, id) => (
              <Disclosure as='div' key={faq.question} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt className='text-lg'>
                      <Disclosure.Button
                        key={id}
                        className='flex items-start justify-between w-full text-left text-gray-400'
                      >
                        <span className='font-medium text-gray-900'>
                          {faq.question}
                        </span>
                        <span className='flex items-center ml-6 h-7'>
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden='true'
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='pr-12 mt-2'>
                      <p className='text-base text-gray-500'>{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
