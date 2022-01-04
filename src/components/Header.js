// import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='flex flex-col py-2'>
      <body className="font-sans leading-normal tracking-normal bg-gray-400">

          <nav className="fixed top-0 z-10 flex flex-wrap items-center justify-between w-full p-6 bg-gray-800">
            <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="/">
            <span className="pl-2 text-2xl"><i className="em em-grinning"></i>First Time Growers</span>
          </a>
        </div>

        <div className="block lg:hidden">
          <button id="nav-toggle" className="flex items-center px-3 py-2 text-gray-500 border border-gray-600 rounded hover:text-white hover:border-white">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        <div className="flex-grow hidden pt-6 lg:flex lg:items-center lg:w-auto lg:block lg:pt-1" id="nav-content">
          <ul className="items-center justify-end flex-1 list-reset lg:flex">
            <li className="">
              <a className="inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200 hover:text-underline" href="#">Active</a>
            </li>
            <li className="">
              <a className="inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200 hover:text-underline" href="#">Mission</a>
            </li>
            <li className="">
              <a className="inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200 hover:text-underline" href="#">Contact</a>
            </li>
            <li className="">
              <a className="inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200 hover:text-underline" href="#">Team</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto mt-24 bg-white shadow-lg md:mt-18">

      </div>
  </body>

  </div>
  );
};

export default Header;
