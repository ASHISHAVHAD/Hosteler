import styles from './Hostels.module.css';
import thumbnailImage from './hostelThumbnail.jpg';
import Thumbnail from './Modules/Thumbnail.js';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { useState, useEffect } from 'react';
import search from './search.png';
import filters from './filters.png';

const Hostels = () => {

    let [isLoading, setIsLoading] = useState(true);
    let [returned, setReturned] = useState([]);

    var arr = [];
    if(isLoading) {
        $.ajax({
            type : 'POST',
            url : 'http://localhost/wt/hostelList.php',
            data : {
                
            },
            success (data) {
                setReturned(JSON.parse(data));
                setIsLoading(false);
            }
        })
    }

    if(!isLoading) {
        for(let i = 0; i < returned.length; i++) {
            arr.push(<Link to = {"/nav/hostelPage/" + returned[i][3]} className = {styles.link} >
                            <Thumbnail id1 = {returned[i][3]} hostelName = {returned[i][0]} location = {returned[i][1]} mobile = {returned[i][2]} email = {returned[i][3]} id = {'hotelNumber' + i.toString} />
                        </Link>
                        );
        }
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
            <div className = {styles.body}>
                <div className = {styles.topBar}>
                    <div className = {styles.searchBar}>
                        <img src = {search} className = {styles.searchLogo}/>
                        <input type = "text" className = {styles.search} placeholder='Find Location'/>
                        <div className = {styles.filters} > 
                            <img src = {filters} className = {styles.filtersLogo}/>
                            Filters 
                        </div>
                        <button className = {styles.searchButton} > Search </button>
                    </div>
                </div>
                <div className = {styles.rightBox}>
                    {arr}
                </div>
            </div>
            
        )
    }
}

export default Hostels;