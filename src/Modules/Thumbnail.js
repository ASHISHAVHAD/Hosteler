import styles from './Thumbnail.module.css';
import { useState } from 'react';
import $ from 'jquery';


function Thumbnail(props) {

    const [imageData, setImageData] = useState('');

    $.ajax({
        url: 'imageGet.php',
        type: 'POST',
        data: { 'id' : props.id1 },
        success: function (response) {
            setImageData(response);
        },
        error: function (xhr, status, error) {
            console.error('Error retrieving image:', error);
        }
    });
    
    return(
        <div className ={styles.outbox}>
            <div className = {styles.leftbox}>
                <img src={`data:image/jpeg;base64,${imageData}`} className = {styles.image}/>
            </div>
            <div className = {styles.rightbox}>
                <h1 className = {styles.name}>{props.hostelName}</h1>
                <h2 className = {styles.location}>{props.location}</h2>
                <p className = {styles.mobile}>+91 {props.mobile}</p>
                <p className = {styles.mobile}>{props.email}</p>
            </div>
            <div className = {styles.right}>
                <iframe src = {"https://maps.google.com/maps?q=" + props.latitude + "," + props.longitude + "&z=16&output=embed"} className = {styles.map} />
            </div>
        </div>
    )
}

export default Thumbnail;