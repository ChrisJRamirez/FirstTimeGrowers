const AutoVPhoto = (props) => {
  
  const checklist = [
    {
      question: 'How much light do Photoperiods need?',
      answer: '18 hours for veg, 12 hours for flowering',
      
    },
  ]

  const headNav = [
    {
      info: 'Simple answer: Autoflower. Autoflowers don’t require seasonal signals to initiate flowering.Cannabis Ruderalis, a strain native to Russia, has the ability to flower despite consistent light and weather. This subspecies was crossed with Indica and Sativa to form hybrids that “automatically” flower after a set period of time. Hence the name, Autoflower.',
    },
    {
      info: 'Photoperiods require you to understand the basics of growing a bit more before you invest in the effort. Photoperiods will stay in a Vegetative state as long as the lights are on for 18+ hours a day. Once you want them to start Flowering you switch the lights to a cycle of 12hours on, 12hours off.',
    },
    {
      info: 'When Autoflowers came on the the scene they were useful, but the yields were smaller because the plants spent less time in the Vegetative cycle (which builds the plants stems, leaves and overall size) they would produce lower yields due to there being less places for buds to grow (or to grow large). Nowadays that problem is almost non-existent as modern Autoflowers produce similar yields to their Photoperiod cousins. Obviously if you are growing in a very large medium or outdoors then Photoperiods will always produce more. ',
    },
    {
      info: 'Most Autoflowers are sold as “feminized” but make sure the seeds you are buying advertise this as not all Auto’s are feminized. Feminized means that the seed will guarantee a female. You want this as male plants produce seeds and have smaller yields than female plants.',
    },
    {
      info: 'If you are looking to have a plant that goes from seed to harvest within 10-12 weeks, minimalize any complication with light schedules, has very good yields, and is resilient to pests and fungus: go Auto.',
    },
  ]
 

  return (
    <div>
      <h1 className="flex justify-center py-4 font-bold">Autoflower vs. Photoperiod</h1>

      <div className="flex">
        <div
          style={{
            backgroundColor: '#97aaa7',
          }}
          className='py-6 rounded-lg shadow-lg '
          >
          <ul className='justify-around '>
            {headNav.map((item) => {
              return (
                <li className='p-3 active:bg-green-600 focus:outline focus:ring-violet-300 hover:bg-brown-200 hover:text-black'>
                  <p>
                    {item.info}
                  </p>
                </li>
              );
            })}
          </ul>
          </div>
          
          <div
                style={{
                  backgroundColor: '#97aaa7',
                }}
                className='flex flex-col items-center justify-center w-full h-full m-auto rounded-lg shadow-lg lg:w-1/2'
              >
                <h2 className='font-bold '>Checklist</h2>

                
                <ol className='divide-y-2 divide-gray-100 bg-brown'>
                  {checklist.map((item) => {
                    return (
                      <li className='p-3 hover:bg-brown-200 hover:text-black'>
                        <p clpssName='font-bold' >
                          {item.question}
                        </p>
                        <p>{item.answer}</p>
                      </li>
                    );
                  })}
                </ol>
          </div>
          
        </div>
        {/* div below puts space between footer */}
        <div className="py-4"></div>
      </div>
  )
}

export default AutoVPhoto;
