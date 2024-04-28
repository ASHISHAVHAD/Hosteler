import styles from './Register.module.css';
import LoginImage from './LoginImage.jpg';
import { useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const UserLogin = () => {

    let [loggedIn, setLoggedIn] = useState(false);

    function removeErrorMessage(errorElement) {
        document.getElementById(errorElement).innerHTML = "";
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function submitHandler () {
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(!validateEmail(email)) {
            document.getElementById("emailError").innerHTML = "Enter valid email id";
            return false;
        }

        if(email != '' && password != '') {
            $.ajax ({
                type : 'POST',
                url : 'studentRegistration.php',
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
                        document.getElementById('passwordError').innerHTML = "Invalid email or password!";
                    }
                }
            })
        }
    }

    if(localStorage.getItem('user') == null) {
        return (
            <div className = {styles.body}>
                <div className = {styles.imageContainer}>
                    <img src = {LoginImage} className = {styles.RegisterImage}/>
                </div>
                <div className = {styles.outbox}>
                    <h1 className = {styles.title}>
                        User Login
                    </h1>
                    <label className = {styles.labels}>Email</label>
                    <input type = "email" className = {styles.inputField} id = 'email' onChange={() => removeErrorMessage("emailError")}/>
                    <span id = "emailError" className = {styles.error}></span>
                    <label className = {styles.labels}>Password</label>
                    <input type = "password" className = {styles.inputField} id = 'password' onChange={() => removeErrorMessage("passwordError")}/>
                    <span id = "passwordError" className = {styles.error}></span>
                    <button className = {styles.send} onClick = {submitHandler}>Login</button>
                    <Link to = '/nav/login' className = {styles.error}>Click here to login as <strong>Hostel</strong></Link>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className = {styles.body}>
                <div className = {styles.imageContainer}>
                    <img src = {LoginImage} className = {styles.RegisterImage}/>
                </div>
                <div className = {styles.outbox}>
                    <h1 className = {styles.title}>Logged In Successfully!</h1>
                    <Link to = '/nav/dashboard/userProfile' className = {styles.gotodash} >Go To Dashboard</Link>
                </div>
            </div>
        )
    }
    
}

export default UserLogin;