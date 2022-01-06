const Footer = (props) => {
  const socials = [
    {
      name: 'Github',
      // what is the best way to import social logos and use them on our page, sizing has to all be the same ***
      logo: '/Users/chrisjramirez/Documents/FirstTimeGrowers/FirstTimeGrowers/src/assets/GitHub-Mark-64px.png',
      to: 'https://github.com/ChrisJRamirez/FirstTimeGrowers',
    },
    {
      name: 'Twitter',
      logo: '',
      to: 'https://twitter.com/FTGrowers',
    },
    {
      name: 'Reddit',
      logo: '',
      to: 'https://www.reddit.com/user/TheFirstTimeGrowers',
    },
    {
      name: 'Instagram',
      logo: '',
      to: 'https://www.instagram.com/thefirsttimegrowers/',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#97aaa7',
      }}
      className='py-6 rounded-lg shadow-lg'
    >
      <ul className='flex justify-around'>
        {socials.map((item) => {
          return (
            <li className='p-3 hover:bg-brown-200 hover:text-black'>
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
  );
};

export default Footer;
