import styles from './HostelPage.module.css';
import RoomTemplate from './RoomTemplate';
import $ from 'jquery';
import { useState } from 'react';

const RoomList = () => {

    const user = window.location.href.split('/')[5];
    let [isLoading, setIsLoading] = useState(true);
    let [returned, setReturned] = useState([]);
    var arr = [];

    if(isLoading) {
        $.ajax ({
        url : "roomInfo.php",
        type : 'GET',
        data : {
            'email' : user,
        },
        success(data) {
            console.log(JSON.parse(data));
            setReturned(JSON.parse(data));
            setIsLoading(false);
        }
        })
    }
    

    if(!isLoading) {
        for(let i = 0; i < returned.length; i++) {
            arr.push(<RoomTemplate arr = {returned[i]} />)
        }
        console.log(arr);
    }

    if(isLoading) {
        return (
            <div className = {styles.body}>
                Loading-----------------
            </div>
        )
    }
    else {
        return (
            <div className = {styles.roomsBlock}>
                    <h1 className = {styles.roomTitle}>Rooms</h1>
                    {arr}
            </div>
        )
    }
    
}

export default RoomList;