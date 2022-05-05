import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
};

const faqs = [
  {
    question: 'Simple explanation, why should I grow an Autoflower as a first time grower?',
    answer: 'If you are looking to have a plant that goes from seed to harvest within 10-12 weeks, minimalize any complication with light schedules, has very good yields, and is resilient to pests and fungus: go Auto.',
  },
  {
    question: 'Which type of plant is best for a first time grower',
    answer: 'Simple answer: Autoflower. Autoflowers don’t require seasonal signals to initiate flowering. Cannabis Ruderalis, a strain native to Russia, has the ability to flower despite consistent light and weather. This subspecies was crossed with Indica and Sativa to form hybrids that “automatically” flower after a set period of time. Hence the name, Autoflower.',
  },
  {
    question: 'If I would rather try Photoperiods, what are the big differences?',
    answer: 'Photoperiods require you to understand the basics of growing a bit more before you invest in the effort. Photoperiods will stay in a Vegetative state as long as the lights are on for 18+ hours a day. Once you want them to start Flowering you switch the lights to a cycle of 12hours on, 12hours off.',
  },
  {
    question: 'Can you give me some more background on Autoflowers',
    answer: 'When Autoflowers came on the the scene they were useful, but the yields were smaller because the plants spent less time in the Vegetative cycle (which builds the plants stems, leaves and overall size) they would produce lower yields due to there being less places for buds to grow (or to grow large). Nowadays that problem is almost non-existent as modern Autoflowers produce similar yields to their Photoperiod cousins. Obviously if you are growing in a very large medium or outdoors then Photoperiods will always produce more.',
  },
  {
    question: 'What is a "feminized" seed, and which type of seed(s) should I be buying?',
    answer: 'Most Autoflowers are sold as “feminized” but make sure the seeds you are buying advertise this as not all Auto’s are feminized. Feminized means that the seed will guarantee a female. You want this as male plants produce seeds and have smaller yields than female plants.',
  },
  {
    question: 'What is the purpose of male plants, if females are the ones producing the bud/flower?',
    answer: 'If you were looking to create seeds, you would need both a female and male plant. If you are just looking to grow flower, only grow female plants.',
  },
  {
    question: 'Can I grow a male and female plant next to each other / together?',
    answer: 'Though there is some benefit to this for experienced growers (as mentioned above -> growing seeds), we would highly recommend not trying this out for a first timer.',
  },

];

const AutoVPhoto = (props) => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-5/6 px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto divide-y-2 divide-gray-200 '>
          <h2 className='text-3xl font-extrabold text-center text-gray-900 sm:text-4xl'>
            Autoflowers vs. Photoperiods
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

export default AutoVPhoto;
