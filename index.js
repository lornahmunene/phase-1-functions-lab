// Code your solution in this file!

function distanceFromHqInBlocks(street){
    let blocks=(Math.abs(42-street))
    return blocks}
    function distanceFromHqInFeet(street){
        let blocks=(Math.abs(42-street))
        let feet=blocks*264
        return feet
    }
    function distanceTravelledInFeet(to,from){
        let feet=(Math.abs(to-from))*264
        return feet
    }
    function calculatesFarePrice(start,destination){
        let blocks =Math.abs((destination-start))
        let feet=blocks*264
        let fare;
        if (feet<=400){
            fare=0
        }
        else if (feet>400 && feet<=2000){
            fare=(feet-400)*0.02
        }
        else if (feet<=2500){
            fare=25
        }
        else {
            fare='cannot travel that far'
        }
        return fare
    }

