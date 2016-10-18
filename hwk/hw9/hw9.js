/**
 * Created by tcartwright on 10/18/2016.
 */
var answers = ["false", "true", "radius and temperature", "small mass", "galaxy", "age"];
var makeJSON = function () {
  var out = {"q1": [], "q2": [], "q3": [], "q4": [], "q5": [], "q6": []};
  // Q1
  if (document.getElementById("q1-opt1-l").classList.contains("is-checked")) {
    out["q1"].push("True");
  }
  if (document.getElementById("q1-opt2-l").classList.contains("is-checked")) {
    out["q1"].push("False");
  }
  // Q2
  if (document.getElementById("q2-opt1-l").classList.contains("is-checked")) {
    out["q2"].push("True");
  }
  if (document.getElementById("q2-opt2-l").classList.contains("is-checked")) {
    out["q2"].push("False");
  }
  // Q3
  for (var i = 1; i <= 4; i++) {
    if (document.getElementById("q3-opt" + i.toString() + "-l").classList.contains("is-checked")) {
      out["q3"].push(document.getElementById("q3-opt" + i.toString()).value);
    }
  }
  // Q4
  for (var i = 1; i <= 4; i++) {
    if (document.getElementById("q4-opt" + i.toString() + "-l").classList.contains("is-checked")) {
      out["q4"].push(document.getElementById("q4-opt" + i.toString()).value);
    }
  }
  // Q5
  out["q5"].push(document.getElementById("q5").value);
  // Q6
  out["q6"].push(document.getElementById("q6").value);
  return out
};
var gradeQuiz = function () {
  var q_answers = makeJSON();
  var q_grade = 0;
  for (var i = 0; i <= 5; i++) {
    var answer = answers[i];
    var q_num = i + 1;
    var q_answer = q_answers["q" + q_num];
    if (q_answer.length < 1) {
      window.alert("Please answer all questions before grading");
      return
    }
    if ((q_num === 5 || q_num === 6) && q_answer[0] === "") {
      window.alert("Please answer all questions before grading");
      return
    }
    if (q_answer.length === 1 && q_answer[0].toLowerCase() === answers[i]) {
      q_grade += 1;
    }
  }
  window.alert("Your grade is " + q_grade.toString() + " / 6")
};
var clearQuiz = function () {

};