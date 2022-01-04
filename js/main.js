import pageSections from "./modules/navigation.js";
let timeOut = 0;
let beforeScorll = window.pageYOffset;
let onHome = false;

function hideOnTime(delay) {
  $(".page__header").css("top", "0");

  clearTimeout(timeOut);
  //if in home section don't hide
  timeOut = setTimeout(function () {
    if (onHome) {
    } else {
      $(".page__header").css("top", "-5rem");
    }
  }, delay);
}

function hideOnScroll(afterScroll) {
  if (beforeScorll > afterScroll) {
    $(".page__header").css("top", "0");
  } else {
    $(".page__header").css("top", "-5rem");
  }
  beforeScorll = afterScroll;
}
// console.log(pageSections);
function setBehaviour() {
  pageSections.each(function () {
    let section = $(this);
    // console.log("section :", section);
    let sectionTop = $(this)[0].getBoundingClientRect().top;
    let thirdOfWindow = Math.floor(window.innerHeight / 3);

    if (sectionTop < thirdOfWindow && sectionTop >= -thirdOfWindow) {
      $(`#${section.data("nav")}-link`).addClass("active");
      if (section.data("nav") == "home") {
        onHome = true;
      } else {
        onHome = false;
      }
    } else {
      $(`#${section.data("nav")}-link`).removeClass("active");
    }
  });
}

export { hideOnTime, hideOnScroll, setBehaviour };
