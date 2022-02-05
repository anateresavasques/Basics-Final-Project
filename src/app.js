function place() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let continent = prompt("Which continent do you live in?");

  if (continent === "Europe" || continent === "europe") {
    alert(
      "Thank you, " +
        name +
        "! We'll be in touch by email, to collect more details about your order!"
    );
  } else {
    alert(
      "Sorry " +
        name +
        "! " +
        "We won't be available to deliver your order in your continent (YET!)"
    );
  }
}
let placeButton = document.querySelector(".place-button");
placeButton.addEventListener("click", place);
