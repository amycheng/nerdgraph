/*
TODOS
=====
- add collision detection
*/

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
    {"name":"watching sports","stigma":2,"time":6},
    {"name":"watching anime","stigma":7,"time":5}
  ]
  ;


var graph = d3.select("svg");

var _size = 600;


var tooltip = function(posX,posY,text){
    var el =d3.select("body")
    .select("div")
    .append("div")
    .attr("id","label")
    .style("position", "absolute")
    .style("top",posY)
    .style("left",posX)
    .text(text);

    return el;
  };


var _map = d3.scale.linear()
    .domain([0, 10])
    .range([0, 500]);

var points =
    graph.selectAll("circle")
   .data(data)
   .enter()
   .append("circle");

   points
    .attr('cx',300)
    .attr('cy',300);

   points
    .transition()
    .ease("bounce")
    .delay(500)
   .attr("cx", function(d) {
        return _map(d["stigma"]);
   })
   .attr("cy", function(d) {
        return _map(d["time"]);
   })
   .attr("r", 10);


   points
   .on('mouseover',function(d){
    console.log("ping");
    return tooltip(_map(d["stigma"])+10,_map(d["time"]),d["name"]);
   })
   .on("mouseout",function(){
      var el = document.body.querySelector("#label");
      el.remove();
   });
