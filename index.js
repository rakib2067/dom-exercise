const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const body = document.querySelector("body");

h1.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

h1.addEventListener("mouseout", () => {
  body.style.backgroundColor = "white";
});

h2.addEventListener("mouseover", () => {
  h2.innerText = "Greeting";
});

body.addEventListener("keydown", (event) => {
  console.log(event.key);
  let p = document.createElement("p");
  p.innerText = event.key;
  body.append(p);
});

let a = document.querySelectorAll("a");

a.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("hello", item);
    document
      .querySelector(item.getAttribute("href"))
      .classList.toggle("clicked");
  });
});
