import {Github, Twitter, Reddit, Instagram} from '@icons-pack/react-simple-icons';


const Footer = (props) => {
  const socials = [
    {
      name: 'Github',
      // what is the best way to import social logos and use them on our page, sizing has to all be the same ***
      logo: '',
      to: 'https://github.com/ChrisJRamirez/FirstTimeGrowers',
      color: '#181717'
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
              <a>
                
              </a>
              
            </li>
          );
        })}
      </ul>
      <div className="flex justify-around">
        <Github size={36}/>
        <Twitter size={36}/>
        <Reddit size={36}/>
        <Instagram size={36}/>
      </div>
    </div>
  );
};

export default Footer;
