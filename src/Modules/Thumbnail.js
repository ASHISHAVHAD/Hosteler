import styles from './Thumbnail.module.css';
import { useState } from 'react';
import $ from 'jquery';


function Thumbnail(props) {

    const [imageData, setImageData] = useState('');
    $.ajax({
        url: 'http://localhost/wt/imageGet.php',
        type: 'POST',
        data: { 'id' : props.id1 },
        success: function (response) {
            setImageData(response);
        },
        error: function (xhr, status, error) {
            console.error('Error retrieving image:', error);
            alert('Error retrieving image');
        }
    });
    
    return(
        <div class ={styles.outbox}>
            <div class = {styles.leftbox}>
                <img src={`data:image/jpeg;base64,${imageData}`} class = {styles.image}/>
            </div>
            <div class = {styles.rightbox}>
                <h1 class = {styles.name}>{props.hostelName}</h1>
                <h2 class = {styles.location}>{props.location}</h2>
                <p class = {styles.mobile}>+91 {props.mobile}</p>
                <p class = {styles.mobile}>{props.email}</p>
            </div>
        </div>
    )
}

export default Thumbnail;