import { Link } from 'react-router-dom';

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
  ];

  return (
    <section>
      <div
        style={{
          backgroundColor: '#97aaa7',
        }}
        className='fixed z-50 w-full rounded-b-lg'
      >
        <div className='flex justify-between mx-10'>
          <Link className='my-auto font-bold text-center' to='/'>
            First Time Growers
          </Link>
          <nav>
            <ol className='flex'>
              {headNav.map((item) => {
                return (
                  <li className='p-3 hover:bg-brown-200 hover:text-black'>
                    <Link className='font-bold' to={item.to}>
                      {item.name}
                    </Link>
                    {item.subtext && <p>{item.subtext}</p>}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>

      <div className='py-6'></div>
    </section>
  );
};

export default Header;
