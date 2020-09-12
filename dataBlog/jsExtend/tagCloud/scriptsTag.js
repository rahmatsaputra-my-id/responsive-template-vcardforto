// <div class="tagcloud">
//   <a href="#" class="tag-cloud-link">
//     fruits
//   </a>
//   <a href="#" class="tag-cloud-link">
//     tomatoe
//   </a>
//   <a href="#" class="tag-cloud-link">
//     mango
//   </a>
//   <a href="#" class="tag-cloud-link">
//     apple
//   </a>
//   <a href="#" class="tag-cloud-link">
//     carrots
//   </a>
//   <a href="#" class="tag-cloud-link">
//     orange
//   </a>
//   <a href="#" class="tag-cloud-link">
//     pepper
//   </a>
//   <a href="#" class="tag-cloud-link">
//     eggplant
//   </a>
// </div>



const appTag = document.getElementById('rootTagCloud');

console.log("masuk tag cloud");
const containerTag1 = document.createElement('div');
containerTag1.setAttribute('class', 'tagcloud');

appTag.appendChild(containerTag1);

var request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:8000/v0/tag', true);
// request.open('GET', 'https://staging2.activelearning-institute.com/v0/postings', true);
request.onload = function () {
  console.log("masuk jaringan tag cloud : " + request.status);

  // Begin accessing JSON data here
  var isiDataTag = JSON.parse(this.response);
  var code = isiDataTag.meta.http_status;
  console.log(isiDataTag);
  
  if (code >= 200 && code < 400) {
    isiDataTag.data.forEach(taging => {

      const contentTag1 = document.createElement('a');
      // contentTag1.setAttribute('href', '#');
      contentTag1.setAttribute('class', 'tag-cloud-link');
      contentTag1.textContent = taging.tag;

      containerTag1.appendChild(contentTag1);
          
    });
  } else {
    const errorMessageCategories = document.createElement('marquee');
    errorMessageCategories.textContent = `Not Found Any Data! Tag Cloud`;
    appTag.appendChild(errorMessageCategories);
  }
}

request.send();
