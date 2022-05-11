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
                            {profile.child.length >=1 ? <h5>Children</h5> : ( profile.child.length===0 ? 'No Child' : <h5>Children :</h5> ) }
                            <p>    
                                {profile.child.map( (child, i) => <li key={i}>{child}</li> )}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProfileCard;