
import './Navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {LiaBarsSolid} from 'react-icons/lia'

export const Navbar = () => {

  return (
    <header>
        <label></label>
        <input type='checkbox' id='check' />
        <label className='check-box' htmlFor='check'>
          <i className='close' id='cancel'><AiFillCloseCircle /></i>
          <i className='3-bars' id='btn'><LiaBarsSolid /></i>
        </label>
        <nav className='navbar'>
            <div className='nav-name'>Waqhar's Portfolio</div>            
            <ul className='nav-name-pts'>
                <li><a href='#intro' >Intro</a></li>
                <li><a href='#education' >About me</a></li>
                <li><a href='#experience' >Experience</a></li>
                <li><a href='#projects' >Projects</a></li>
                <li><a href='#contact' >Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}
