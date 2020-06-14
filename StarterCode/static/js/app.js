var tableData = data;

// from data.js
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// Coming from the walk through video activity
// cosole.log the data from data.js (console.log just prints the code)
console.log(tbody);


// loop through data and console.log each report object
// AlienData does not mean anything while the tr is the tag used from html file
// tbody also is a reference from the html file
data.forEach(function(AlienData) {
   console.log(AlienData);
  var row = tbody.append("tr");

  Object.entries(AlienData).forEach(([key, value])=>{
    //console.log(key, value);

    var cell = tbody.append("td");
    cell.text(value);
  });
});

// clear table
function removeTableBody(){
  $('#ufo-table tbody').empty();
}
// from the forms activity
// define input field and get the element from html
 var inputField = d3.select("form-control");


 // Select the button
var button = d3.select("#filter-btn");

// Need event handlers 
button.on("click", runEnter);
inputField.on("submit",runEnter);


// Complete the event handler
function runEnter() {
   // Select the input element and get the raw HTML node
 var inputElement = d3.select("#datetime");
  // Get the value property of the input element

 var inputValue = inputElement.property("value");
 console.log(inputValue);
 console.log(tableData);


 var FilteredData = tableData.filter(tableData => tableData.datetime === inputValue);
 console.log(FilteredData);
 var tbody = d3.select("tbody");


 // clear table (help from David)
 removeTableBody();
 // copied from top Console.log in above lines then filtered data 
 console.log(FilteredData);
 FilteredData.forEach((FilteredAlienData) => {
     var row = tbody.append("tr");
     Object.entries(FilteredAlienData).forEach(([key, value]) => {
       var cell = row.append("td");
       cell.text(value);
     });
   });
};