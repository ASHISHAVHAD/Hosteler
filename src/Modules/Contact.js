import styles from './Register.module.css';
import ContactImage from './ContactImage.jpg';
import $ from 'jquery';
import { useState } from 'react';

const Contact = () => {

    const[sent, setSent] = useState(false);

    function sendQuery() {
        $.ajax({
            url : "http://localhost/wt/queries.php",
            type : 'post',
            data : {
                'name' : document.getElementById('name').value,
                'mobile' : document.getElementById('mobile').value,
                'email' : document.getElementById('email').value,
                'queryText' : document.getElementById('queryText').value
            },
            success(data) {
                setSent(true);
            }
        })
    }

    if(!sent) {
        return (
            <div className = {styles.body}>
                <div className = {styles.imageContainer}>
                    <img src = {ContactImage} className = {styles.RegisterImage}/>
                </div>
                <div className = {styles.outbox}>
                    <h1 className = {styles.title}>Contact Us</h1>
                    <label className = {styles.labels}>Name</label>
                    <input type = "text" className = {styles.inputField} id = "name"/>
                    <label className = {styles.labels}>Mobile Number</label>
                    <input type = "text" className = {styles.inputField} id = "mobile"/>
                    <label className = {styles.labels}>Email</label>
                    <input type = "email" className = {styles.inputField} id = "email"/>
                    <label className = {styles.labels}>Message / Query</label>
                    <textarea className = {styles.inputField} id = "queryText"/>
                    <button className = {styles.send} onClick = {sendQuery}>Send Message</button>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className = {styles.body}>
                <img src = {ContactImage} className = {styles.RegisterImage}/>
                <div className = {styles.outbox}>
                    <h1 className = {styles.title}>Sent Successfully!</h1>
                </div>
            </div>
        )
    }
    
}

export default Contact;