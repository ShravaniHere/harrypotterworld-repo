import React from "react";


const ProfileCard = ({profiles}) =>{

    return(
        <div className="cards-container">
            {profiles.map( profile => {
                return(
                    <div className="card-single" key={profile.id}>
                        <div className="image">
                            <img src={profile.image}/>
                        </div>
                        <div className="description">
                            <h3>{profile.character}</h3>
                            <h4>{profile.hogwartsHouse}</h4>
                            <p>
                            {/* {profile.child.length >=1 && <h5>Children :</h5> } */}
                            {profile.child.length >=1 ? <h5>Children :</h5> : profile.child.length===0 ? 'No Child' : <h5>Children :</h5> }
                                {profile.child.map( child => <li>{child}</li> )}
                            </p>
                        </div>
                    </div>
                )
            })}
            {JSON.stringify(profiles)}
        </div>
    )
}

export default ProfileCard;