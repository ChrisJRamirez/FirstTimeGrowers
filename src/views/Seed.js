import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  };
  
  const faqs = [
    {
      question: 'Are fans really necessary?',
      answer: 'YES, the plants need airflow for multiple reasons. The big two being : helps strenghten the stem so it can support heavier buds once flowering, and it helps prevent mold/mildew.',
    },
    {
      question: 'What type of fan should I use?',
      answer: 'We recommend using some sort of fan with an oscillating (rotating back and forth) function, this will somewhat mimic a natural wind blowing.',
    },
    {
      question: 'How often should I be running the fan?',
      answer: 'We recommend running the fan for 1/4 to 1/2 of the day, with the most important time being after you water the plant. This will help reduce the chances of mold and such, as mentioned above.',
    },
    {
      question: 'How strong should the fan be?',
      answer: 'The fan should not be too strong for the plant, especially when it is younger, we recommend starting at the lowest setting. As the plant grows and gets stronger (thicker stem) you can use your judgement to the adjust the fan accordingly.',
    }
  ];
  
  const Seed = (props) => {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='w-5/6 px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8'>
          <div className='mx-auto divide-y-2 divide-gray-200 '>
            <h2 className='text-3xl font-extrabold text-center text-gray-900 sm:text-4xl'>
              Seeds
            </h2>
            <dl className='mt-6 space-y-6 divide-y divide-gray-200'>
              {faqs.map((faq) => (
                <Disclosure as='div' key={faq.question} className='pt-6'>
                  {({ open }) => (
                    <>
                      <dt className='text-lg'>
                        <Disclosure.Button className='flex items-start justify-between w-full text-left text-gray-400'>
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

export default Seed;
