import {Github, Twitter, Reddit, Instagram} from '@icons-pack/react-simple-icons';
import { Link } from 'react-router-dom';


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
    // <div
    //   style={{
    //     backgroundColor: '#97aaa7',
    //   }}
    //   className='py-6 rounded-lg shadow-lg'
    // >
    //   <ul className='flex justify-around'>
    //     {socials.map((item) => {
    //       return (
    //         <li className='p-3 hover:bg-brown-200 hover:text-black'>
    //           <a className='font-bold' href={item.to}>
    //             {item.name}
    //           </a>
    //           <a>
                
    //           </a>
              
    //         </li>
    //       );
    //     })}
    //   </ul>
    <div style={{
        backgroundColor: '#97aaa7',
        }}
        className='py-6 rounded-lg shadow-lg'>
      <div className="flex justify-around ">
          <a className="hover:bg-brown-200" href="https://github.com/ChrisJRamirez/FirstTimeGrowers">
            GitHub<Github size={55}/>
          </a>

          <a className="hover:bg-brown-200" href="https://twitter.com/FTGrowers">
            Twitter<Twitter size={55}/>
          </a>

          <a className="hover:bg-brown-200" href="https://www.reddit.com/user/TheFirstTimeGrowers">
            Reddit<Reddit size={55}/>
          </a>
          
          <a className="hover:bg-brown-200" href="https://www.instagram.com/thefirsttimegrowers/">
            Instagram<Instagram size={55}/>
          </a>
      </div>
    </div>
    
// will need div down here if uncomment map shi above
  );
};

export default Footer;
