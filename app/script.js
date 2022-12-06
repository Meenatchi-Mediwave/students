var students = [
  { name: "Ramya", std: "XII A", rank: "5", likes: [{}] },
  { name: "Booja", std: "X B", rank: "2", likes: [{}] },
];

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

  const h1 = document.createElement("h1");
  h1.innerHTML = student.name;

  div.appendChild(h1);

  const p = document.createElement("p");
  p.innerHTML = student.std;

  div.appendChild(p);

  const h2 = document.createElement("h2");
  h2.innerHTML = student.rank;

  div.appendChild(h2);

  return div;
}

function render() {
  clearStudentsContainer();
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
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
    name: name,
    std: std,
    rank: rank,
  };
  students.push(student);
  render();
  clearInputs();
}
function studentForm() {
  var form = document.querySelector("#newstudent-form");

  form.addEventListener("submit", handleSubmit);
}

function main() {
  render();
  studentForm();
}

main();
