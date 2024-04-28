import styles from './Navbar.module.css';
import logo from './hostel.png';
import userIcon from './user.png';
import { Outlet, Link } from "react-router-dom";
import menulogo from "./menu-bar.png";
import cancel from './cancelButton.png';
import { useState } from 'react';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/nav/userLogin';
    }
    
    function menuPop() {
        if(!menuOpen) {
            document.getElementById("menuBlock").style.display = 'flex';
            document.getElementById("menuClick").src = cancel;
            setMenuOpen(true);
        }
        else {
            document.getElementById("menuBlock").style.display = 'none';
            document.getElementById("menuClick").src = menulogo;
            setMenuOpen(false);
        }  
    }

    function toHome () {
        window.location.href = '/';
    }

    function toDashboard() {
        if(localStorage.getItem('user') != null) {
            window.location.href = '/nav/dashboard/userProfile';
            return;
        }

        if(localStorage.getItem('token') != null) {
            window.location.href = '/nav/dashboard/dashboardDefault';
            return;
        }
    }

    if(localStorage.getItem('token') != null || localStorage.getItem('user') != null) {

        var user = localStorage.getItem('token');
        return (
            <div>
                <div className = {styles.navbar}>
                    <img src = {logo} className = {styles.logo}></img>
                    <h1 className = {styles.title} onClick = {toHome}>HosteLife</h1>
                    <div className = {styles.menuBlock} >
                        <Link to = '/' className = {styles.options}>Home</Link>
                        <Link to = '/nav/hostels' className = {styles.options}>Hostels</Link>
                        <Link to = '/nav/contact' className = {styles.options}>Contact Us</Link>
                        <label onClick = {toDashboard}  className = {styles.logged}>
                            <img src = {userIcon} className = {styles.userLogo} />
                            <h1 className = {styles.userName} >Dashboard</h1>
                        </label>
                        <Link to = "/nav/login" className = {styles.options} style = {{cursor: 'pointer'}} onClick = {logout}>Logout</Link>
                    </div>
                    <div className = {styles.menuBlockMobile} >
                        <img src = {menulogo} className = {styles.menuLogo} id = "menuClick" onClick = {menuPop}/>
                    </div>
                    <div className = {styles.menu} id = "menuBlock">
                        <Link to = '/' className = {styles.options}>Home</Link>
                        <Link to = '/nav/hostels' className = {styles.options}>Hostels</Link>
                        <Link to = '/nav/contact' className = {styles.options}>Contact Us</Link>
                        <label onClick = {toDashboard}  className = {styles.logged}>
                            <img src = {userIcon} className = {styles.userLogo} />
                            <h1 className = {styles.userName} >Dashboard</h1>
                        </label>
                        <Link to = "/nav/login" className = {styles.options} style = {{cursor: 'pointer'}} onClick = {logout}>Logout</Link>
                    </div>
                </div>
                <Outlet className = {styles.outlet}/>
            </div>
        )
    }

    return (
        <div>
            <div className = {styles.navbar}>
                <img src = {logo} className = {styles.logo}></img>
                <h1 className = {styles.title} onClick = {toHome}>HosteLife</h1>
                <div className = {styles.menuBlock} >
                    <Link to = '/' className = {styles.options}>Home</Link>
                    <Link to = '/nav/hostels' className = {styles.options}>Hostels</Link>
                    <Link to = '/nav/contact' className = {styles.options}>Contact Us</Link>
                    <Link to = '/nav/userRegister'className = {styles.options}>Register</Link>
                    <Link to = '/nav/userLogin' className = {styles.options}>Login</Link>
                </div>
                <div className = {styles.menuBlockMobile} >
                        <img src = {menulogo} className = {styles.menuLogo} id = "menuClick" onClick = {menuPop}/>
                </div>
                <div className = {styles.menu} id = "menuBlock">
                    <Link to = '/' className = {styles.options}>Home</Link>
                    <Link to = '/nav/hostels' className = {styles.options}>Hostels</Link>
                    <Link to = '/nav/contact' className = {styles.options}>Contact Us</Link>
                    <Link to = '/nav/userRegister'className = {styles.options}>Register</Link>
                    <Link to = '/nav/userLogin' className = {styles.options}>Login</Link>
                </div>    
            </div>
            <Outlet className = {styles.outlet}/>
        </div>
        
    )
}

export default Navbar;