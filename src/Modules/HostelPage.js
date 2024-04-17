import styles from './HostelPage.module.css';
import image1 from '../hostelThumbnail.jpg';
import $ from 'jquery';
import { useState } from 'react';

function HostelPage(props) {
    const [longitude, setLongitude] = useState('25.3076008');
    const [latitude, setLatitude] = useState('51.4803216');
    const [link, setLink] = useState("http://maps.google.com/maps?q=20.008674,73.787420&z=16&output=embed");

    $.ajax ({
        url : "http://localhost/wt/hostelInfo.php",
        type : 'POST',
        data : {
            'email' : window.location.href.split('/')[5],
        },
        success(data) {
            var temp = JSON.parse(data);
            console.log(temp);
            document.getElementById("name").innerText = temp['hostelName'];
            document.getElementById("address").innerText = temp['address'];
            document.getElementById("mobile").innerText = temp['mobile'];
            document.getElementById("email").innerText = temp['email'];
            setLatitude(temp['latitude']);
            setLongitude(temp['longitude']);
            setLink("http://maps.google.com/maps?q=" + latitude + "," + longitude + "&z=16&output=embed");
            console.log(link);
        }
    })
    var n = 6;
    var arr = [];
    var temp = [];
    for(let i = 0; i<n; i++) {
        if(i%2 == 0) {
            arr.push(<tr>{temp}</tr>)
            temp = [];
        }
        temp.push(<td><img className = {styles.galleryImage} src = {image1}/></td>)
        if(i == n-1 && i+1 % 2 != 0) {
            arr.push(<tr>{temp}</tr>)
            temp = [];
        }
    }

    return (
        <div className = {styles.body}>
            <div className = {styles.outbox}>
                <h1 id = "name" className = {styles.title}>Name</h1>
                <h2 id = "address">Location</h2>
                <p id = "mobile">Mobile</p>
                <p id = "email">Email</p>
                <div>
                    {arr}
                </div>
                <iframe src={link} height="450" width="600"></iframe>
            </div>
        </div> 
    )
}

export default HostelPage;