const form = document.querySelector("#property-form");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const step3 = document.querySelector("#step-3");
const step4 = document.querySelector("#step-4");
const step5 = document.querySelector("#step-5");
const next1 = document.querySelector("#next-1");
const next2 = document.querySelector("#next-2");
const next3 = document.querySelector("#next-3");
const next4 = document.querySelector("#next-4");
const prev2 = document.querySelector("#prev-2");
const prev3 = document.querySelector("#prev-3");
const prev4 = document.querySelector("#prev-4");
const prev5 = document.querySelector("#prev-5");

next1.addEventListener("click", function() {
  if (address.value !== "") {
    step1.classList.add("hide");
    step2.classList.remove("hide");
  }
});

next2.addEventListener("click", function() {
  if (document.querySelector('input[name="category"]:checked')) {
    step2.classList.add("hide");
    step3.classList.remove("hide");
  }
});

next3.addEventListener("click", function() {
  if (document.querySelector('input[name="property-type"]:checked')) {
    const propertyType = document.querySelector('input[name="property-type"]:checked').value;
    if (propertyType === "room") {
      document.querySelector("#room-bathroom").classList.remove("hide");
    } else {
      document.querySelector("#bedrooms-bathrooms").classList.remove("hide");
    }
    step3.classList.add("hide");
    step4.classList.remove("hide");
  }
});

next4.addEventListener("click", function() {
  if ((document.querySelector('input[name="property-type"]:checked').value === "room" && document.querySelector('input[name="room-bathroom"]:checked'))
    || (document.querySelector('input[name="property-type"]:checked').value !== "room" && bedrooms.value !== "" && bathrooms.value !== "")) {
    step4.classList.add("hide");
    step5.classList.remove("hide");
  }
});


prev2.addEventListener("click", function() {
  step2.classList.add("hide");
  step1.classList.remove("hide");
});

prev3.addEventListener("click", function() {
  step3.classList.add("hide");
  step2.classList.remove("hide");
});

prev4.addEventListener("click", function() {
  step4.classList.add("hide");
  step3.classList.remove("hide");
});

prev5.addEventListener("click", function() {
  step5.classList.add("hide");
  step4.classList.remove("hide");
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  // save form data here
  form.reset();
  step5.classList.add("hide");
  // redirect to response.html page
  window.location.href = "response.html";
});
