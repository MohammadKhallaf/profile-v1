import { hideOnScroll, hideOnTime, setBehaviour } from "../js/main.js";
import { sectionNames } from "./modules/navigation.js";

const projects = [
  {
    id: 0,
    title: "E-commerce ITI",
    image: "./res/imgs/project-imgs/e-commerce-iti/iti-ecomm-1.png",
    description: "Pure HTML, CSS and JS.",
    url: "https://mohammadkhallaf.github.io/iti-ecommerce-project/store.html",
  },
  {
    id: 1,
    title: "Hosto Plans",
    image: "./res/imgs/project-imgs/iti-bootstrap-1/iti-bootstrap-1.png",
    description: "Bootstrap 5",
    url: "https://mohammadkhallaf.github.io/iti-bootstrap-page-1/",
  },
];

// console.log(sectionNames);
const buildpage = () => {
  /* a problem with git when fetching using it, so I simulated it */
  //#region
  // fetch("../res/json/portfolio.json",{
  //  headers:{
  //    'Content-Type':'application/json',
  //    'Access-Control-Allow-Origin':'*'
  //  }
  // })
  // .then((result)=>{
  //   return result.json()
  // })
  // .then((res)=>{
  //   projects.push(...res);
  // buildProjectsPortfolio();
  // })
  //#endregion
  let portfolioRow = $("#portfolio-row");

  const buildProjectsPortfolio = () => {
    projects.forEach((project, index) => {
      if (!project.title) {
        return;
      }
      let id = project.id;
      let img = project.image;
      let title = project.title;
      let description = project.description;
      let url = project.url;
      // console.log(title, img);
      portfolioRow.append(createPortfolio(index, img, title, description, url));
    });
  };

  const createPortfolio = (index, img, title, dscrption, url = "#") => {
    let template = `
<!-- project ${index} -->

<div class="col">
<div class="card shadow">
  <img
    class="card-img-top"
    src="${img}"
    alt=""
  />
  <div class="card-body bg-primary">
    <p class="card-title text-light">${title}</p>
    <p class="card-text">${dscrption}</p>
    <div
      class="d-flex justify-content-between align-items-center"
    >
      <a
        type="button"
        class="btn btn-md btn-outline-warning"
        href="${url}"
        target="_blank"
      >
        View
      </a>
    </div>
  </div>
</div>
</div>
            <!-- /project ${index} -->
`;
    return template;
  };

  buildProjectsPortfolio();
};

$(document).ready(() => {
  buildpage();
});

window.addEventListener("scroll", () => {
  setBehaviour();
  hideOnTime(2000);

  let afterScroll = window.pageYOffset;
  hideOnScroll(afterScroll);
});

// Show the Nav bar when hover at the top area
document.addEventListener("mousemove", function (e) {
  if (e.clientY <= 60) {
    hideOnTime(5000);
  }
});

$("#to-top").on("click", () => {
  $("html").animate({
    scrollTop:0
  },200)
});
