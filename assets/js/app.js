const yInput = document.getElementById("year");
const mInput = document.getElementById("month");
const dInput = document.getElementById("day");
const result = document.getElementById("result");

const date = new Date();
yInput.value = date.getFullYear();
mInput.value = date.getMonth() + 1;
dInput.value = date.getDate();

const findDay = () => {
  const y = Number(yInput.value.trim());
  const m = Number(mInput.value.trim());
  const d = Number(dInput.value.trim());

  // Error handling
  result.style.color = "red";
  if (isNaN(y)) {
    result.innerText = "Year is required!";
    return;
  }

  if (isNaN(m)) {
    result.innerText = "Month is required!";
    return;
  }

  if (isNaN(d)) {
    result.innerText = "Date is required!";
    return;
  }

  if (y < 0) {
    result.innerText = "Invalid Year!";
    return;
  }

  if (m < 1 || m > 12) {
    result.innerText = "Invalid Month!";
    return;
  }

  if (d < 1 || d > 31) {
    result.innerText = "Invalid Date!";
    return;
  }

  if (d > new Date(y, m, 0).getDate()) {
    result.innerText = "Invalid day for this month!";
    return;
  }

  const dateObj = new Date(y, m - 1, d);

  if (dateObj.getMonth() !== m - 1 || dateObj.getDate() !== d) {
    result.style.color = "red";
    result.innerText = "Invalid date!";
    return;
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayIndex = dateObj.getDay();
  result.style.color = "#202124";
  result.innerText = `The day is ${days[dayIndex]}`;
};
