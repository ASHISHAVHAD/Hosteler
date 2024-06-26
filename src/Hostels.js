import styles from './Hostels.module.css';
import thumbnailImage from './hostelThumbnail.jpg';
import Thumbnail from './Modules/Thumbnail.js';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { useState, useEffect } from 'react';
import search from './search.png';
import filters from './filters.png';
import Loading from './Modules/Loading.js';

const Hostels = () => {

    let [isLoading, setIsLoading] = useState(true);
    let [returned, setReturned] = useState([]);
    let [searching, setSearching] = useState(null);
    let [state, setState] = useState(false);
    let [arr, setArr] = useState([]);

    function wordExists(str, word) {
        str = str.toLowerCase();
        str = str.replace(/,/g, ' ');
        const words = str.split(/\s+/);
        word = word.toLowerCase();
        return words.includes(word);
    }

    if(isLoading) {
        $.ajax({
            type : 'POST',
            url : 'hostelList.php',
            data : {
                
            },
            success (data) {
                setReturned(JSON.parse(data));
                setIsLoading(false);
            }
        })
    }

    function searchFunction() {
        var loc = document.getElementById("searchLocation").value;
        if(loc == '') {
            return;
        }
        var temp = [];
        for(let i = 0; i < returned.length; i++) {
            if(wordExists(returned[i][1], loc)) {
                temp.push(<Link to = {"/nav/hostelPage/" + returned[i][3]} className = {styles.link} >
                            <Thumbnail id1 = {returned[i][3]} hostelName = {returned[i][0]} location = {returned[i][1]} mobile = {returned[i][2]} email = {returned[i][3]} id = {'hotelNumber' + i.toString} latitude = {returned[i][4]} longitude = {returned[i][5]}/>
                        </Link>
                );
            }
        }
        if(temp.length == 0) {
            temp.push(<h1>No hostel available at {loc}</h1>
            );
        }
        setSearching(true);
        setArr(temp);
    }

    if(!isLoading && !searching) {
        for(let i = 0; i < returned.length; i++) {
            arr.push(<Link to = {"/nav/hostelPage/" + returned[i][3]} className = {styles.link} >
                            <Thumbnail id1 = {returned[i][3]} hostelName = {returned[i][0]} location = {returned[i][1]} mobile = {returned[i][2]} email = {returned[i][3]} id = {'hotelNumber' + i.toString} latitude = {returned[i][4]} longitude = {returned[i][5]}/>
                        </Link>
            );
        }
    }

    if(isLoading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }


    else {
        return (
            <div className = {styles.body}>
                <div className = {styles.topBar}>
                    <div className = {styles.searchBar}>
                        <img src = {search} className = {styles.searchLogo}/>
                        <input type = "text" className = {styles.search} placeholder='Find Location' id = "searchLocation"/>
                        
                        <button className = {styles.searchButton} onClick = {searchFunction}> Search </button>
                    </div>
                </div>
                <div className = {styles.rightBox} id = "searchResult">
                    {arr}
                </div>
            </div>
            
        )
    }
}

export default Hostels;