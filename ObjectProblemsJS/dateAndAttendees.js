/*Write a JavaScript code snippet using for loops to calculate the total number of attendees for each day of the conference. 
Then, print out a summary that includes the date and the total attendees for that date.*/


const conferenceSchedule = {
    days: [
        {
            date: '2024-04-10',
            sessions: [
                {
                    title: 'JavaScript: The Future',
                    speaker: 'Alex Johnson',
                    attendees: 120
                },
                {
                    title: 'CSS for the Future Web',
                    speaker: 'Emily Davis',
                    attendees: 80
                }
            ]
        },
        {
            date: '2024-04-11',
            sessions: [
                {
                    title: 'Advanced Node.js',
                    speaker: 'Michael Brown',
                    attendees: 90
                },
                {
                    title: 'Scalable Vector Graphics (SVG)',
                    speaker: 'Laura White',
                    attendees: 60
                }
            ]
        }
    ]
};

let totalAttendees = 0; 
let day = 0;

for (let i = 0; i< conferenceSchedule.days.length; i++){ 
    let day = conferenceSchedule.days[i];

    for (let j = 0; j < day.sessions.length; j++){
        let session = day.sessions[j];
        totalAttendees += session.attendees; 
    }
}
console.log(`Date: ${day.date}, Total Attendees: ${totalAttendees}`);
