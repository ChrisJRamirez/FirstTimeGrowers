// import { Link } from 'react-router-dom';

const Header = (props) => {

  const headNav = [
    {
      name: 'FAQ',
      // what is the best way to import social logos and use them on our page, sizing has to all be the same ***
      logo: '/Users/chrisjramirez/Documents/FirstTimeGrowers/FirstTimeGrowers/src/assets/GitHub-Mark-64px.png',
      to: 'faq',
    },
    {
      name: 'Mission',
      logo: '',
      to: 'mission',
    },
    {
      name: 'Contact',
      logo: '',
      to: 'contact',
    },
    {
      name: 'Team',
      logo: '',
      to: 'team',
    },
  ]
  
  return (
      <div className='w-full py-2'>
        <nav style={{
          backgroundColor: '#97aaa7',
        }}
          className="fixed top-0 flex flex-wrap justify-between p-6 ">
          <div className="flex items-center flex-shrink-0 mr-6 text-white">
            <a className="text-white no-underline hover:text-white hover:underline" href="/">
              <h2 className="pl-2 text-3xl">First Time Growers</h2>
            </a>
          </div>

          <div className="flex-grow hidden pt-6 lg:flex lg:items-center lg:block lg:pt-1" id="nav-content">
            <ul className='flex items-center flex-1 list-reset lg:flex justify-evenly'>
              {headNav.map((item) => {
                return (
              <li className='p-3 px-4 py-2 font-bold text-black no-underline hover:text-black hover:text-underline hover:underline hover:bg-brown-200'>
                <a className='font-bold' href={item.to}>
                  {item.name}
                </a>
                {/* add logos here instead */}
                {item.subtext && <p>{item.subtext}</p>}
              </li>
              );
             })}
            </ul>
          </div>
        </nav>

        <div className="container mx-auto mt-24 bg-white shadow-lg md:mt-18">
        
        {/* attempted remake */}
        </div>

          <div className='w-full'>
          
        </div>
      </div>

  );
};

export default Header;
