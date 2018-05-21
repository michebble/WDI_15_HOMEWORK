// Convert the driveTo method below to use ES6 default parameters.

var myRide = {
  make: "Ford",
  model: "Model T",
  year: 1959,
  location: "the Office",
  driveTo: function ( place = 'Home' ) {
    this.location = place
  }
}

myRide.driveTo("Walmart")
myRide.location // "Walmart"

// vs...

myRide.driveTo()
myRide.location // "Home"
