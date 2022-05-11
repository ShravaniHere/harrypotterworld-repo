import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";

const ProfileCardList = () => {
const [profiles, setProfiles] = useState({
    data: []
});

const fetchProfileData = async () => {
    try{
        const res = await axios.get("https://fedeperin-harry-potter-api-en.herokuapp.com/characters");
        setProfiles({
            data: res.data
        });
    }catch{
        console.log('Some error has occured!')
    }
}

useEffect( () => {
    fetchProfileData();
 }, []);

    return(
        <div className="profilecards">
            <ProfileCard profiles={profiles.data} />
        </div>
    )
}

export default ProfileCardList;