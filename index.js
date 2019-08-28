class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return Number(endDate) - this.startDate.getFullYear();
  }
}

