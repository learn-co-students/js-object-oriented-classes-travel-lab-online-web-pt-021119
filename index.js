class Driver{
  constructor(name, date){
    this.name = name
    this.date = date
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
    this.begginingLocation = begginingLocation
    this.endingLocation = endingLocation
  }
}
