
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = startDate;
  };

  yearsExperienceFromBeginningOf(endDate) {
    let startingDate = this.startDate.split(',')
    return parseInt(endDate,10) - parseInt(startingDate[1],10);
  };
};

class Route {
  constructor(start, end) {
    self.start = start;
    self.end = end;
  };

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

    const horizontal_start = eastWest.indexOf(start.horizontal);
    const horizontal_end = eastWest.indexOf(end.horizontal);
    const horizontal_travel = horizontal_end - horizontal_start;

    const vertical_start = start.vertical;
    const vertical_end = end.vertical;
    const vertical_travel = vertical_end - vertical_start;

    return horizontal_travel + vertical_travel;
  }

  estimatedTime(isRushHour = false) {
    const travel = this.blocksTravelled();
    if (isRushHour) {
      return travel / 2
    } else {
      return travel / 3
    };
  }
};
