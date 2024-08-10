import BikeService from "./svc/Bike/service";
import UserService from "./svc/User/service";


// const newUser = await UserService().createUser({
//     email: "jakezegil@gmail.com",
//     username: "jakezegil"
// })

// const bikeRide = await BikeService().createBikeRide({
//     userId: "clzoam9yb0000fbusenggsrst",
//     distance: 20,
//     duration: 20
// })

const user = await UserService().getUserByUsername("jakezegil")

const allBikeRides = await BikeService().getRidesByUserId(user?.id ?? "")


console.log( allBikeRides)