/**
 * Created by Tom Cartwright on 10/24/16 for HW#10
 */
// Global variables
var nums = [];
for (var i = 0; i < 8; i++) {
  nums.add(i);
  nums.add(i);
}
// Gets random index from parsed array
var getRandIndexFromArray = function (array) {
  return Math.floor(Math.random() % array.length)
};
// Makes 2D array for game and returns it
var get2DArray = function() {
  new_array = [[], [], [], []];
  for (var i = 0; i <= 3; i++){
    for (var j = 0; j <= 3; j++) {
      var rand_n = getRandIndexFromArray(nums);
      nums = nums.splice(rand_n, 1);
      new_array[j].push(rand_n);
    }
  }
  return new_array
};
var showElement = function (id) {
  s_id = id.splice(1);
  var row = parseInt(s_id[0]);
  var col = parseInt(s_id[1]);
};