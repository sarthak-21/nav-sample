
import {useState} from 'react';

function Navbar() {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

    return (
      <div className= 'navbar'> 
      <div>
      <a className="nav-links" href="#home">Home</a>
      <a className="nav-links" href="#news">News</a>
      </div>
      <div class="dropdown">
    <button class="dropbtn">Dropdown 
     
    </button>
    <div class="dropdown-content">
      {/* <div class="header">
        <h2> Menu</h2>
      </div>  */}
      <h3>Category 1</h3>
      <a className="dropdown-items"  href="/" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Link 1 
      </a>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={isHovering ? 'level1' : 'horizontal-dropdown-content'}>
          <a className="sub-dropdown-items dropdown-items">Link1</a>
          <a className="sub-dropdown-items dropdown-items">Link2</a>
          <a className="sub-dropdown-items dropdown-items">Link3</a>
      </div>
      <a className="dropdown-items" href="/">Link 2</a>
      <a className="dropdown-items" href="/">Link 3</a>
      {/* <div class="column">

      </div> */}
    </div>
     </div> 
     <div className='right'>
        <button className='button-sign-in'> Sign In </button>
        <button className='button-register'> Register </button>
      </div>
    </div>   
      
    )
  }
  
  export default Navbar