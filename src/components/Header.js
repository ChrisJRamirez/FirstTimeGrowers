// import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='flex flex-col py-2'>
      <header>
          <nav style={{
            backgroundColor: '#97aaa7',
          }}
          className="fixed top-0 z-10 flex flex-wrap justify-between w-full p-6 ">
            <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="/">
            <h2 className="pl-2 text-3xl">First Time Growers</h2>
          </a>
        </div>

        <div className="flex-grow hidden pt-6 lg:flex lg:items-center lg:w-auto lg:block lg:pt-1" id="nav-content">
          <ul className="items-center flex-1 list-reset lg:flex">
            <li className="">
              <a className="inline-block px-4 py-2 font-bold text-black no-underline hover:text-black hover:text-underline hover:bg-brown-200" href="faq">FAQ</a>
            </li>
            <li className="">
              <a className="inline-block px-4 py-2 font-bold text-black no-underline hover:text-black hover:text-underline hover:bg-brown-200" href="">Mission</a>
            </li>
            <li className="">
              <a className="inline-block px-4 py-2 font-bold text-black no-underline hover:text-black hover:text-underline hover:bg-brown-200" href="">Contact</a>
            </li>
            <li className="">
              <a className="inline-block px-4 py-2 font-bold text-black no-underline hover:text-black hover:text-underline hover:bg-brown-200" href="">Team</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto mt-24 bg-white shadow-lg md:mt-18">

      </div>
  </header>

  </div>
  );
};

export default Header;
