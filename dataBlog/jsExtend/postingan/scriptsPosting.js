// <div class="col-md-12 d-flex ftco-animate">
//   <div class="blog-entry align-self-stretch d-md-flex">
//     <a href="detail-post" class="block-20" style="background-image: url('dataBlog/images/image_1.jpg');">
//     </a>
//     <div class="text d-block pl-md-4">
//       <div class="meta mb-3">
//         <div><a href="#">July 20, 2019</a></div>
//         <div><a href="#">Admin</a></div>
//         <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
//       </div>
//       <h3 class="heading"><a href="detail-post">Even the all-powerful Pointing has no control about the
//           blind texts</a></h3>
//       <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
//         the blind texts.</p>
//       <p><a href="detail-post" class="btn btn-primary py-2 px-3">Read more</a></p>
//     </div>
//   </div>
// </div>



const app = document.getElementById('rootPosting');

console.log("masuk posting");

const container1 = document.createElement('div');;
container1.setAttribute('class', 'd-flex');
container1.setAttribute('class', 'ftco-animate');

app.appendChild(container1);

var request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:8000/v0/postings', true);
// request.open('GET', 'https://staging2.activelearning-institute.com/v0/postings', true);
request.onload = function () {
  console.log("masuk jaringan posting : " + request.status);

  // Begin accessing JSON data here
  var isiData = JSON.parse(this.response);
  var code = isiData.meta.http_status;
  console.log(isiData);

  // if (request.status >= 200 && request.status < 400) {
  if (code >= 200 && code < 400) {
    isiData.data.forEach(postingan => {

      const container2 = document.createElement('div');
      container2.setAttribute('class','blog-entry align-self-stretch d-md-flex');

      const gambar = document.createElement('a');
      gambar.setAttribute('href',"detail-post");
      gambar.setAttribute('class',"block-20");
      gambar.setAttribute('style',"background-image: url("+ postingan.urlToImage +");  background-size: 100% 75%");
      // gambar.setAttribute('style',"background-image: url("+ postingan.urlToImage +");");

      const container3 = document.createElement('div');
      container3.setAttribute('class','text d-block pl-md-4');

      const container31 = document.createElement('div');
      container31.setAttribute('class', 'meta mb-3');

      const container311 = document.createElement('div');

      const container3111 = document.createElement('a');
      container3111.setAttribute('href', '');
      var mentah = postingan.created_at;
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
      container3111.textContent = bulan+" "+ tanggal+", " + tahun;

      const container312 = document.createElement('div');

        const container3121 = document.createElement('a');
        container3121.setAttribute('href', 'about');
        container3121.textContent = postingan.author;

      const container313 = document.createElement('div');
      container313.setAttribute('class', 'meta-chat');

        const container3131 = document.createElement('a');
        container3131.setAttribute('href', '#');

          const container31311 =document.createElement('span');
          container31311.setAttribute('class', 'icon-chat');
          container31311.textContent = '0';

      const container32 = document.createElement('h3');
      container32.setAttribute('class', 'heading');

        const container321 = document.createElement('a');
        container321.setAttribute('href', 'detail-post');
        container321.textContent = postingan.title;

      const container33 = document.createElement('p');
      postingan.description = postingan.description.substring(0,190);
      container33.textContent =`${postingan.description}...`;

      const container34 = document.createElement('p');

        const container341 = document.createElement('a');

        container341.setAttribute('href', 'detail');
        container341.setAttribute('class', 'btn btn-primary py-2 px-3');
        container341.textContent = "Read More";
        container341.onload = function(){
          var getInput = postingan.id;
          // localStorage.setItem("loadID",getInput);
          sessionStorage.setItem("loadID",getInput);
        }


      // const container35 = document.createElement('div');
      // container35.setAttribute('class', 'pagination');

      //   const container351 = document.createElement('a');
      //   container351.setAttribute('href', '#');
      //   container351.textContent = '<<';

      //   const container352 = document.createElement('a');
      //   container352.setAttribute('href', '#');
      //   container352.textContent = "1";

      //   const container353 = document.createElement('a');
      //   container353.setAttribute('href', '#');
      //   container353.textContent = "1";

      //   const container354 = document.createElement('a');
      //   container354.setAttribute('href', '#');
      //   container354.textContent = ">>";



      container1.appendChild(container2);
        container2.appendChild(gambar);
        container2.appendChild(container3);
      
          container3.appendChild(container31);
            container31.appendChild(container311);
              container311.appendChild(container3111);

            container31.appendChild(container312);
              container312.appendChild(container3121);

            container31.appendChild(container313);
              container313.appendChild(container3131);
              container313.appendChild(container31311);

          container3.appendChild(container32);
            container32.appendChild(container321);

          container3.appendChild(container33);
          container3.appendChild(container34);
            container34.appendChild(container341);

          // container3.appendChild(container35);
          //   container35.appendChild(container351);
          //   container35.appendChild(container352);
          //   container35.appendChild(container353);
          //   container35.appendChild(container354);


    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Not Found Any Data! Posting`;
    app.appendChild(errorMessage);
  }
}

request.send();


