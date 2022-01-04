export const pageSections = $("[data-nav]");
const navBarList = $("#navbar__list");
export const sectionNames = [];
const sectionIDs = [];
pageSections.each(function (section) {
  sectionNames.push($(this).attr("data-nav"));
  sectionIDs.push(section);
});

// function createNavigationBar() {
//   for (let i in sectionNames) {
//     let listElement = $("li");
//     let anchorElement = $("a");
//     anchorElement.on("click", function () {
//       event.preventDefault();
//       pageSections[i].scrollIntoView({ behavior: "smooth" });
//     });
//     anchorElement.attr("href", "#" + sectionIDs[i]);
//     // anchorElement.addClass("menu__link");
//     anchorElement.innerHTML = sectionNames[i];
//     listElement.append(anchorElement);
//     navBarList.append(listElement);
//   }
// }
// createNavigationBar();
// console.log(navBarList);

export default pageSections;
