/**
 * Created by tcartwright on 10/14/2016.
 */
var makeMatrix = function () {
  var matrix = [];
  var count = 0;
  while (matrix.length < 15) {
    for (var i=0; i<=3; i++) {
      var id = count * 10 + i;
      matrix.push(id);
    }
    count += 1;
  }
  return matrix
};
var getMap = function () {
  var matrix = makeMatrix();
  var map = {};
  for (var i = 1; i < matrix.length; i++) {
    map[matrix[i - 1]] = i.toString();
  }
  map[33] = "";
  return map
};
var getDirection = function () {
  // 0=up, 1=down, 2=left, 3=right
  return Math.floor(Math.random() % 4)
};
var makeGame = function (matrix, n) {
  // 2 * n is the number of swaps to make with the blank tile
  var n_swaps = 2 * n;
  for (var i=0; i<=n_swaps; i++ ) {
    var loc = matrix.indexOf(33); // index of blank tile
    var row = loc % 4;
    var col = Math.floor(loc / 4);
    var swapped = false;
    while (!swapped) {
      var dir = getDirection();
      switch (dir) {
        case 0:
          if (row - 1 >= 0) {
            var swap_idx = matrix.indexOf((row - 1) * 10 + col);
            var swap = matrix[swap_idx];
            matrix[swap_idx] = matrix[loc];
            matrix[loc] = swap;
            swapped = true;
          }
          break;
        case 1:
          if (row + 1 <= 3) {
            var swap_idx = matrix.indexOf((row + 1) * 10 + col);
            var swap = matrix[swap_idx];
            matrix[swap_idx] = matrix[loc];
            matrix[loc] = swap;
            swapped = true;
          }
          break;
        case 2:
          if (col - 1 >= 0) {
            var swap_idx = matrix.indexOf(row * 10 + (col - 1));
            var swap = matrix[swap_idx];
            matrix[swap_idx] = matrix[loc];
            matrix[loc] = swap;
            swapped = true;
          }
          break;
        case 3:
          if (col + 1 <= 3) {
            var swap_idx = matrix.indexOf(row * 10 + (col + 1));
            var swap = matrix[swap_idx];
            matrix[swap_idx] = matrix[loc];
            matrix[loc] = swap;
            swapped = true;
          }
          break;
      }
    }
  }
  return matrix
};
var printMatrix = function (matrix) {
  var map = getMap();
  for (var i=0; i < matrix.length; i++) {
    var item = matrix[i];
    var lab = map[matrix[i]];
    if (item < 4) {
      var button = document.getElementById("b0" + item.toString());
    }
    else {
      var button = document.getElementById("b" + item.toString());
    }
    button.innerHTML = lab;
  }
};
var resetGame = function () {
  var matrix = makeMatrix();
  matrix = makeGame(matrix, 2);
  printMatrix(matrix);
};
var swapTile = function (id) {
  var matrix = makeMatrix();
  var id_num = parseInt(id.slice(1));
  var adjs = [id_num - 10, id_num + 10, id_num - 1, id_num + 1];
  for (var i = 0; i < adjs.length; i++) {
    if (matrix.indexOf(adjs[i]) !== -1) {
      if (adjs[i] < 4) {
        var el = document.getElementById("b" + "0" + adjs[i].toString());
        if (el.innerHTML === "") {
          var clicked_el = document.getElementById(id);
          var clicked_n = clicked_el.innerHTML;
          el.innerHTML = clicked_n;
          clicked_el.innerHTML = "";
        }
      }
      else {
        var el = document.getElementById("b" + adjs[i].toString());
        if (el.innerHTML === "") {
          var clicked_el = document.getElementById(id);
          var clicked_n = clicked_el.innerHTML;
          el.innerHTML = clicked_n;
          clicked_el.innerHTML = "";
        }
      }
    }
  }
};