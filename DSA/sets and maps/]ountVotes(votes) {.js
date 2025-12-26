function countVotes(votes) {
    //console.log(votes)

    let partyVotes = new Map(); // keeps track of how many votes party has received
    let voterVotesMap = new Map(); // keeps track of how many times a particular voter has voted

    for (let [voterId, party] of votes) {
        console.log({ voterId, party })
        if (!partyVotes.has(party)) {
            partyVotes.set(party, []);
        }
        if (!voterVotesMap.has(voterId)) {
            voterVotesMap.set(voterId, 1);
            let existingVoteCount = partyVotes.get(party) || 0;
            partyVotes.set(party, existingVoteCount + 1);
        }

    }
    // console.log(voterIdPartyMap)
    console.log(partyVotes)
    let max = 0;
    let winner = "";
    for (let [party, votes] of partyVotes) {
        if (votes > max) {
            winner = party;
            max = votes;
        }
    }



    // do not return console.log here as directed in example
    // Your code here
}

/*Do not change the code below */

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
readline.on("line", readInputs);

function readInputs(line) {
    inputArr.push(line);
    lineNumber++;
    if (lineNumber == 0) {
        size = parseInt(inputArr[0].trim());
    }
    //Exit Condition
    if (lineNumber == size) {
        logic("s");
        readline.close();
    }
}

function logic(input) {
    let votes = [];
    for (let i = 1; i <= parseInt(inputArr[0].trim()); i += 1) {
        let v = inputArr[i].trim().split(" ");
        votes.push(v);
    }
    countVotes(votes);
}
