import styles from './Navbar.module.css';
import logo from './hostel.png';
import userIcon from './user.png';
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/nav/userLogin/*';
    }
    
    if(localStorage.getItem('token') != null || localStorage.getItem('user') != null) {

        var user = localStorage.getItem('token');
        return (
            <div>
                <div className = {styles.navbar}>
                    <img src = {logo} class = {styles.logo}></img>
                    <h1 className = {styles.title}>HosteLife</h1>
                    <Link to = '/' className = {styles.options}>Home</Link>
                    <Link to = '/nav/hostels/*' className = {styles.options}>Hostels</Link>
                    <Link to = '/nav/contact/*' className = {styles.options}>Contact Us</Link>
                    <Link to = {'/nav/dashboard/dashboardDefault/'}  className = {styles.logged}>
                        <img src = {userIcon} className = {styles.userLogo} />
                        <h1 className = {styles.userName} >Dashboard</h1>
                    </Link>
                    <Link to = "/nav/login/" className = {styles.options} style = {{cursor: 'pointer'}} onClick = {logout}>Logout</Link>
                </div>
                <Outlet className = {styles.outlet}/>
            </div>
        )
    }
    return (
        <div>
            <div className = {styles.navbar}>
                <img src = {logo} class = {styles.logo}></img>
                <h1 className = {styles.title}>HosteLife</h1>
                <Link to = '/' className = {styles.options}>Home</Link>
                <Link to = '/nav/hostels/*' className = {styles.options}>Hostels</Link>
                <Link to = '/nav/contact/*' className = {styles.options}>Contact Us</Link>
                <Link to = '/nav/userRegister/*'className = {styles.options}>Register</Link>
                <Link to = '/nav/userLogin/*' className = {styles.options}>Login</Link>
            </div>
            <Outlet className = {styles.outlet}/>
        </div>
        
    )
}

export default Navbar;