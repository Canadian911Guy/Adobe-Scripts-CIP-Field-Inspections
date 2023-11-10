// Document-level script to copy value from dropdown to text fields and initialize default values

// Define the mapping of names to roles
var nameToRole = {
  "Adam Smith": "Apprentice",
  "Alex Gibson": "TCP",
  "Alex McKinty": "Foreman",
  "Andrew Fietz": "PLT",
  "Angela Plaxton": "TCP",
  "Ben Westlake": "Labourer",
  "Bradley Franks": "Tel Lineman",
  "Bradley Tripp": "TCP",
  "Brandon Sagal": "Apprentice",
  "Brennah Thomas": "TCP", 
  "Carson Ronningen": "Labourer",
  "Celina Thmpson": "TCP",
  "Chase Hutchings": "Apprentice",
  "Chris Weber": "PLT",
  "Clayton Rae": "Tel Lineman",
  "Connor Barnes-Campbell": "TCP",
  "Corbin Shapcott": "Labourer / OFA 3",
  "Dan Johnston": "General Foreman",
  "Dan Reid": "PLT",
  "Darryl Dirom": "PLT",
  "Dave Carey": "Tel Lineman",
  "Dawson Blackford": "TCP",
  "Dayton Henderson": "Tel Lineman",
  "Dean Hodges": "Tel Lineman",
  "Dirk van Nus": "TCP",
  "Doug Hogarth": "General Foreman",
  "Dylan Pilon": "Apprentice",
  "Emily Homuth": "TCP",
  "Emily Reid": "TCP",
  "Eric Barr": "PLT",
  "Eric Tasler": "Tel Lineman",
  "Evan Binley": "Sub-Foreman",
  "Gabrielle Alexa Jarvis": "TCP",
  "Graham Hunter": "TCP",
  "Greg Leakey": "Sub-Foreman",
  "Heather Stevenson": "TCP",
  "James Albrecht": "PLT",
  "Jamie LaForce": "Sub-Foreman",
  "Joe Leakey": "Labourer",
  "John Switzer": "Tel Lineman",
  "Justin Cuscianna": "Tel Lineman",
  "Kayla Gibson": "TCP",
  "Kyle Schleining": "Labourer",
  "Lach Hadley": "Labourer",
  "Mark Waller": "Sub-Foreman ",
  "Matt Henwood": "Labourer",
  "Matt Peet": "PLT",
  "Maxim McDowell-Powlowski": "TCP",
  "Paul Gaudreault": "Sub-Foreman",
  "Piotr Lewandowski": "Sub-Foreman",
  "Richard Addis": "HVAC Operator",
  "Rick Say": "Driver Operator",
  "Ryan Dyball": "TCP",
  "Sean Cronk": "General Foreman",
  "Stephanie Cooper": "TCP / OFA 3",
  "Susy Crocker": "TCP",
  "Tanya Fercho": "Foreman",
  "Taylor Lagos": "Labourer",
  "Tyler Frueh": "PLT"
};

// Function to copy role based on name from dropdown to text field
function copyRoleFromDropdown(dropdownName, textFieldName) {
  var dropdown = this.getField(dropdownName);
  var textField = this.getField(textFieldName);

  if (dropdown && textField) {
    if (dropdown.value !== "Choose Crew Lead" && dropdown.value !== "Choose From List") {
      // Get the role based on the selected name and set it to the text field
      var roleName = nameToRole[dropdown.value];
      textField.value = roleName ? roleName : "Role not found";
    } else {
      textField.value = "";
    }
  }
}

// Special function for CrewPerson1 to handle both name and role
function handleCrewPerson1() {
  var dropdown = this.getField("CrewPerson1");
  var nameField = this.getField("PrintName2");
  var roleField = this.getField("Text3");

  if (dropdown && nameField && roleField) {
    if (dropdown.value !== "Choose Crew Lead") {
      nameField.value = dropdown.value; // Copy the name
      var roleName = nameToRole[dropdown.value]; // Get the role
      roleField.value = roleName ? roleName : "Role not found";
    } else {
      nameField.value = "";
      roleField.value = "";
    }
  }
}

// Initialize the function when the document is opened
function initialize() {
  this.getField("CrewPerson1").setAction("OnBlur", "handleCrewPerson1();");
  this.getField("CrewPerson2").setAction("OnBlur", "copyValueFromCrewPerson2();");
  this.getField("CrewPerson3").setAction("OnBlur", "copyValueFromCrewPerson3();");
  this.getField("CrewPerson4").setAction("OnBlur", "copyValueFromCrewPerson4();");
  this.getField("CrewPerson5").setAction("OnBlur", "copyValueFromCrewPerson5();");
  this.getField("CrewPerson6").setAction("OnBlur", "copyValueFromCrewPerson6();");
  this.getField("CrewPerson7").setAction("OnBlur", "copyValueFromCrewPerson7();");
  this.getField("CrewPerson8").setAction("OnBlur", "copyValueFromCrewPerson8();");
}

function copyValueFromCrewPerson2() {
  copyRoleFromDropdown.call(this, "CrewPerson2", "Text4");
}

function copyValueFromCrewPerson3() {
  copyRoleFromDropdown.call(this, "CrewPerson3", "Text5");
}

function copyValueFromCrewPerson4() {
  copyRoleFromDropdown.call(this, "CrewPerson4", "Text6");
}

function copyValueFromCrewPerson5() {
  copyRoleFromDropdown.call(this, "CrewPerson5", "Text7");
}

function copyValueFromCrewPerson6() {
  copyRoleFromDropdown.call(this, "CrewPerson6", "Text8");
}

function copyValueFromCrewPerson7() {
  copyRoleFromDropdown.call(this, "CrewPerson7", "Text9");
}

function copyValueFromCrewPerson8() {
  copyRoleFromDropdown.call(this, "CrewPerson8", "Text10");
}

// Call the initialize function to set everything up
initialize();