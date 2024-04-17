import styles from './Dashboard.module.css';
import { useState } from 'react';

const Dashboard = () => {
    
    const [page, setPage] = useState(0);

    function logout() {
        localStorage.removeItem('token');
        console.log(localStorage.getItem('token'));
        window.location.reload();
        window.location.href("/nav/login/*");
    }

    function changePage(value) {
        setPage(value);
    }

    return (
        <div class = {styles.body}>
            <div class = {styles.leftNavbar}>
                <button onClick = {logout}>Logout</button>
                <button onClick={() => setPage(0)}>Edit Profile</button>
                <button onClick={() => setPage(1)}>Add Rooms</button>
                <button onClick={() => setPage(2)}>Edit Room Info</button>
            </div>
            <div>
                <h1>Add Room</h1>
                <label>Floor No.</label>
                <input type = "text" />
                <br/>
                <label>Rent</label>
                <input type = "text" />
                <br/>
                <label>Capacity</label>
                <input type = "text" />
                <br/>
                <label>Currently Occupied</label>
                <input type = "text" />
                <br/>
                <label>Available</label>
                <input type = "text" />
                <br/>
            </div>
        </div>
    )
}

export default Dashboard;