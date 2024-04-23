import styles from './Register.module.css';
import RegisterImage from './RegisterImage.jpg';
import $ from 'jquery';
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Register = () => {

    let [registered, setRegistered] = useState(false);
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };

    function removeErrorMessage(errorElement) {
        document.getElementById(errorElement).innerHTML = "";
    }

    function Registration() {

        let hostelName = document.getElementById('hostelName');
        let address = document.getElementById('address');
        let mobile = document.getElementById('mobile');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirmPassword');
        let thumbnail = document.getElementById('thumbnail');
        let latitude = document.getElementById('latitude');
        let longitude = document.getElementById('longitude');
        const formData = new FormData();
        formData.append('type', 'register');
        formData.append('hostelName', hostelName.value);
        formData.append('address', address.value);
        formData.append('mobile', mobile.value);
        formData.append('email', email.value);
        formData.append('password', password.value);
        formData.append('latitude', latitude.value);
        formData.append('longitude', longitude.value);
        formData.append('image', image);

        let isValid = true;
        
        if(hostelName.value == '') {
            document.getElementById("hostelNameError").innerHTML = "Hostel name is required";
            isValid = false;
        }
        
        if(address.value == '') {
            document.getElementById("addressError").innerHTML = "Address is required";
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
            url : 'http://localhost/wt/userRegistration.php',
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
                <label className = {styles.labels}>Hostel Name</label>
                <input type = "text" className = {styles.inputField} id = 'hostelName' onChange={() => removeErrorMessage("hostelNameError")}/>
                <span id = "hostelNameError" className = {styles.error}></span>
                <label className = {styles.labels}>Address</label>
                <input type = "text" className = {styles.inputField} id = 'address' onChange={() => removeErrorMessage("addressError")}/>
                <span id = "addressError" className = {styles.error}></span>
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
                <label className = {styles.labels}>Location</label>
                <div className = {styles.location}>
                    <label className = {styles.labels}>Latitude</label>
                    <label className = {styles.labels}>Longitude</label>
                    <input type = "text" className = {styles.locationInput} id = "latitude"/>
                    <input type = "text" className = {styles.locationInput} id = "longitude"/>
                </div>
                <label className = {styles.labels}>Image</label>
                <input type = "file"  accept="image/*" className = {styles.inputField} onChange={handleImageChange} id = "thumbnail"/>
                <button className = {styles.send} onClick={Registration}>Register</button>
                <Link to = '/nav/userRegister/*'className = {styles.error}>Click here to register as <strong>Student</strong></Link>
            </div>
        </div>
    )
}

export default Register;