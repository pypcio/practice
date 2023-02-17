let version = "version-2";
console.log(`This is ${version}`);
p = document.getElementById("data");
let y = new Date().getFullYear();
let m = new Date().getMonth();
let d = new Date().getDate();
p.textContent = `${d}/${m + 1}/${y}`;
