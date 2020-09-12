// <ul class="categories">
//   <li><a href="#">Vegetables <span>(12)</span></a></li>
//   <li><a href="#">Fruits <span>(22)</span></a></li>
//   <li><a href="#">Juice <span>(37)</span></a></li>
//   <li><a href="#">Dries <span>(42)</span></a></li>
// </ul>



const appCategories = document.getElementById('rootCategories');

console.log("masuk kategori");
const containerCategories1 = document.createElement('ul');
containerCategories1.setAttribute('class', 'categories');

appCategories.appendChild(containerCategories1);

var request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:8000/v0/categories', true);
// request.open('GET', 'https://staging2.activelearning-institute.com/v0/postings', true);
request.onload = function () {
  console.log("masuk jaringan kategori : " + request.status);

  // Begin accessing JSON data here
  var isiDataCategories = JSON.parse(this.response);
  var code = isiDataCategories.meta.http_status;

  console.log(isiDataCategories);
  
  if (code >= 200 && code < 400) {
    isiDataCategories.data.forEach(categoring => {
      const content1 = document.createElement('li');

      const content11 = document.createElement('a');
      content11.setAttribute('href','#');
      // content11.textContent = categoring.category_name;
      content11.setAttribute('style',"text-transform: capitalize;");
      content11.textContent = categoring.category;

      const content111 = document.createElement('span');
      content111.textContent = categoring.category_total;

      containerCategories1.appendChild(content1);
        content1.appendChild(content11);
          content11.appendChild(content111);
          
    });
  } else {
    const errorMessageCategories = document.createElement('marquee');
    errorMessageCategories.textContent = `Not Found Any Data! Kategori`;
    appCategories.appendChild(errorMessageCategories);
  }
}

request.send();
