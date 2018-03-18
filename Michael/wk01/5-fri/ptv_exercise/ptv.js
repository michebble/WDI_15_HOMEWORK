console.log ("PTV simulator");


// var variable = function (){
  
// }

//maybe as object containing route name string and stips array
var lines = [
  { title:'Alamein',
    stops: ['Flinders Street',
     'Richmond', 
     'East Richmond', 
     'Burnley', 
     'Hawthorn', 
     'Glenferrie']
  },
  { title: 'Glen Waverly',
    stops: ['Flagstaff',
     'Melbourne Central',
     'Parliament', 
     'Richmond', 
     'Kooyong', 
     'Tooronga']
  },
  { title: 'Sandringham',
    stops: ['Southern Cross', 
     'Richmond', 
     'South Yarra', 
     'Prahran', 
     'Windsor']
  }
]


//pretty sure this is not the best way to store the results
var finalOutput = {
  origin: '',
  destination: '',
  originIndex: NaN,
  destinIndex: NaN,
  stopsFinal: []
}

//Initialise arrays
var tempRouteArr1 = []
var tempRouteArr2 = []
var tempIndex = []
var lookUpArr = []

//Initialise connection. This should be replaced with an array comparison that scans two arrays and finds matching elements
var connection = 'Richmond'

//Initialise functions
var stopsLookUp = function(station) {  //take Origin and Destination as station name to look up.
  for (stopsArr = 0; stopsArr < lines.length; stopsArr++) { // move through each object in line array
    for (stopIndex = 0; stopIndex < lines[stopsArr].stops.length; stopIndex++) { // through stops array in the current object
      if (station === lines[stopsArr].stops[stopIndex]) { //test if station name is present in array
        console.log(stopsArr)  // testing returns object number
        console.log(stopIndex) // testing returns array from object
        return [lines[stopsArr].stops, stopIndex]
      } 
    }
  }
}


var connectionLookUp = function(station, arr) {
  for (y = 0; y < arr.length; y++) {
    if (station === arr[y]) {
      return y
    }
  }
}



var reverser = function(boolean, arr, elemIndex1, elemIndex2) {     // I dont like this one. non boolean parameters should be numbers not arrays.
  if (boolean === true) { 
    var finalRoute = arr.slice(elemIndex1, elemIndex2 + 1)
  } else if (boolean === false) {
    var finalRoute = arr.slice(elemIndex2, elemIndex1 + 1)
    finalRoute.reverse()
  }
  return finalRoute
}

var compareElement = function(firstStop, lastStop) {
  if (firstStop > lastStop) {
    return false
  } else if (firstStop < lastStop) {
    return true
  }
}


// prompt for stations
finalOutput.origin = prompt('Enter station to depart.')
lookUpArr[0] = stopsLookUp(finalOutput.origin)
while (lookUpArr[0] === undefined) {
  finalOutput.origin = prompt('Please enter valid station.')
  lookUpArr[0] = stopsLookUp(finalOutput.origin)
}
finalOutput.destination = prompt('Enter destination.')
lookUpArr[1] = stopsLookUp(finalOutput.destination)
while (lookUpArr[1] === undefined) {
  finalOutput.origin = prompt('Please enter valid station.')
  lookUpArr[1] = stopsLookUp(finalOutput.destination)
} 
// console.log(lookUpArr[0]) //testing
// console.log(lookUpArr[1]) //testing


// This block contains a nasty mess off arrays, that is hard to read, especially the last half. I'm not happy and will improve it in the future

//find out if stops are on the same route
if (lookUpArr[0][0] === lookUpArr[1][0]) { // if yes, move routeDestin[1] to new loction and discard array
  console.log('the same route!') // testing
  finalOutput.originIndex = lookUpArr[0][1] //kept this verbose for readability
  finalOutput.destinIndex = lookUpArr[1][1]
  tempRouteArr1 = lookUpArr[0][0]
  finalOutput.stopsFinal = reverser(compareElement(finalOutput.originIndex, finalOutput.destinIndex), tempRouteArr1, finalOutput.originIndex, finalOutput.destinIndex)
} else if (lookUpArr[0][0] !== lookUpArr[1][0]) { // if not,
    // console.log('different routes!')   //testing
    tempIndex[0] = connectionLookUp(connection, lookUpArr[0][0]) //find location of Richmond in first array
    tempRouteArr1 = reverser(compareElement(lookUpArr[0][1], tempIndex[0]), lookUpArr[0][0], lookUpArr[0][1], tempIndex[0]) // order array so Richmond is last and then cut
    tempIndex[1] = connectionLookUp(connection, lookUpArr[1][0]) //find location of Richmond in second array
    tempRouteArr2 = reverser(compareElement(tempIndex[1], lookUpArr[1][1]), lookUpArr[1][0], tempIndex[1], lookUpArr[1][1]) // order array so Richmond is first and then cut
    tempRouteArr2.shift() // remove richmond from second array
    finalOutput.stopsFinal = tempRouteArr1.concat(tempRouteArr2) // concat arrays together to produce complete line
}

// Final output
console.log(`Origin: ${finalOutput.origin}\nDestination: ${finalOutput.destination}\n\n${finalOutput.stopsFinal.join(' -----> ')}\n\n${finalOutput.stopsFinal.length} stops total`)
