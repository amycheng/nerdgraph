  console.log("starting codes");

  var data = [
    {"name":"cosplay","stigma":8,"time":9},
    {"name":"writing fanfiction","stigma":8,"time":7},
    {"name":"reading sci fi","stigma":3,"time":4},
    {"name":"reading fantasy","stigma":4,"time":4},
    {"name":"playing Halo","stigma":5,"time":7},
    {"name":"playing Final Fantasy","stigma":7,"time":9},
    {"name":"reading comic books","stigma":6,"time":3},
    {"name":"wargaming","stigma":9,"time":10},
    {"name":"tabletop gaming","stigma":8,"time":7},
    {"name":"RPG","stigma":10,"time":10},
    {"name":"LARP","stigma":11,"time":10},
    {"name":"Magic: The Gathering","stigma":8,"time":7},
    {"name":"making a web page","stigma":3,"time":8},
    {"name":"watching sports","stigma":2,"time":6}
  ]
  ;


var graph = d3.select("svg");

var _size = 600;


var label = function(posX,posY,text){

};

var _map = d3.scale.linear()
    .domain([0, 10])
    .range([0, 550]);

/*
d3.select("body").selectAll("p")
    .data(data)
    .enter()
    .append("p")
    .text(function(d) { return d.name; });
*/

graph.selectAll("circle")
   .data(data)
   .enter()
   .append("circle")
   .attr("cx", function(d) {
        return _map(d["stigma"]);
   })
   .attr("cy", function(d) {
        return _map(d["time"]);
   })
   .attr("r", 5);

graph.selectAll("text")
   .data(data)
   .enter()
   .append("text")
   .text(function(d) {
        return d["name"];
   })
   .attr("x", function(d) {
        return _map(d["stigma"])+10;
   })
   .attr("y", function(d) {
        return _map(d["time"])+10;
   });
