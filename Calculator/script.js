var ans = "";
var buttons = document.querySelectorAll("button");
var back = document.querySelector("#backId");
const input = document.querySelector("input");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      ans = eval(ans);
      input.value = ans;
    } else if (e.target.classList.value == "back") {
      input.value = input.value.slice(0, input.value.length - 1);
      ans = input.value;
    } else if (e.target.innerHTML == "C") {
      ans = "";
      input.value = ans;
    } else {
      ans += e.target.innerHTML;
      input.value = ans;
    }
  });
});

back.addEventListener("click", function () {
  input.value = input.value.slice(0, input.value.length - 1);
  ans = input.value;
});
