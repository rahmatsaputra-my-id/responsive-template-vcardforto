//gambaran

// <div class="block-21 mb-4 d-flex">
//   <a class="blog-img mr-4" style="background-image: url(dataBlog/images/image_1.jpg);"></a>
//   <div class="text">
//     <h3 class="heading-1">
//       <a href="#">Even the all-powerful Pointing has no control about the blind
//         texts
//       </a>
//     </h3>
//     <div class="meta">
//       <div>
//         <a href="#">
//           <span class="icon-calendar"></span>
//           April 09, 2019
//         </a>
//       </div>
//       <div>
//         <a href="#">
//           <span class="icon-person"></span>
//           Admin
//           </a>
//         </div>
//       <div>
//         <a href="#">
//           <span class="icon-chat"></span>
//           19
//         </a>
//       </div>
//     </div>
//   </div>
// </div>

const appRecent = document.getElementById('rootRecent');

console.log("masuk recent");
const indukRecent = document.createElement('div');
indukRecent.setAttribute('class', 'd-flex');
indukRecent.setAttribute('class', 'ftco-animate');

appRecent.appendChild(indukRecent);

var request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:8000/v0/recent', true);
// request.open('GET', 'https://staging2.activelearning-institute.com/v0/postings', true);
request.onload = function () {
  console.log("masuk jaringan recent : " + request.status);

  // Begin accessing JSON data here
  var isiDataRecent = JSON.parse(this.response);
  var code = isiDataRecent.meta.http_status;

  if (code >= 200 && code < 400) {
    isiDataRecent.data.forEach(recenting => {

      const containerRecent1 = document.createElement('div');
      containerRecent1.setAttribute('class', "block-21 mb-4 d-flex");

      const contentRecent1 = document.createElement('a');
      contentRecent1.setAttribute('class', "blog-img mr-4");
      contentRecent1.setAttribute('style', "background-image: url("+ recenting.urlToImage +");  background-size: 100% 75%");
      // contentRecent1.setAttribute('style', "background-image: url("+ recenting.urlToImage +");");

      const contentRecent2 = document.createElement('div');
      contentRecent2.setAttribute('class', 'text');

        const childContentRecent1 = document.createElement('h3');
        childContentRecent1.setAttribute('class', "heading-1");

          const nodeChildContentRecent = document.createElement('a');
          nodeChildContentRecent.setAttribute('href', '#');
          nodeChildContentRecent.textContent = recenting.title;


        const childContentRecent2 = document.createElement('div');
        childContentRecent2.setAttribute('class', 'meta');

          const nodeChildContentRecent2 = document.createElement('div');

            const grandNodeChildContentRecent2 = document.createElement('a');
            grandNodeChildContentRecent2.setAttribute('href', '#');
            var mentah = recenting.created_at;
            var date = mentah.slice(0,10);
            var tahun = date.slice(0,4);
            var bln = date.slice(5,7);
            var tanggal = date.slice(8,10);
              if (bln == "01"){
                var bulan = "Januari";
              }else if(bln == "02"){
                var bulan = "Februari";
              }else if(bln == "03"){
                var bulan = "Maret";
              }else if(bln == "04"){
                var bulan = "April";
              }else if(bln == "05"){
                var bulan = "Mei";
              }else if(bln == "06"){
                var bulan = "Juni";
              }else if(bln == "07"){
                var bulan = "July";
              }else if(bln == "08"){
                var bulan = "Agustus";
              }else if(bln == "09"){
                var bulan = "September";
              }else if(bln == "10"){
                var bulan = "Oktober";
              }else if(bln == "11"){
                var bulan = "November";
              }else if(bln == "12"){
                var bulan = "Desember";
              }
            grandNodeChildContentRecent2.textContent = bulan+" "+ tanggal+", " + tahun;

              const moreGrandChildContentRecent2 = document.createElement('span');
              moreGrandChildContentRecent2.setAttribute('class', "icon-calendar");

          const nodeChildContentRecent3 = document.createElement('div');

            const grandNodeChildContentRecent3 = document.createElement('a');
            grandNodeChildContentRecent3.setAttribute('href', 'about');

              const moreGrandChildContentRecent3 = document.createElement('span');
              moreGrandChildContentRecent3.textContent = recenting.author;
              moreGrandChildContentRecent3.setAttribute('class', "icon-person");

          const nodeChildContentRecent4 = document.createElement('div');

            const grandNodeChildContentRecent4 = document.createElement('a');
            grandNodeChildContentRecent4.setAttribute('href', '#');

              const moreGrandChildContentRecent4 = document.createElement('span');
              moreGrandChildContentRecent4.textContent = "0";
              moreGrandChildContentRecent4.setAttribute('class', "icon-chat");

      indukRecent.appendChild(containerRecent1);

        containerRecent1.appendChild(contentRecent1);
        containerRecent1.appendChild(contentRecent2);
          contentRecent2.appendChild(childContentRecent1);
            childContentRecent1.appendChild(nodeChildContentRecent)

          contentRecent2.appendChild(childContentRecent2);
            childContentRecent2.appendChild(nodeChildContentRecent2);
              nodeChildContentRecent2.appendChild(moreGrandChildContentRecent2);
              moreGrandChildContentRecent2.appendChild(grandNodeChildContentRecent2);
                // grandNodeChildContentRecent2.appendChild(moreGrandChildContentRecent2);

            childContentRecent2.appendChild(nodeChildContentRecent3);
              nodeChildContentRecent3.appendChild(grandNodeChildContentRecent3);
                grandNodeChildContentRecent3.appendChild(moreGrandChildContentRecent3);

            childContentRecent2.appendChild(nodeChildContentRecent4);
              nodeChildContentRecent4.appendChild(grandNodeChildContentRecent4);
                grandNodeChildContentRecent4.appendChild(moreGrandChildContentRecent4);

    });
  } else {
    const errorMessageCategories = document.createElement('marquee');
    errorMessageCategories.textContent = `Not Found Any Data! Recent`;
    appRecent.appendChild(errorMessageCategories);
  }
}

request.send();
