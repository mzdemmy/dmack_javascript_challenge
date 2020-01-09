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

// Select the button
var button = d3.select("#filter-btn");

// Track filters
var filters = {};

// Complete the click handler for the form
button.on("click", function() {

  // Select input element(s) and get the raw HTML node(s)
  var input1 = d3.select("#datetime");
  var input2 = d3.select("#city");
  var input3 = d3.select("#state");
  var input4 = d3.select("#country");
  var input5 = d3.select("#shape");

  //add filtered id and value to the filters tracker
  if (input1.property("value").length != 0) {
    filterId = input1.attr("id")
    filters[filterId] = input1.property("value");
  }
  if (input2.property("value").length != 0) {
    filterId = input2.attr("id")
    filters[filterId] = input2.property("value");
  }
  if (input3.property("value").length != 0) {
    filterId = input3.attr("id")
    filters[filterId] = input3.property("value");
  }
  if (input4.property("value").length != 0) {
    filterId = input4.attr("id")
    filters[filterId] = input4.property("value"); 
  }
  if (input5.property("value").length != 0) {
    filterId = input5.attr("id")
    filters[filterId] = input5.property("value");
  }
  console.log(filters);
  result();
}); 

  //Use the form input to filter the data 
  function result() {
    let filterdData = tableData;
  
    // Search through the table columns to find rows that match user input.
    Object.entries(filters).forEach(([key, value]) => {
      filterdData = filterdData.filter(row => row[key] === value);
   });

    console.log(filterdData);

  // Build new table with filtered data
    record = filterdData;
    tableCreate(filterdData);
  
};

