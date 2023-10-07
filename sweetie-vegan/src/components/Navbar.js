import { Component } from "react";
import "./Navbar.css"
import { BsPersonCircle,  } from 'react-icons/bs'
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import { IconContext } from "react-icons/lib";
import cake from '../imgs/cakelogo.svg'

class Navbar extends Component {
    state = {clicked: false}
    handelClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    // because we're extending compoennet 
    render() {
        return (
            <nav className="NavbarItems">
                <div className="navbar-logo-image">

                <img src={cake} alt="brand-icon" className="navbar-logo image" />
                <h1 className="navbar-logo">
                    <Link className="logo-link" to='/'>Sweetie Vegan</Link>
                    {/* Sweetie Vegan */}
                </h1>
                </div>
                <div className="menu-icons" onClick={this.handelClick} >
                    <IconContext.Provider value={{color: 'pink', size: 28, }}>
                        {this.state.clicked ? <GiCancel /> : <GiHamburgerMenu />}
                    </IconContext.Provider>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            // make list tag dynamic
                            <li key={index}> 
                                <Link className={item.className} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                    <button>
                    <a href="/login">
                        <IconContext.Provider value={{color: '#B16E4B', size: 28}}>
                            <BsPersonCircle />
                        </IconContext.Provider>
                        {/* Login */}
                    </a></button>
                </ul>
            </nav>
        )    
    } 
}

export default Navbar;