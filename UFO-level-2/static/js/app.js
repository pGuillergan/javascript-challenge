// from data.js
var tableData = data;

// YOUR CODE HERE!
var input_text = d3.select("#datetime");
var form = d3.select("form");
//var table = d3.select("table");
var tableBody = d3.select("tbody");
var button = d3.select("#button");
var selected = "datetime";

function handleChange(event){
	var input_data = d3.event.target.value;
	// console.log(input_date);
	tableBody.selectAll("tr").remove();
	loadTable(input_data);
};

input_text.on("change", handleChange);

button.on("click", handleChange);

function loadTable(input_data){
	tableData.forEach(function(entry){
		//console.log(entry["shape"]);
		if (entry[selected] === input_data){
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
		case "datetime":
			d3.select("input").attr("placeholder", "1/11/2011")
			break;
		case "city":
			d3.select("input").attr("placeholder", "ex. bonita")
			break;
		case "state":
			d3.select("input").attr("placeholder", "ex. ca")
			break;
		case "country":
			d3.select("input").attr("placeholder", "ex. us")
			break;
		case "shape":
			d3.select("input").attr("placeholder", "ex. triangle")
			break;
		case "durationMinutes":
			d3.select("input").attr("placeholder", "ex. 1 min")
			break;
	};
	selected = choice;
};