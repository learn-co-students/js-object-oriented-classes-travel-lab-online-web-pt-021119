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
  constructor(begginingLocation, endingLocation){
    this.begginingLocation = begginingLocation;
    this.endingLocation = endingLocation;
  }

  routeConvert(street){
    switch(street){
      case 'Lexington':
        return 4;
        break;
      case 'Park':
        return 5;
        break;
      case 'Madison':
        return 6;
        break;
      case '5th Avenue':
        return 7;
        break;
      default:
        return parseInt(street);
    }
  }

  blocksTravelled(){
    return Math.abs((this.routeConvert(this.begginingLocation.horizontal) - this.routeConvert(this.endingLocation.horizontal))) + Math.abs(this.begginingLocation.vertical - this.endingLocation.vertical);
  }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}
