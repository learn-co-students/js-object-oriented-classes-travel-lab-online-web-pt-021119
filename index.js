let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver{
  constructor(name, date){
    this.name = name;
    this.date = date;
  }

  startDate(){
    return new Date(this.date);
  }

  yearsExperienceFromBeginningOf(endDate){
    const startYear = this.startDate().getFullYear();
    return endDate - startYear;
  }
}

class Route{
  constructor(start, end){
    this.start = start;
    this.end = end;
  }

  avenueToInteger(avenue){
    return eastWest.indexOf(avenue);
  }

  blocksTravelled(){
    let horizontalDistance =
      this.avenueToInteger(this.end.horizontal) -
      this.avenueToInteger(this.start.horizontal);
    let verticalDistance =
      this.end.vertical - this.start.vertical;
    return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
  }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled() / 2;
    }else{
      return this.blocksTravelled() / 3;
    }
  }

}
