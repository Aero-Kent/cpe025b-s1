// Scenario: A simple contact list is a good start, but real-world data is often more structured.
// You are tasked with creating a Project Team Directory. This requires storing not just names 
// and emails, but also the specific skills of each member (as an array) and their availability (as a boolean). 

// Create the Directory
// "Skills" property for each member must be its own array
// Add a New Specialist
let teamDirectory = [
  {
    name: "Leo Brooks",
    role: "Designer",
    skills: ["UI","UX","Figma"],
    available: true
  },
  {
    name: "Sasha Ivana",
    role: "Developer",
    skills: ["HTML","CSS","JS"],
    available: false
  },
  {
    name: "Jordan Lee",
    role: "Manager",
    skills: ["Plaaning","Agile"],
    available: true
  },
  // adds new specialist
  {
    name: "Casey Moore",
    role: "QA Engineer",
    skills: ["Testing","Debugging"],
    available: true
  }
];

// Update Availability: Sasha Ivana has just finished a project.
// Update her available property to true by accessing it via the array index. 
teamDirectory[1].available = true;

// Display the following information in the console: 
// a. The name and the first skill of the first team member. 
console.log(`${teamDirectory[0].name} has a the first skill of ${teamDirectory[0].skills[0]}`)

// b. The name and the total number of skills of the last team member in the list (use the .length property). 
const lastMemberIdx = teamDirectory.length - 1;
console.log(`${teamDirectory[lastMemberIdx].name} has a the total skills number of ${teamDirectory[lastMemberIdx].skills.length}`)

// c. The total number of people currently in the directory.
console.log(`there are currently ${teamDirectory.length} people in the directory`)