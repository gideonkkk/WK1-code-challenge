function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;   
    if(speed <= speedLimit){
        return "OK";       
    }else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if  (demeritPoints <= 12) {
            return ("Points:" + demeritPoints)
        }else{
            return ("License suspended");
        }
    }

}
// Example usage:
const vehicleSpeed = 90;
const result = speedDetector(vehicleSpeed);
console.log(result);