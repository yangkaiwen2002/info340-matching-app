import { useEffect, useState } from "react";

export default function MyProfile(){

  const [profile,setProfile] = useState(null)

  useEffect(()=>{

    const saved = localStorage.getItem("pm_my_profile")

    if(saved){
      setProfile(JSON.parse(saved))
    }

  },[])

  if(!profile){

    return(

      <main className="container">

        <h1>My Profile</h1>

        <p>You haven't created a profile yet.</p>

      </main>

    )

  }

  return(

    <main className="container">

      <h1>My Profile</h1>

      <div className="card">

        <img
          className="avatar"
          src={profile.image}
          alt={profile.name}
        />

        <h3>{profile.name}</h3>

        <p>
          Looking for <strong>{profile.connectionType}</strong>
        </p>

        <p>
          Interests: {profile.interests.join(", ")}
        </p>

        <p>
          Availability: {profile.availability}
        </p>

      </div>

    </main>

  )

}