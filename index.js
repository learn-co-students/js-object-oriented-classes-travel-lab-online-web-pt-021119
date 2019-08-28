class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return Number(endDate) - this.startDate.getFullYear();
  }
}

class Route {
  constructor(begginingLocation, endingLocation) {
    this.begginingLocation = begginingLocation;
    this.endingLocation = endingLocation;
  }

  findHorizontalDistance(avenue){
    const eastWest = ['1st Avenue', '2nd Avenue','3rd Avenue','Lexington Avenue','Park','Madison Avenue','5th Avenue'];
    let calc = 0;
    eastWest.forEach(function(ave, i){
      if (ave === avenue) {
        calc = i;
      }
    })
    return calc
  }

  blocksTravelled(){
    let horizontal = Math.abs(
      this.findHorizontalDistance(this.begginingLocation.horizontal) -
      this.findHorizontalDistance(this.endingLocation.horizontal)
    );
    let vertical = Math.abs(
      this.begginingLocation.vertical -
      this.endingLocation.vertical);
     return horizontal + vertical;
  }
 
  estimatedTime(peak = false){
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
  
}

