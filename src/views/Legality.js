import WeedMap from '../assets/WeedLegalityMap.png';

const Legality = (props) => {
  return (
    <div>
      <div>
        <h2 className='m-5 text-3xl font-extrabold text-center text-gray-900 sm:text-4xl'>
          Marijuana Legality
        </h2>
        <div className='flex justify-center w-full h-full m-auto'>
          <img
            className='object-contain'
            src={WeedMap}
            alt='weed-map-legality'
          />
        </div>

        <section className='flex justify-center w-full py-6 m-auto'>
          <a
            className='italic text-center '
            href='https://disa.com/map-of-marijuana-legality-by-state'
          >
            Source
          </a>
        </section>
      </div>
    </div>
  );
};

export default Legality;
