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
  enemies.push(new Enemy);
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

d3.select('svg').append('path')
  .attr({'d':"M 250 200 L 240 215 L 260 215 z", 
    'fill': 'black', 
    'stroke-width': '2'});




setInterval(function(){

  d3.selectAll('circle').transition().duration(1050).attr({
      'fill': function() {return getRandomColor(); },
      'cx': function(){ return Math.random() * 480 + 10},
      'cy': function(){ return Math.random() * 380 + 10}
  });
}, 1000);