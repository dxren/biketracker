import "./App.css";
import useRides from "../state/rides";
import useUser from "../state/user";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("jakezegil");
  const { rides, updateRide } = useRides();
  const { user } = useUser(username);

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      {user && <div>{user.email}</div>}
      {
        rides.map((ride) => (
          <div key={ride.id}>
            <div>
              {new Date(ride.loggedAt).toString()}: {ride.distance} {ride.duration}
            </div>
            <button onClick={() => updateRide(ride.id, { distance: ride.distance + 1 })}>
              Add 1 mile
            </button>
            <button onClick={() => updateRide(ride.id, { distance: ride.distance - 1 })}>
              Subtract 1 mile
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
