// https://www.squarespace.com/templates/bailard-demo

export default function Hero() {
  return (
    <div className='bg-white'>
      <main>
        <div>
          <div className='relative'>
            <div className='absolute inset-x-0 bottom-0 h-1/2' />
            {/* <div className='absolute inset-x-0 bottom-0 bg-gray-100 h-1/2' /> */}
            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
              
              
              <div className='relative sm:rounded-2xl sm:overflow-hidden'>
              {/* <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'> */}

              
                <div className='absolute inset-0'>
                  {/* https://www.pexels.com/photo/person-holding-green-canabis-2178565/ */}
                  <img
                    className='object-cover w-full h-full'
                    src='https://images.pexels.com/photos/2178565/pexels-photo-2178565.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                    alt='weed on hand'
                  />
                  <div className='absolute inset-0 bg-slate-600 mix-blend-multiply' />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                  <h1 className='text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl'>
                    <span className='block text-white'>First Time Grower?</span>
                  </h1>
                  <p className='max-w-lg mx-auto mt-6 text-2xl text-center text-rose-100 sm:max-w-3xl'>
                    Not problem, we're glad you've taken the first step towards
                    a lifelong hobby.
                  </p>
                  {/* <div className='max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center'>
                    <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                      <button className='flex items-center justify-center px-4 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 sm:px-8'>
                        Get started
                      </button>
                      <button className='flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8'>
                        Live demo
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
