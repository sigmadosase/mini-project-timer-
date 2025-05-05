

let endDate;
const input = document.querySelectorAll(".col input");

if (localStorage.getItem("endDate")) {
  endDate = new Date(localStorage.getItem("endDate"));
  document.getElementById("end-date").innerText = endDate.toLocaleString();
  document.getElementById("date-input").value = new Date(endDate).toISOString().slice(0,16);
}

function clock() {
  if (!endDate) return;
  const now = new Date();
  const diff = (endDate - now) / 1000;
  if (diff < 0) return;
  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor(diff / 3600) % 24;
  input[2].value = Math.floor(diff / 60) % 60;
  input[3].value = Math.floor(diff) % 60;
}

function startCountdown() {
  const inputDate = document.getElementById("date-input").value;
  if (!inputDate) {
    alert("Please select a date and time!");
    return;
  }
  endDate = new Date(inputDate);
  localStorage.setItem("endDate", endDate);
  document.getElementById("end-date").innerText = endDate.toLocaleString();
}

function toggleMode() {
  document.body.classList.toggle("light");
}

setInterval(clock, 1000);
