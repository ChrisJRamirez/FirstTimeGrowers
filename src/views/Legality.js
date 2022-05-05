import WeedMap from '/Users/chrisjramirez/Documents/FirstTimeGrowers/FirstTimeGrowers/src/assets/WeedLegalityMap.png'

const Legality = (props) => {
  return (
  <div>
    <div>
      <h2 className='m-5 text-3xl font-extrabold text-center text-gray-900 sm:text-4xl'>
            Marijuana Legality
      </h2>
      <img
        className='object-cover w-full h-full'
        src= {WeedMap}
        alt='weed-map-legality'
        >
      </img>
      <section>
        <a className='italic text-center' href="https://disa.com/map-of-marijuana-legality-by-state">Source</a>
      </section> 
    </div>
  </div>
  )
};

export default Legality;
