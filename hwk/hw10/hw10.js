/**
 * Created by Tom Cartwright on 10/24/16.
 */
var nums = [];
for (var i = 0; i < 8; i++) {
  nums.add(i);
  nums.add(i);
}
var getRandIndexFromArray = function (array) {
  return Math.floor(Math.random() % array.length)
};
var get2DArray = function() {
  new_array = [[], [], [], []];
  for (var i = 0; i <= 3; i++){
    for (var j = 0; j <= 3, j++) {
      var rand_n = getRandIndexFromArray(nums);
      nums = nums.splice(rand_n, 1);
      new_array[j].push(rand_n);
    }
  }
  return new_array
};
