//                              TASK 1
// Use data in three ways:

    // Data values assigned to d3.data() methods
    d3.select("body")
    .selectAll(".task1a").style("color","red")
    .data([1,2,3,4])
    .text(function(d){
        return "Number in dataset: " + d;
    });

    // Declare a variable dataset and pass it to the data() method
    var countries = ["Australia","United Kingdom","Japan","Canada","China","France","Spain"];

    d3.select("body")
    .selectAll(".task1b").style("color","blue")
    .data(countries)
    .text(function(country){
        return "Country in dataset: " + country;
    });

    // Import a dataset from a .csv file
    d3.csv("films.csv").then(function(data){
        data.forEach(d => {d.H=+d.Height;});
        console.log(data)
    });

//                              TASK 2
// Use the enter() function to enter data values:

    // Change the text of the 1st three paragraphs and append p text for the remaining data values

    d3.select("body")
    .select(".task2div")
    .selectAll(".task2").style("color","purple")
    .data([1,2,3,4,5,6])
    .text(function(d){
        return "This is existing paragraph " + d;
    })
    .enter()
    .append("p").style("color","orange")
    .text(function(d){
        return "This is appended paragraph " + d;
    });

//                              TASK 3
// Create three rectangles using SVG

    d3.select("svg")
    .selectAll("rect")
    .style("fill","red")
    .attr("width",100)
    .attr("height",50)
