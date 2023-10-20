// Document-level script to copy value from dropdown to text field

// Function to copy value from dropdown to text field
function copyDropdownToTextField() {
  // Get the dropdown field
  var dropdown = this.getField("CrewPerson1");
  
  // Get the text field
  var textField = this.getField("PrintName2");
  
  // Check if both fields are found
  if (dropdown && textField) {
    // Copy the value from dropdown to text field
    textField.value = dropdown.value;
  }
}

// Initialize the function when the document is opened
function initialize() {
  // Get the dropdown field
  var dropdown = this.getField("CrewPerson1");
  
  // Set an action to trigger the function when the dropdown value changes
  dropdown.setAction("OnBlur", "copyDropdownToTextField();");
}

// Call the initialize function to set everything up
initialize();