import styles from './Register.module.css';
import RegisterImage from './RegisterImage.jpg';
import $ from 'jquery';
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const UserRegistration = () => {

    let [registered, setRegistered] = useState(false);
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };

    function removeErrorMessage(errorElement) {
        document.getElementById(errorElement).innerHTML = "";
    }

    function Registration() {

        let name = document.getElementById('name');
        let mobile = document.getElementById('mobile');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirmPassword');
        const formData = new FormData();
        formData.append('type', 'register');
        formData.append('Name', name.value);
        formData.append('mobile', mobile.value);
        formData.append('email', email.value);
        formData.append('password', password.value);

        let isValid = true;
        
        if(name.value == '') {
            document.getElementById("hostelNameError").innerHTML = "Hostel name is required";
            isValid = false;
        }  

        if(mobile.value == '') {
            document.getElementById("mobileError").innerHTML = "Mobile number is required";
            isValid = false;
        }

        if(email.value == '') {
            document.getElementById("emailError").innerHTML = "Email ID is required";
            isValid = false;
        }

        if(password.value == '') {
            document.getElementById("passwordError").innerHTML = "Password is required";
            isValid = false;
        }

        else if(password.value != confirmPassword.value) {
            document.getElementById("passwordError").innerHTML = "Passwords do not match";
            isValid = false;
        }

        if(!isValid) {
            return;
        }

        $.ajax({
            type : 'POST',
            url : 'http://localhost/wt/studentRegistration.php',
            data : formData,
            contentType: false,
            processData: false,
            success (data) {
                console.log(data);
                if(data == 'true') {
                    setRegistered(true);
                }
            }
        })
    }

    if(registered) {
        return (
            <div className = {styles.body}>
                <div className = {styles.imageContainer}>
                    <img src = {RegisterImage} className = {styles.RegisterImage}/>
                </div>
                <div className = {styles.outbox}>
                    <h1 className = {styles.title}>Registered Successfully!</h1>
                    <Link to = "/nav/login" className = {styles.done}>Done</Link>
                </div>
            </div>
        )
    }

    return (
        <div className = {styles.body}>
            <div className = {styles.imageContainer}>
                <img src = {RegisterImage} className = {styles.RegisterImage}/>
            </div>
            <div className = {styles.outbox}>
                <h1 className = {styles.title}>Join the platform!</h1>
                <label className = {styles.labels}>Name</label>
                <input type = "text" className = {styles.inputField} id = 'name' onChange={() => removeErrorMessage("hostelNameError")}/>
                <span id = "hostelNameError" className = {styles.error}></span>
                <label className = {styles.labels}>Mobile Number</label>
                <input type = "text" className = {styles.inputField} id = 'mobile' onChange={() => removeErrorMessage("mobileError")}/>
                <span id = "mobileError" className = {styles.error}></span>
                <label className = {styles.labels}>Email</label>
                <input type = "email" className = {styles.inputField} id = 'email' onChange={() => removeErrorMessage("emailError")}/>
                <span id = "emailError" className = {styles.error}></span>
                <label className = {styles.labels}>Enter Password</label>
                <input type = "password" className = {styles.inputField} id = 'password' onChange={() => removeErrorMessage("passwordError")}/>
                <label className = {styles.labels}>Confirm Password</label>
                <input type = "password" className = {styles.inputField} id = 'confirmPassword' onChange={() => removeErrorMessage("passwordError")}/>
                <span id = "passwordError" className = {styles.error}></span>
                <button className = {styles.send} onClick={Registration}>Register</button>
                <Link to = '/nav/register/*'className = {styles.error}>Click here to register as <strong>Hostel</strong></Link>
            </div>
        </div>
    )
}

export default UserRegistration;