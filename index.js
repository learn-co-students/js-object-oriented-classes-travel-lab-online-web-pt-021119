class Driver{
  constructor(name, dateJoined){
    this.name=name;
    this.dateJoined=dateJoined;
  };

  startDate(dateJoined){
    let value = Date.parse(this.dateJoined);
    return new Date(value).toDateString();
    //date object
  };

  yearsExperienceFromBeginningOf(year){
    //number of years since startDate
    let dateA = new Date(year, 0);
    let dateB = new Date(this.startDate());
    return Math.round((dateA-dateB)/(86400000*365));
  };
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation=beginningLocation;
    this.endingLocation=endingLocation;
  };

  blocksTravelled(){
    let eastWest = {
      '1st Avenue': 1,
      '2nd Avenue': 2,
      '3rd Avenue': 3,
      'Lexington Avenue': 4,
      'Park': 5,
      'Madison Avenue': 6,
      '5th Avenue': 7
    };
    let horizontal = Math.abs( eastWest[this.beginningLocation['horizontal']]-eastWest[this.endingLocation['horizontal']]);let vertical = Math.abs(this.beginningLocation['vertical']-this.endingLocation['vertical']);
    return horizontal+vertical;
    // distance N to S in streets and E to W by above
  };

  estimatedTime(peak){
    if (peak === true) {
      return Math.round(this.blocksTravelled()/2);
    } else {
      return Math.round(this.blocksTravelled()/3);
    }
    // off peak 3blocks / minute
    // peak 2 blocks / minute

  };

}
