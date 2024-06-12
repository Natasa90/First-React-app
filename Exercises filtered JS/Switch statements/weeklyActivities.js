const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const weeklyActivities = ["study", "exercise", "relax", "free day"];

for (let i = 0; i < weekday.length; i++) {
  if (i < 5)  { switch (true) {
        case weekday[i] === "monday": 
            console.log("monday:" + weeklyActivities[0]);
            break;
        case weekday[i] === "tuesday": 
            console.log("tuesday:" + weeklyActivities[1]);
            break;
        case weekday[i] === "wednesday": 
            console.log("wednesday:" + weeklyActivities[2]);
            break;
        case weekday[i] === "thursday": 
            console.log("thuesday:" + weeklyActivities[0]);
            break;
        default: 
            console.log("friday:" + weeklyActivities[1]);

            }
} else { 
    switch (true) {
        case weekday[i] === "saturday": 
            console.log("saturday:" +  weeklyActivities[2]);
            break;
        default: console.log("sunday:" + weeklyActivities[3]);
        }
    }
}