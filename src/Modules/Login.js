import styles from './Register.module.css';
import LoginImage from './LoginImage.jpg';
import { useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const Login = () => {

    let [loggedIn, setLoggedIn] = useState(false);

    function removeErrorMessage(errorElement) {
        document.getElementById(errorElement).innerHTML = "";
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        return passwordRegex.test(password);
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
                url : 'userRegistration.php',
                data : {
                    'type' : 'login',
                    'email' : email,
                    'password' : password,
                },
                success(data) {
                    if(data == 'true') {
                        setLoggedIn(true);
                        localStorage.setItem('token', email);
                        console.log(data);
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

    if(localStorage.getItem('token') == null) {
        return (
            <div className = {styles.body}>
                <div className = {styles.imageContainer}>
                    <img src = {LoginImage} className = {styles.RegisterImage}/>
                </div>
                <div className = {styles.outbox}>
                    <h1 className = {styles.title}>
                        Hostel Login
                    </h1>
                    <label className = {styles.labels}>Email</label>
                    <input type = "email" className = {styles.inputField} id = 'email' onChange={() => removeErrorMessage("emailError")}/>
                    <span id = "emailError" className = {styles.error}></span>
                    <label className = {styles.labels}>Password</label>
                    <input type = "password" className = {styles.inputField} id = 'password' onChange={() => removeErrorMessage("passwordError")}/>
                    <span id = "passwordError" className = {styles.error}></span>
                    <button className = {styles.send} onClick = {submitHandler}>Login</button>
                    <Link to = '/nav/userLogin'className = {styles.error}>Click here to login as <strong>Student</strong></Link>
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
                    <Link to = '/nav/dashboard/dashboardDefault' className = {styles.gotodash} >Go To Dashboard</Link>
                </div>
            </div>
        )
    }
    
}

export default Login;