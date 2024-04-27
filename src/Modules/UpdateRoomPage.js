import styles from './UpdateRoomPage.module.css';
import UpdateRoom from './UpdateRoom';
import $ from 'jquery';
import { useState } from 'react';

const UpdateRoomPage = () => {

    const user = localStorage.getItem('token');
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
            arr.push(<UpdateRoom arr = {returned[i]} />)
        }
        console.log(arr);
    }

    return (
        <div className = {styles.body}>
            {arr}
        </div>
    )
}

export default UpdateRoomPage;