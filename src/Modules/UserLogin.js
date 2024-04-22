import styles from './Register.module.css';
import LoginImage from './LoginImage.jpg';
import { useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const UserLogin = () => {

    let [loggedIn, setLoggedIn] = useState(false);


    function submitHandler () {
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email);

        if(email != '' && password != '') {
            $.ajax ({
                type : 'POST',
                url : 'http://localhost/wt/studentRegistration.php',
                data : {
                    'type' : 'login',
                    'email' : email,
                    'password' : password,
                },
                success(data) {
                    if(data == 'true') {
                        setLoggedIn(true);
                        localStorage.setItem('user', email);
                        window.location.reload();
                    }
                    else {
                        console.log(data);
                    }
                }
            })
        }
    }

    if(localStorage.getItem('user') == null && localStorage.getItem('token') == null) {
        return (
            <div className = {styles.body}>
                <img src = {LoginImage} className = {styles.RegisterImage}/>
                <div className = {styles.outbox}>
                    <h1 className = {styles.title}>
                        User Login
                    </h1>
                    <label className = {styles.labels}>Email</label>
                    <input type = "email" className = {styles.inputField} id = 'email'/>
                    <label className = {styles.labels}>Password</label>
                    <input type = "password" className = {styles.inputField} id = 'password'/>
                    <button className = {styles.send} onClick = {submitHandler}>Login</button>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className = {styles.body}>
                <img src = {LoginImage} className = {styles.RegisterImage}/>
                <div className = {styles.outbox}>
                    <h1 className = {styles.title}>Logged In Successfully!</h1>
                    <Link to = {'/nav/dashboard/' + localStorage.getItem('token')} className = {styles.gotodash} >Go To Dashboard</Link>
                </div>
            </div>
        )
    }
    
}

export default UserLogin;