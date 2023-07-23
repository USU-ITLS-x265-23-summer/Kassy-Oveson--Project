
const MAX_GRADE_LEVEL = 9;
const today = new Date();
const dateString = today.toLocaleDateString();
document.getElementById("date").innerHTML = dateString;


function validateForm() {
  var gradeLevel = document.getElementById("grade-level").value;
  var teacherName = document.getElementById("teacher-name").value;
  var hotLunch = document.getElementById("hot-lunch").value;
  var hotLunchAllergy = document.getElementById("hot-lunch-allergy").value;
  var coldLunch = document.getElementById("cold-lunch").value;
  var coldLunchAllergy = document.getElementById("cold-lunch-allergy").value;
  var staffLunch = document.getElementById("staff-lunch").value;

  if (gradeLevel === "" || gradeLevel === null) {
    alert("Please enter the grade level.");
    return false;
  }

  if (gradeLevel > MAX_GRADE_LEVEL || gradeLevel < 1) {
    alert("Please enter a valid grade level.");
    return false;
  }

  if (teacherName === "" || teacherName === null) {
    alert("Please enter the teacher's name.");
    return false;
  }
  
  if (hotLunch === "" || hotLunch === null) {
    alert("Please enter the number of hot lunches.");
    return false;
  }

  if (hotLunchAllergy === "" || hotLunchAllergy === null) {
    alert("Please enter the number of hot lunches with allergies.");
    return false;
  }

  if (coldLunch === "" || coldLunch === null) {
    alert("Please enter the number of cold lunches.");
    return false;
  }

  if (coldLunchAllergy === "" || coldLunchAllergy === null) {
    alert("Please enter the number of cold lunches with allergies.");
    return false;
  }

  if (staffLunch === "" || staffLunch === null) {
    alert("Please enter the number of staff lunches.");
    return false;
  }

  return true;
}
