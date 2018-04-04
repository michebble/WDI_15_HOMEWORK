console.log ("PTV simulator");

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

var finalOutput = {
  origin: '',
  destination: '',
  originIndex: NaN,
  destinIndex: NaN,
  stopsFinal: []
}

//Initialise arrays
var lineAndStationIndexPair = []
var connection = 'Richmond'

//Initialise functions
var stopsLookUp = function(stationName) {  
  for (stopsArr = 0; stopsArr < lines.length; stopsArr++) { 
    for (stopIndex = 0; stopIndex < lines[stopsArr].stops.length; stopIndex++) { 
      if (stationName === lines[stopsArr].stops[stopIndex]) { 
        return [lines[stopsArr].stops, stopIndex]
      } 
    }
  }
}

var connectionLookUp = function(lineArray) {
  return lineArray.indexOf(connection)
}

var cutSectionOfLineArray= function(lineArray, firstStop, secondStop) {     
  if (firstStop < secondStop) { 
    var finalRoute = lineArray.slice(firstStop, secondStop + 1)
  } else if (secondStop < firstStop) {
    var finalRoute = lineArray.slice(secondStop, firstStop + 1)
    finalRoute.reverse()
  }
  return finalRoute
}

var findStation = function (originOrDestination, lineAndStationIndex){
  finalOutput.origin = prompt('Enter ' + originOrDestination +' station.')
  lineAndStationIndexPair[lineAndStationIndex] = stopsLookUp(finalOutput.origin)
  while (lineAndStationIndexPair[lineAndStationIndex] === undefined) {
    finalOutput.origin = prompt('Please enter valid station.')
    lineAndStationIndexPair[lineAndStationIndex] = stopsLookUp(finalOutput.origin)
  }
}

findStation('origin', 0);
findStation('destination', 1)

var originLineArray = lineAndStationIndexPair[0][0]
var originStationIndex = lineAndStationIndexPair[0][1]
var destinationLineArray = lineAndStationIndexPair[1][0]
var destinationStationIndex = lineAndStationIndexPair[1][1]

if (originLineArray === destinationLineArray) { 
  finalOutput.stopsFinal = cutSectionOfLineArray(originLineArray, originStationIndex, destinationStationIndex)
} else if (originLineArray !== destinationLineArray) { 
    var firstConnectionIndex = connectionLookUp(originLineArray) 
    var firstSection = cutSectionOfLineArray( originLineArray, originStationIndex, firstConnectionIndex)
    var secondConnectionIndex = connectionLookUp(destinationLineArray) 
    var secondSection = cutSectionOfLineArray( destinationLineArray, secondConnectionIndex, destinationStationIndex) 
    secondSection.shift() 
    finalOutput.stopsFinal = firstSection.concat(secondSection) 
}

// Final output
console.log(`Origin: ${finalOutput.origin}\nDestination: ${finalOutput.destination}\n\n${finalOutput.stopsFinal.join(' -----> ')}\n\n${finalOutput.stopsFinal.length} stops total`)