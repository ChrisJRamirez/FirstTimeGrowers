import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <div className='flex justify-between w-full m-auto text-green-600 bg-sky-500/100'>
      <h1 >First Time Growers</h1>
      {/* Logo goes here, to the right of the the name FTG */}
    </div>
  )

}

export default Header;