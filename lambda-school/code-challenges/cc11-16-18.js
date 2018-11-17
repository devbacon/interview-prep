// Given a jumbled list of plane tickets, 
// sort them into their flight order
const reconstructTrip = tickets => {
  // Create and populate hash map for quick linked data references
  const hashMap = {};
  // Assign FROM location as key and TO location as value for each ticket
  tickets.forEach(ticket => { hashMap[ticket[0]] = ticket[1] });

  // Initialize sorted array and insert first element
  const sortedTickets = [[null, hashMap[null]]];
  // Track values for while loop
  const ticketLength = tickets.length;
  let sortedIndex = 0;
  
  // Populate the sorted array by using hash table as linked list
  // and sortedIndex as reference point
  while(sortedIndex < ticketLength - 1) {
    // Store to and from locations
    const ticketFrom = sortedTickets[sortedIndex][1];
    const ticketTo = hashMap[sortedTickets[sortedIndex++][1]]
    // Use most recent sorted ticket to populate next in array
    sortedTickets.push([ticketFrom, ticketTo]);
  }

  return sortedTickets;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
// Optomization?: 

const tickets = [
  ['PIT', 'ORD'],
  ['XNA', 'CID'],
  ['SFO', 'BHM'],
  ['FLG', 'XNA'],
  [null, 'LAX'], 
  ['LAX', 'SFO'],
  ['CID', 'SLC'],
  ['ORD', null],
  ['SLC', 'PIT'],
  ['BHM', 'FLG'],
];

console.log(reconstructTrip(tickets));