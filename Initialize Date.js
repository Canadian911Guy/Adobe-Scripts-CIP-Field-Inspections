function setTodaysDate() {
  // List of date field names
  var dateFieldNames = ["Date1_af_date"];
  
  // Get the first date field to check if it's populated
  var firstField = this.getField(dateFieldNames[0]);
  
  // If the date field is already populated, exit the function
  if (firstField.value != "") {
    return;
  }
  
  // Otherwise, get today's date
  var today = new Date();
  
  // Get the day, month, and year
  var day = today.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  var year = today.getFullYear();
  
  // Get the month name and convert it to its three-letter abbreviation
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = monthNames[today.getMonth()];
  
  // Combine them to form the date in the format dd-mmm-yyyy
  var formattedDate = day + '-' + month + '-' + year;
  
  // Loop through each field name and set its value
  for (var i = 0; i < dateFieldNames.length; i++) {
    var field = this.getField(dateFieldNames[i]);
    if (field) {
      field.value = formattedDate;
    }
  }
}

// Call the function when the document is opened
setTodaysDate();