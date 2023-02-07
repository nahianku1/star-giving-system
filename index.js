let star = [...document.querySelectorAll(".material-symbols-outlined")];
let wrapper = document.querySelector(".wrapper");

function removeActives() {
  star.forEach((val) => {
    val.classList.remove("active");
  });
}
star.forEach((val, i, arr) => {
  val.addEventListener("mouseover", (e) => {
    arr.forEach((val) => {
      val.classList.remove("active");
    });

    for (let j = 0; j <= i; j++) {
      arr[j].classList.add("active");
    }
  });
  wrapper.addEventListener("mouseleave", removeActives);
  val.addEventListener("click", (e) => {
    console.log("clicked");
    let j = 0;
    for (; j <= i; j++) {
      arr[j].classList.add("active");
    }
    wrapper.removeEventListener("mouseleave", removeActives);
    alert(`You have given ${j} stars` )
  });
});
