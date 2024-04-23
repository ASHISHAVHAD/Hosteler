import styles from './Profile.module.css';
import $ from 'jquery';
import { useState } from 'react';

const UserProfile = () => {

    $.ajax({
        url : "http://localhost/wt/userProfile.php",
        type : 'POST',
        data : {
            'type' : 'profile',
            'email' : localStorage.getItem('user'),
        },
        success(data) {
            console.log(data);
            const returned = JSON.parse(data);
            document.getElementById('name').value = returned["name"];
            document.getElementById('email').value = localStorage.getItem('user');
            document.getElementById('mobile').value = returned["mobile"];
        }
    })

    function updateProfile() {
        $.ajax({
            url : "http://localhost/wt/userProfile.php",
            type : 'POST',
            data : {
                'type' : 'profileUpdate',
                'email' : localStorage.getItem('user'),
                'name' : document.getElementById('name').value,
                'mobile' : document.getElementById('mobile').value,
            },
            success(data) {
                console.log(data);
                alert("updated successfully");
            }
        })
    }

    return (
        <div className = {styles.body}>
            <h1 className = {styles.title}>Edit Profile</h1>
            <div className = {styles.grid}>
                <div className = {styles.addRoomForm}>
                    <h1 className = {styles.addRoomTitle}>Profile</h1>
                    <label className = {styles.inputLabel}>Name</label>
                    <input type = "text" className = {styles.inputField} id = "name"/>
                    <label className = {styles.inputLabel}>Mobile Number</label>
                    <input type = "text" className = {styles.inputField} id = "mobile"/>
                    <label className = {styles.inputLabel}>Email</label>
                    <input type = "text" className = {styles.inputField} id = "email" disabled/>
                    <button className = {styles.addRoomButton} onClick = {updateProfile}>Update Information</button>
                </div>
            </div>
            
        </div>
    )
}

export default UserProfile;