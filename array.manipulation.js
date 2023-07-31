let guests = ['Syrian Guy', 'Turkish Donut', 'Fabricio Parabmocano'];

guests.push('Bjarki Snǽdis');
console.log(guests);
console.log(guests.length);
// guests.pop(); // removes the last element from the array
guests.unshift('Tau Perkington'); // 'Tau Perkington' is added at the beginning of the guests array
// console.log(guests);
// console.log(guests.length);

class Episode {
	constructor(title, duration, hasBeenWatched){
		this.title = title;
		this.duration = duration;
		this.hasBeenWatched = hasBeenWatched;
	}
}
let firstEpisode = new Episode('Dark Beginnings', 45, true);
let secondEpisode = new Episode('The Mystery Continues', 45, false);
let thirdEpisode = new Episode('An Unexpected Climax', 60, false);

let episodes = [];
episodes.push(firstEpisode);
episodes.push(secondEpisode);
episodes.push(thirdEpisode);
episodes.push(thirdEpisode);
episodes.pop();
console.log(episodes);
numberOfEpisodes = episodes.length;