function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                "Reggie Evens": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
                "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
                "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
                "Bismack Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
                "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
                "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
                "Brendan Hayword": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 22, steals: 4, blocks: 5, slamDunks: 12 },
            },
        },
    };
}

// Retrieve Player Information

function numPointsScored(playerName) {
    const data = gameObject();
    for (const team in data) {
        if (data[team].players[playerName]) {
            return data[team].players[playerName].points;
        }
    }
}

function shoeSize(playerName) {
    const data = gameObject();
    for (const team in data) {
        if (data[team].players[playerName]) {
            return data[team].players[playerName].shoe;
        }
    }
}

//Retrieve Team Information ---

function teamColors(teamName) {
    const data = gameObject();
    for (const team in data) {
        if (data[team].teamName === teamName) {
            return data[team].colors;
        }
    }
}

function teamNames() {
    const data = gameObject();
    return [data.home.teamName, data.away.teamName];
}

//Retrieve Player Numbers and Stats ---

function playerNumbers(teamName) {
    const data = gameObject();
    const numbers = [];
    for (const team in data) {
        if (data[team].teamName === teamName) {
            for (const player in data[team].players) {
                numbers.push(data[team].players[player].number);
            }
        }
    }
    return numbers;
}

function playerStats(playerName) {
    const data = gameObject();
    for (const team in data) {
        if (data[team].players[playerName]) {
            return data[team].players[playerName];
        }
    }
}

function bigShoeRebounds() {
    const data = gameObject();
    let maxShoe = 0;
    let rebounds = 0;

    for (const team in data) {
        for (const player in data[team].players) {
            const stats = data[team].players[player];
            if (stats.shoe > maxShoe) {
                maxShoe = stats.shoe;
                rebounds = stats.rebounds;
            }
        }
    }
    return rebounds;
}

//Bonuss ---

function mostPointsScored() {
    const data = gameObject();
    let maxPoints = 0;
    let highScorer = "";

    for (const team in data) {
        for (const player in data[team].players) {
            if (data[team].players[player].points > maxPoints) {
                maxPoints = data[team].players[player].points;
                highScorer = player;
            }
        }
    }
    return highScorer;
}

function winningTeam() {
    const data = gameObject();
    const homeTotal = Object.values(data.home.players).reduce((sum, p) => sum + p.points, 0);
    const awayTotal = Object.values(data.away.players).reduce((sum, p) => sum + p.points, 0);
    
    return homeTotal > awayTotal ? data.home.teamName : data.away.teamName;
}

function playerWithLongestName() {
    const data = gameObject();
    let longestName = "";

    for (const team in data) {
        for (const player in data[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    const data = gameObject();
    const longNamePlayer = playerWithLongestName();
    let maxSteals = 0;
    let bestStealer = "";

    for (const team in data) {
        for (const player in data[team].players) {
            if (data[team].players[player].steals > maxSteals) {
                maxSteals = data[team].players[player].steals;
                bestStealer = player;
            }
        }
    }
    // Returns true if the person with longest name is the same person with most steals
    return longNamePlayer === bestStealer;
}