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
  this.id = "e" + Math.floor(Math.random() * 100 + 1);
};
var numEnemies = 1; //Math.floor(Math.random() * 18) + 7;
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
    'cy': function(d){return d.y;},
    'id': function(d){return d.id;}
  });

// create player

var Player = function(){
  this.x = 250;
  this.y = 200;
  this.hit = function () {
  // if this is in the same area as a ball
    var player = this;
    // indicate a hit
    d3.selectAll('circle').each(function(d){
      var enemyY = d3.select("#"+d.id).attr('cy');
      var enemyX = d3.select("#"+d.id).attr('cx');
      var xTest = (enemyX > (player.x - 8) && enemyX < (player.x + 22));
      var yTest = (enemyY > (player.y - 8) && enemyY <(player.y + 22));
      if (xTest && yTest) {
        console.log("HIT");
      }
    });

  };
};
var playerChar = new Player();
var player = [playerChar];
// var player = [];
// player.push(new Player);

var dragmove = function(d){
  d3.select(this).attr({
    'x': d.x = d3.event.x,
    'y': d.y = d3.event.y
  });
  // d.hit();
};

var dragging = d3.behavior.drag()
  .origin(function (d) {return d;})
  .on('drag', dragmove);

d3.select('svg').append('rect').data(player)
  .attr({
   'x': function(d){return d.x;},
   'y': function(d){return d.y;},
   'width': 13,
   'height': 13,
   'fill': 'black'
  }).call(dragging); 

setInterval(function(){
  playerChar.hit();
}, 50);


setInterval(function(){

  d3.selectAll('circle').transition().duration(1050).attr({
      'fill': function() {return getRandomColor(); },
      'cx': function(d){ return d.x = Math.random() * 480 + 10},
      'cy': function(d){ return d.y = Math.random() * 380 + 10}
  });
}, 1000);