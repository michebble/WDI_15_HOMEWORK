console.log ("PTV simulator");
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

