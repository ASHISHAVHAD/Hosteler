import styles from './Queries.module.css';
import $ from 'jquery';
import QueryModule from './QueryComponent.js';
import { useState } from 'react';

const UserQueries = () => {

    const reciever = localStorage.getItem('user');
    const [loading, setLoading] = useState(true);
    var arr = [];
    let [returned, setReturned] = useState([]);

    if(loading) {
        $.ajax({
            url : 'handleQuery.php',
            type : 'POST',
            data : {
                'type' : 'recieve',
                'reciever' : reciever,
            },
            success(data) {
                console.log(JSON.parse(data));
                setReturned(JSON.parse(data));
                setLoading(false);
            }
        })
    }

    if(!loading) {
        for(let i = 0; i < returned.length; i++) {
            arr.push(<QueryModule arr = {returned[i]} />)
        }
    }

    if(loading) {
        return(
            <div className = {styles.body} >
                Loading------
            </div>
        )
    }
    else {
        return (
            <div className = {styles.body} >
                <h1 className = {styles.title}>Check out queries.</h1>
                <div className = {styles.queriesBox} >
                    {arr}
                </div>
            </div>
        )
    }
    
}

export default UserQueries;