import "./App.css";
import useRides from "../state/rides";

function App() {
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
