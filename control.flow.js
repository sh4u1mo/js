class Episode {
	cosntructor(title, duration, minutesWatched) {
		this.title = title;
		this.duration = duration;

		if(minutesWatched == duration){
			this.hasBeenWatched = true
		} else {
			thsi.hasBeenWatched = false;
		}
	}
}