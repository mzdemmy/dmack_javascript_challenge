// Using the UFO dataset provided (data.js) in the form of an array of JavaScript objects, 
// write code that appends a table to a web page and then adds new rows of data for each UFO sighting.

// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Create function for table creation(s)
function tableCreate() {
    // Remove existing table content
    tbody.html("");

    // Loop through an array of UFO dataset and build the entire table

    record.forEach((siting) => {
    //console.log(siting);
    var row = tbody.append("tr");

    Object.entries(siting).forEach(([key, value]) => {
        //console.log(key, value);

        // Append a cell to the row for each value in the object
        var cell = row.append("td");     
        cell.text(value);
    });
})};

// build initial table (all data)
var record = tableData;
tableCreate(tableData);

// Use a date form to filter events
// Search through the `date/time` column to find rows that match user input.

// Select the button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  //Use the form input to filter the data by date/time
  function filterdttime(siting) {
      return siting.datetime === inputValue;
  }
 
  // Declare variables 
  var filteredatetime = tableData.filter(filterdttime);
  console.log(filteredatetime);

  // Build new table with filtered data
  record = filteredatetime;
  tableCreate(filteredatetime);
  
  });
// });
