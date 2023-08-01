let numberOfPassengers = 10;
for(i = 1; i <= 10; i++){
	console.log(i + '. ' + 'Passenger Boarded');
	numberOfPassengers--;
	if(!numberOfPassengers){
		console.log('All Passenger Boarded');
	}
}		

const passengers = [
	'Will Alexander',
	'Sarah Kate',
	'Audrey Simon',
	'Tau Perkington'
	];

for (let i in passengers){
	console.log('Borading ' + passengers[i]);
}

const travelers = [ 
	{
		name: 'Will Alexander',
		ticketNumber: 203491
	},
	{
		name: 'Sarah Kate',
		ticketNumber: 403952
	},
	{
		name: 'Audrey Simon',
		ticketNumber: 193607
	},
	{
		name: 'Tau Perkington',
		ticketNumber: 509663
	},		
	];
for(let traveler of travelers){
	console.log(traveler.ticketNumber);
}

class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let episodes = [
  new Episode('Dark Beginnings', 45, true),
  new Episode('The Mystery Continues', 45, false),
  new Episode('An Unexpected Climax', 60, false)
];

// Add logic here
// ======================

for(episode of episodes){
  episode.hasBeenWatched = false;
}

console.log(episodes);

let seatsLeft = 10;
let passengerStillToBoard = 8;
let passengersBoarded = 0;

while(seatsLeft > 0 && passengerStillToBoard > 0){
	passengersBoarded++;
	seatsLeft--;
	passengerStillToBoard--;
}
console.log(passengersBoarded + ' succesfully on board');