// from data.js
var tableData = data;

// YOUR CODE HERE!
var input_text = d3.select("#datetime");
var form = d3.select("form");
//var table = d3.select("table");
var tableBody = d3.select("tbody");
var button = d3.select("#button");

function handleChange(event){
	var input_date = d3.event.target.value;
	// console.log(input_date);
	tableBody.selectAll("tr").remove();
	loadTable(input_date);
};

input_text.on("change", handleChange);

button.on("click", handleChange);

function loadTable(input_date){
	tableData.forEach(function(entry){
		//console.log(entry["shape"]);
		if (entry["datetime"] === input_date){
			//console.log(entry);
			var tableRow = tableBody.append("tr");

			Object.entries(entry).forEach(function([key, value]) {
    			//console.log(key, value);
    			tableRow.append("td").text(value);
  			});	
		};
		
	});
};

function getChoice(choice){

	switch(choice){
		case "date":
			break;
		case "city":
			break;
		case "state":
			break;
		case "country":
			break;
		case "shape":
			break;
		case "duration":
			break;
	};
};