import styles from './DashboardDefault.module.css';
import $ from 'jquery';
import { useState } from 'react';

const DashboardDefault = () => {
    const user = localStorage.getItem('token');
    const [loading, setLoading] = useState(true);
    let [returned, setReturned] = useState([]);
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    var arr5 = [];

    if(loading) {
        $.ajax ({
            url : "http://localhost/wt/roomInfo.php",
            type : 'GET',
            data : {
                'email' : user,
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
            arr1.push(<p className = {styles.element}>{returned[i][1]}</p>);
            arr2.push(<p className = {styles.element}>{returned[i][0]}</p>);
            arr3.push(<p className = {styles.element}>{returned[i][2]}</p>);
            arr4.push(<p className = {styles.element}>{returned[i][3]}</p>);
            arr5.push(<p className = {styles.element}>{returned[i][4]}</p>);
        }
    }

    if(loading) {
        return (
            <div className = {styles.body} >
                Loading---------------
            </div>
        )
    }
    else {
        return (
            <div className = {styles.body} >
                <h1 className = {styles.title}>Welcome Back, {user}</h1>
                <h2 className = {styles.subtitle}>Take a look at profile overview!</h2>
                <div className = {styles.grid}>
                    <div className = {styles.newlyAdded}>
                        <h1 className = {styles.cardTitlewhite}>Latest Transactions</h1>
                        <table className = {styles.table}>
                            <header>
                                <th className = {styles.cellwhite}>Name</th>
                                <th className = {styles.cellwhite}>Amount</th>
                                <th className = {styles.cellwhite}>Floor</th>
                                <th className = {styles.cellwhite}>Room</th>
                                <th className = {styles.cellwhite}>Status</th>
                            </header>
                        </table>
                    </div>
                    <div className = {styles.hostelOverview}>
                        <h1 className = {styles.cardTitle}>Hostel Overview</h1>
                        <div className = {styles.table}>
                            <div className = {styles.column}>
                                <h2 className = {styles.h2} >Floor</h2>
                                {arr1}
                            </div>
                            <div className = {styles.column}>
                                <h2 className = {styles.h2}>Room</h2>
                                {arr2}
                            </div>
                            <div className = {styles.column}>
                                <h2 className = {styles.h2}>Rent</h2>
                                {arr3}
                            </div>
                            <div className = {styles.column}>
                                <h2 className = {styles.h2}>Capacity</h2>
                                {arr4}
                            </div>
                            <div className = {styles.column}>
                                <h2 className = {styles.h2}>Occupied</h2>
                                {arr5}
                            </div>
                        </div>
                    </div>
                    <div className = {styles.areasOfInterest}>
                        <h1 className = {styles.cardTitlewhite}>Urgent Queries</h1>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default DashboardDefault;