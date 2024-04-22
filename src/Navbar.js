import styles from './Navbar.module.css';
import logo from './hostel.png';
import userIcon from './user.png';
import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {

    function logout() {
        localStorage.removeItem('token');
        console.log(localStorage.getItem('token'));
        window.location.reload();
    }

    if(localStorage.getItem('token') != null) {

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
                <Link to = '/nav/home/' className = {styles.options}>Home</Link>
                <Link to = '/nav/hostels/*' className = {styles.options}>Hostels</Link>
                <Link to = '/nav/contact/*' className = {styles.options}>Contact Us</Link>
                <Link to = '/nav/register/*'className = {styles.options}>Register</Link>
                <Link to = '/nav/login/*' className = {styles.options}>Login</Link>
            </div>
            <Outlet className = {styles.outlet}/>
        </div>
        
    )
}

export default Navbar;