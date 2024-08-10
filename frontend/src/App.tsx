import "./App.css";
import useRides from "../state/rides";
import useUser from "../state/user";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("jakezegil");
  const { rides } = useRides();
  const { user } = useUser(username);

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      {user && <div>{user.email}</div>}
      {
        rides.map((ride) => (
          <div key={ride.id}>{new Date(ride.loggedAt).toString()}: {ride.distance} {ride.duration}</div>
        ))
      }
    </div>
  );
}

export default App;
