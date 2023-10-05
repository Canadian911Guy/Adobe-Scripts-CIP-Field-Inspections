// Initialize function to set date field
function initializeDateField() {
  // Custom function to pad numbers with leading zeros
  function padNumber(num) {
    return (num < 10 ? '0' : '') + num;
  }

  // Get today's date
  var today = new Date();
  
  // Get the day, month, and year
  var day = padNumber(today.getDate());
  var year = today.getFullYear();
  
  // Get the month name and convert it to its three-letter abbreviation
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = monthNames[today.getMonth()];
  
  // Combine them to form the date in the format dd-mmm-yyyy
  var formattedDate = day + '-' + month + '-' + year;
  
  // Set the date field if it's empty
  var dateField = this.getField("Date1_af_date");
  
  if (dateField && !dateField.value) {
    dateField.value = formattedDate;
  }
}

// Call the initialize function when the document is opened
initializeDateField();
