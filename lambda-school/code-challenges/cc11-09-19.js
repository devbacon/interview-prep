// ----- Counting Votes -----

// - First Attempt -
function countVotes(votes) {
  // create hash table as empty object
  const votesHash = {}

  // iterate through array
  votes.forEach(vote => {
    // if name in table?
    if (votesHash[vote]) {
      // add one vote
      votesHash[vote]++;
    } else {
      // add name to table with 1 vote
      votesHash[vote] = 1;
    }
  });

  let winner = null;
  let max = 0;

  // iterate through object
  Object.keys(votesHash).forEach(name => {
    // track max votes
    max = Math.max(max, votesHash[name]);
    // update winner
    if (max === votesHash[name]) winner = name;
  });

  return winner;
}