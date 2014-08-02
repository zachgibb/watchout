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


var Enemy = function () {
  this.x = Math.random() * 480 + 10;
  this.y = Math.random() * 380 + 10;
};
var numEnemies = Math.floor(Math.random() * 18) + 6;
var enemies = [];
for (numEnemies; numEnemies > 0; numEnemies--) {
  enemies.push(new Enemy);
}

d3.select('svg').selectAll('circle')
  .data(enemies).enter().append('circle')
  .attr({
    'color': 'black',
    'r': '10',
    'cx': function(d){return d.x;},
    'cy': function(d){return d.y;}
  });
setInterval(function(){

  d3.selectAll('circle').transition().duration(1000).attr({
      'color': 'blue',
      'cx': function(){ return Math.random() * 480 + 10},
      'cy': function(){ return Math.random() * 380 + 10}
  });
}, 1000);