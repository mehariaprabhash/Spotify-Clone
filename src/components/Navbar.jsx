import React, {useState} from 'react'
import './Navbar.css'
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { BsBell } from "react-icons/bs"
import { CiUser } from "react-icons/ci"
import { BsArrowDownCircle } from "react-icons/bs"

export default function Navbar(props) {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    // console.log("Navbar:: Inside handle search")
    event.preventDefault(); // Prevents form submission and page reload
    props.onSearch(query);
    setQuery('');
  };

  const handleLogout = (event) => {
    // console.log("inside logout button")
    event.preventDefault(); // Prevents form submission and page reload
    props.setIsLoggedIn(false);
    // props.setToken("");
  };

  const downloadApp = (url) => {
    window.open("https://www.spotify.com/de-en/download/linux/", '_blank');
  };
  
  return (
    <div className='navbar'>
      <div className='leftitems'>
        <div className='backward icon'>
          <MdOutlineArrowForwardIos style={{ transform: 'rotate(180deg)', fontSize: '20px' }} />
        </div>
        <div className='forward icon'>
          <MdOutlineArrowForwardIos style={{ fontSize: '20px' }} />
        </div>
        <div className="searchbar">
          {/* <input type="text" placeholder="What ado you want to listen to?" /> */}
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter playlist Id to search?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </div>

      <div className='rightitems'>
        <div className='item1'>Explore Premium</div>
        <div className='item2' onClick={downloadApp }>
          <div className='subitem1 icon' ><BsArrowDownCircle style={{ fontSize: '20px' }} /></div>
          <div className='subitem2'>Install App</div>
        </div>
        <div className='item3 icon'><BsBell style={{ fontSize: '20px' }} /></div>
        <div className='item4 icon' onClick={handleLogout}><CiUser style={{ fontSize: '20px' }} /></div>

      </div>
    </div>
  )
}
