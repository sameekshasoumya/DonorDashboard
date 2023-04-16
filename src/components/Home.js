import React, { useState } from 'react';
import img1 from './settings.png';
import donate from './income.png';
import search from './search.png';
import user from './user.png';
import notifs from './notifications.png';
import info from './info.png';
import './Home.css';

const Home = () => {

    const shoot = () => {
        alert("You're logged out!");
    }
    const Name1 = useState("Ramesh");
    const Name2 = useState("Kamesh");
    const Name3 = useState("Rakesh");
    const Name4 = useState("Mitesh");
    const Name5 = useState("Rajesh");
    const Name6 = useState("Riddhi");

    const Place1 = useState("Dhanbad");
    const Place2 = useState("Dhanbad");
    const Place3 = useState("Dhanbad");
    const Place4 = useState("Dhanbad");
    const Place5 = useState("Dhanbad");
    const Place6 = useState("Dhanbad");

    const Item1 = useState("Girish");
    const Item2 = useState("Shambhu");
    const Item3 = useState("Bhola");
    const Item6 = useState("Ajay");
    const Item4 = useState("Kishan");
    const Item5 = useState("Arti");

    const [Text1,setText1] = useState("Track");
    const [Text2,setText2] = useState("Track");
    const [Text3,setText3] = useState("Track");
    const [Text4,setText4] = useState("Track");
    const [Text5,setText5] = useState("Track");
    const [Text6,setText6] = useState("Track");
    const [here,setHere] = useState("FORM"); 
    const [userName,setUserName] = useState("Donor XYZ"); 
    const [donorNumber,setDonorNumber] = useState("1023");
    const [donationNumber,setDonationNumber] = useState("2023");
    const [regionCount,setRegionCount] = useState("23");
    const [volunteerCount,setVolunteerCount] = useState("23");

    return(
        <>
            <div class="side-menu">
        <div class="brand-name">
            <h1>{userName}</h1>
        </div>
        <ul>
            <li><img src={img1} alt=""/>&nbsp; <span>Dashboard</span></li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Help-desk</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Settings</li>
        </ul>
    </div>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="search">
                    <input type="text" placeholder="Search.."/>
                    <button type="submit"><img src={search} alt=""/></button>
                </div>
                <div class="user">
                    <a href="#" class="btn" onClick={shoot}>Log Out</a>
                    <img src={notifs} alt=""/>
                    <div class="img-case">
                        <img src={user} alt=""/> 
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="cards">
                <div class="card">
                    <div class="box">
                        <h1>{donationNumber}</h1>
                        <h3>Donations</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>{donorNumber}</h1>
                        <h3>Notable Donors</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>{regionCount}</h1>
                        <h3>Regions</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>{volunteerCount}</h1>
                        <h3>Volunteers</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
            </div>
            <div class="content-2">
                <div class="recent-payments">
                <div class="title">
                    <h2>Past Dontions</h2>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>{Name1}</td>
                        <td>{Place1}</td>
                        <td>{Item1}</td>
                        <td><a href="#" class="btn" onClick={()=> setText1("Viewed")}>{Text1}</a></td>
                    </tr>
                    <tr>
                        <td>{Name2}</td>
                        <td>{Place2}</td>
                        <td>{Item2}</td>
                        <td><a href="#" class="btn" onClick={()=> setText2("Viewed")}>{Text2}</a></td>
                    </tr>
                    <tr>
                        <td>{Name3}</td>
                        <td>{Place3}</td>
                        <td>{Item3}</td>
                        <td><a href="#" class="btn" onClick={()=> setText3("Viewed")}>{Text3}</a></td>
                    </tr>
                    <tr>
                        <td>{Name4}</td>
                        <td>{Place4}</td>
                        <td>{Item4}</td>
                        <td><a href="#" class="btn" onClick={()=> setText4("Viewed")}>{Text4}</a></td>
                    </tr>
                    <tr>
                        <td>{Name5}</td>
                        <td>{Place5}</td>
                        <td>{Item5}</td>
                        <td><a href="#" class="btn" onClick={()=> setText5("Viewed")}>{Text5}</a></td>
                    </tr>
                    <tr>
                        <td>{Name6}</td>
                        <td>{Place6}</td>
                        <td>{Item6}</td>
                        <td><a href="#" class="btn" onClick={()=> setText6("Viewed")}>{Text6}</a></td>
                    </tr>
                </table>
                </div>
                <div class="new-students">
                    <div class="title">
                        <h2>Request PickUp</h2>
                        <a href="#" class="btn" onClick={()=>setHere("Filled")}>{here}</a>
                    </div>
                    <table>
                        <tr>
                        <td>Fill Up the form for a new donation and request pickup</td>                           
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Home