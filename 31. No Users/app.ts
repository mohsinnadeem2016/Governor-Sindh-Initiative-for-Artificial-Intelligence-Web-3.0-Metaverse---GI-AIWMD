// Array of usernames
let usernames: string[] = [];

// Check if the list of users is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and print greetings
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}