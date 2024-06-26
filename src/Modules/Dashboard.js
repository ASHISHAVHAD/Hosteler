import styles from './Dashboard.module.css';
import { useState } from 'react';
import $ from 'jquery';
import { Outlet, Link } from "react-router-dom";
import user from '../user.png';
import arrow from '../Images/arrow.png';
import circle from '../Images/circle.png';
import dashboard from '../Images/dashboard.png';
import logout from '../Images/log-out.png';
import plus from '../Images/plus.png';
import userSmall from '../Images/userSmall.png';
import UserQueries from './UserQueries';
import down from './down.png';
import up from './up.png';

const Dashboard = () => {

    const [displayed, setDisplayed] = useState(false);

    function logoutFun() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = "/nav/login";
    }

    function displayMenu() {
        if(!displayed) {
            document.getElementById("dashboardMenu").style.display = 'flex';
            document.getElementById("dashboardButton").src = up;
            setDisplayed(true);
        }
        else {
            document.getElementById("dashboardMenu").style.display = 'none';
            document.getElementById("dashboardButton").src = down;
            setDisplayed(false);
        }
    }

    if(localStorage.getItem('user') != null) {
        return(
            <div class = {styles.body}>
                <div className = {styles.dashboardMenu} onClick={displayMenu}>
                    <strong>Menu</strong>
                    <img src = {down} className = {styles.dashboardDown} id = "dashboardButton"/>
                </div>
                <div className = {styles.dashboardTitleBlock} id = "dashboardMenu">
                    <img src = {user} className = {styles.user} />
                    <Link to = "/nav/dashboard/userProfile" className = {styles.dashboardOption}>
                        <img src = {userSmall} className = {styles.smallLogos} />Profile
                    </Link>
                    <Link to = "/nav/dashboard/userQueries" className = {styles.dashboardOption}>
                        <img src = {circle} className = {styles.smallLogos} />Queries
                    </Link>
                    <h3 className = {styles.dashboardOptionLogout} onClick = {logoutFun} >
                        <img src = {logout} className = {styles.smallLogos} />Logout
                    </h3>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        )
        
    } 

    return (
        <div className = {styles.body}>
            <div className = {styles.dashboardMenu} onClick={displayMenu}>
                <strong>Menu</strong>
                <img src = {down} className = {styles.dashboardDown} id = "dashboardButton"/>
            </div>
            <div className = {styles.dashboardTitleBlock} id = "dashboardMenu" >
                <img src = {user} className = {styles.user} />
                <Link to = "/nav/dashboard/dashboardDefault" className = {styles.dashboardOption}>
                    <img src = {dashboard} className = {styles.smallLogos} />Overview
                </Link>
                <Link to = "/nav/dashboard/profile" className = {styles.dashboardOption}>
                    <img src = {userSmall} className = {styles.smallLogos} />Profile
                </Link>
                <Link to = "/nav/dashboard/queries" className = {styles.dashboardOption}>
                    <img src = {circle} className = {styles.smallLogos} />Queries
                    </Link>
                <Link to = "/nav/dashboard/addRoom" className = {styles.dashboardOption}>
                    <img src = {plus} className = {styles.smallLogos} />Add Room
                </Link>
                <Link to = "/nav/dashboard/updateRoom" className = {styles.dashboardOption}>
                    <img src = {arrow} className = {styles.smallLogos} />Update Room
                </Link>
                <h3 className = {styles.dashboardOptionLogout} onClick = {logoutFun} >
                    <img src = {logout} className = {styles.smallLogos} />Logout
                </h3>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;