const eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
     '5th Avenue'
    ]

class Driver {
    constructor(name, date){
        this.name = name 
        this.date = date
    }

    startDate() {return new Date(this.date);
    }

    yearsExperienceFromBeginningOf(endDate) {
        const start = this.startDate().getFullYear();
         return endDate - start;
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
        // console.log(this)
        }

        avenueToInteger(avenue){
            return eastWest.indexOf(avenue)
        }

    blocksTravelled() {
        let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal);
        let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical; 
        return Math.abs(horizontalDistance) + Math.abs(verticalDistance); 
        // console.log(this.beginningLocation.horizontal);
        // console.log(eastWest.indexOf(this.endingLocation.horizontal));
        // console.log (parseInt(eastWest.indexOf(this.endingLocation.horizontal) - (this.beginningLocation.horizontal)) + parseInt((this.endingLocation.vertical) - (this.beginningLocation.vertical)));
    }

    estimatedTime(peak) {
        if(peak) {
            return this.blocksTravelled() / 2; 
        }
        else {
            return this.blocksTravelled() /3;
        }
    }
}
