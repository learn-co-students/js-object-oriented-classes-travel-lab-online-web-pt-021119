class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    let beginHorizontal = this.beginningLocation.horizontal;
    let endHorizontal = this.endingLocation.horizontal;

    let beginVertical = this.beginningLocation.vertical;
    let endVertical = this.endingLocation.vertical;

    let horizontalBlocks = Math.abs(eastWest.indexOf(endHorizontal) - eastWest.indexOf(beginHorizontal));
    let verticalBlocks = Math.abs(parseInt(endVertical) - parseInt(beginVertical));

    return horizontalBlocks + verticalBlocks;
  }

  estimatedTime(peakHours=false) {
    let totalTime = 0
    
    if (peakHours === true) {
      totalTime = this.blocksTravelled() / 2;
    } else if (peakHours === false) {
      totalTime = this.blocksTravelled() / 3;
    }
    
    return totalTime;
  }
}
