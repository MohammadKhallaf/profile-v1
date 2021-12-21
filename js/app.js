const projects =[]
const buildpage = ()=>{

  fetch("../res/json/portfolio.json",{
   headers:{
     'Content-Type':'application/json',
     'Access-Control-Allow-Origin':'*'
   }
  })
  .then((result)=>{
    return result.json()
  })
  .then((res)=>{
    projects.push(...res);

  buildProjectsPortfolio();
  })
  
  const buildProjectsPortfolio =()=>{
    projects.forEach((project,index)=>{
      if(!project.title) {
        return
      }
      let id = project.id;
      let img = project.image;
      let title = project.title;
      let description = project.description;
      let url = project.url;
      console.log(title)
      portfolioRow.append(createPortfolio(index,img,title,description,url))
    })
    
     
    
  }


let portfolioRow = $("#portfolio-row")
console.log(portfolioRow)

const createPortfolio = (index,img,title,dscrption,url="#")=>{
let template=`
<!-- project ${index} -->

<div class="col">
<div class="card shadow">
  <img
    class="card-img-top"
    src=${img}
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
        href=${url}
        target="_blank"
      >
        View
      </a>
    </div>
  </div>
</div>
</div>
            <!-- /project ${index} -->
`
return template;
}


}

$(document).ready(()=>{
  buildpage();
})