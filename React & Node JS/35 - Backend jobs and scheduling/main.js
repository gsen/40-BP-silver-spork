const cron = require('node-cron');
console.log("running cron")
cron.schedule('*/5 * * * * */sat', () => {

    console.log('running a task every 5 seconds');
});

cron.schedule("0 0 * * *", () => {
    console.log("daily database cleanup")
})

// assume users are coming from a db.
const users = ["user@test.com", "gaurav@test.com", "amit@test.com"];

function sendEmail(user) {
    console.log("Email sent to user: " + user)
}

cron.schedule("* * * * * */sat", () => {

    // send newsletter subscription emails
    users.forEach(user => {
        //logic for sending subscription email
        sendEmail(user);
    })
})