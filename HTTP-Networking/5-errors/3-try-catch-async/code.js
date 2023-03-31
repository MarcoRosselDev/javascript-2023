/* Assignament

We're trying to fetch the worldwide leaderboard from the Fantasy Quest servers, 
but we're getting an error! Fortunately, it's just because the server is down,
there's nothing wrong with the fetchLeaderBoard function.

However, as good software engineers, 
we need to handle our server being down cleanly and display an error message to our users.

Wrap the network call within a try/catch block. 
Within the catch block, log the text:

Our servers are down, 
but we will be up and running soon

*/


try {
    const leaderboard = await fetchLeaderBoard()
    console.log(leaderboard)
} catch (err) {
    console.log('Our servers are down, but we will be up and running soon')
}

// don't touch below this line

async function fetchLeaderBoard() {
    const response = await fetch('https://fantasyquest.servers')
    return response.json()
}

// Our servers are down, but we will be up and running soon