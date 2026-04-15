import { Link } from "react-router";

export default function Home(){

  return(

    <main>

      <div className="home-hero">

        <h1>Find the right connection faster</h1>

        <p>
          Partner Match helps students connect through shared interests,
          compatible schedules, and goals like study sessions, carpools,
          hobbies, and mentorship.
        </p>

        <div className="buttons">

          <Link to="/matches">
            <button className="primary">
              Explore Matches
            </button>
          </Link>

          <Link to="/saved">
            <button className="secondary">
              View Saved Profiles
            </button>
          </Link>

        </div>

      </div>

    </main>

  )
}