import "./App.css";
import useRides from "../state/rides";
import useUser from "../state/user";

function App() {
  const { user } = useUser();
  const { rides } = useRides();

  return (
    <div>
      {
        rides.map((ride) => (
          <div key={ride.id}>{new Date(ride.loggedAt).toString()}: {ride.distance} {ride.duration}</div>
        ))
      }
    </div>
  );
}

export default App;
