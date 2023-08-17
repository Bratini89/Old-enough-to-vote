function ageVote() {
  let voteable;
  let age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    voteable = "Input is not a number and can not";
  } else {
    voteable = age < 18 ? "Too young " : "old enough";
  }
  document.getElementById("demo").innerHTML = voteable + " to vote ";
}
