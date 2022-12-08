// var stringArray = ["1", "2", "3", "4", "5"];
// var numberArray = [];

// length = stringArray.length;

// for (var i = 0; i < length; i++) {
//   numberArray.push(parseInt(stringArray[i]));
//   console.log(numberArray);
// }
var students = [
  { id: "1670392277608", name: "Ramya", std: "XII A", rank: "5", likes: [{}] },
  { id: "1670392301915", name: "Booja", std: "X B", rank: "2", likes: [{}] },
];

function makeId() {
  return new Date().getTime();
}

function addToStudentsContainer(studentshtml) {
  var container = document.querySelector("#students-container");
  container.appendChild(studentshtml);
}

function clearStudentsContainer() {
  var container = document.querySelector("#students-container");
  container.innerHTML = "";
}

function makeStudentHTML(student) {
  const div = document.createElement("div");
  div.setAttribute("class", "border-margin");
  div.setAttribute("id", student.id);

  const h1 = document.createElement("h1");
  h1.innerHTML = student.name;

  div.appendChild(h1);

  const p = document.createElement("p");
  p.innerHTML = student.std;

  div.appendChild(p);

  const h2 = document.createElement("h2");
  h2.innerHTML = student.rank;

  div.appendChild(h2);

  const button = document.createElement("button");
  button.innerHTML = "Remove student";

  div.appendChild(button);

  button.addEventListener("click", function () {
    var newStudents = students.filter((s) => s.id != student.id);
    students = newStudents;
    render(students);
  });

  return div;
}

function render(studentsToRender) {
  clearStudentsContainer();
  var studentsArray = [];
  for (var i = 0; i < studentsToRender.length; i++) {
    if (studentsToRender[i].rank < 10) {
      studentsArray.push(studentsToRender[i]);
    }
    var student = studentsToRender[i];
    var html = makeStudentHTML(student);
    addToStudentsContainer(html);
  }
}

function clearInputs() {
  document.querySelector("#newstudent-name").value = "";
  document.querySelector("#newstudent-std").value = "";
  document.querySelector("#newstudent-rank").value = "";
}

function handleSubmit(e) {
  e.preventDefault();

  var name = document.querySelector("#newstudent-name").value;
  var std = document.querySelector("#newstudent-std").value;
  var rank = document.querySelector("#newstudent-rank").value;

  if (name == "" || std == "" || rank == "") {
    console.log("name or std or rank is empty");
    return;
  }

  var student = {
    id: makeId(),
    name: name,
    std: std,
    rank: rank,
  };
  students.push(student);
  render(students);
  clearInputs();
}
function studentForm() {
  var form = document.querySelector("#newstudent-form");

  form.addEventListener("submit", handleSubmit);
}

function handleSearch() {
  var search = document.querySelector("#student-search-input");
  search.addEventListener("keyup", function (e) {
    var term = search.value;
    var filteredStudents = students.filter((s) =>
      s.name.toLowerCase().includes(term)
    );
    render(filteredStudents);
  });
}
function rankSearch() {
  var search = document.querySelector("#student-search-input");
  search.addEventListener("keyup", function (e) {
    var term = search.value;
    var filteredStudents = students.filter((s) =>
      s.name.toLowerCase().includes(term, 0)
    );
    render(filteredStudents);
  });
}
// render(studentsToRender);
// var newArray = students.filter(function (s) {
//   return s.rank <= 10;
// });
// console.log(newArray);

function main() {
  render(students);
  studentForm();
  handleSearch();
  rankSearch();
}

main();
