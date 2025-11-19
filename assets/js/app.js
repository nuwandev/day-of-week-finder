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

  const yO = y - Math.floor((14 - m) / 12);
  const x = Math.floor(yO + yO / 4 - yO / 100 + yO / 400);
  const mO = m + 12 * Math.floor((14 - m) / 12) - 2;
  const dO = (((d + x + Math.floor((31 * mO) / 12)) % 7) + 7) % 7;
  const dayIndex = ((dO % 7) + 7) % 7;

  const days = [
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
  ];

  result.style.color = "black";
  result.innerText = `Day of the week is ${days[dayIndex]}`;
};
