//plan
//creatve svg tag
  //(gameboard)
  //create cirlce tag
    //(create enemies)
  //create path tag
    //(create player)
  //set position random

  //use css to change the enemy design
var width = "500";
var height = "400";
d3.select('body').append('svg').attr({'width': width, 'height': height});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var Enemy = function () {
  this.x = Math.random() * 480 + 10;
  this.y = Math.random() * 380 + 10;
};
var numEnemies = Math.floor(Math.random() * 18) + 6;
var enemies = [];
for (numEnemies; numEnemies > 0; numEnemies--) {
  enemies.push(new Enemy());
}

d3.select('svg').selectAll('circle')
  .data(enemies).enter().append('circle')
  .attr({
    'fill': 'black',
    'r': '10',
    'cx': function(d){return d.x;},
    'cy': function(d){return d.y;}
  });

// create player

var Player = function(){
  this.x = 250;
  this.y = 200;
};
var player = [new Player()];

var dragmove = function(d){
  d3.select(this).attr({
    'x': d.x = d3.event.x,
    'y': d.y = d3.event.y
  });
};

var dragging = d3.behavior.drag()
  .origin(function (d) {return d;})
  .on('drag', dragmove);

d3.select('svg').append('rect').data(player)
  .attr({
   'x': function(d){return d.x;},
   'y': function(d){return d.y;},
   'width': 20,
   'height': 20,
   'fill': 'black'
  }).call(dragging); 





setInterval(function(){

  d3.selectAll('circle').transition().duration(1050).attr({
      'fill': function() {return getRandomColor(); },
      'cx': function(){ return Math.random() * 480 + 10},
      'cy': function(){ return Math.random() * 380 + 10}
  });
}, 1000);











// var Player = function(){
//   this.path = "M 250 200 L 240 215 L 260 215 z";
//   this.x = 250;
//   this.y = 200;
//   this.fill = 'black';
// };
// var player = [new Player()];
// d3.select('svg').append('path').data(player)
//   .attr({
//    'd': function (d) {return d.path;}, 
//     'fill': function (d) {return d.fil;}, 
//     'stroke-width': '2'
//   }); 

// var dragging = d3.behavior.drag()
//   .origin(function (d) {return d;})
//   .on('drag', dragmove);

// function dragmove(d) {
//   d3.select(this)
//       .attr("cx", d.x = Math.max(radius, Math.min(width - radius, d3.event.x)))
//       .attr("cy", d.y = Math.max(radius, Math.min(height - radius, d3.event.y)));
// }

// d3.select('path').call(dragging);