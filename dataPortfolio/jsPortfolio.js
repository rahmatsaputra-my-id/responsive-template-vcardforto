// <div class="col-12 col-sm-6 col-xl-4 single-portfolio-area achievement">
//     <!-- <a href="https://i.imgur.com/o0WJLlR.jpg" -->
//     <a href="https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/93407270_103781971302715_5169299427738779648_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=_tXs5ld3Pb4AX9Dnvt_&_nc_ht=scontent.fcgk18-2.fna&oh=b7aacd68f9ac34c36161698521a718ed&oe=5EBA98F0"
//     class="img-url">
//         <img src="https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/93407270_103781971302715_5169299427738779648_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=_tXs5ld3Pb4AX9Dnvt_&_nc_ht=scontent.fcgk18-2.fna&oh=b7aacd68f9ac34c36161698521a718ed&oe=5EBA98F0" alt="">
//     </a>
    
//     <div class="portfolio-content">
//         <h5>KOMPRES</h5>
//         <a href="#" class="catagory">Certificate</a>
//         <a><br>notes</a>
        
//     </div>
// </div>



const appPortfolio = document.getElementById('rootPortfolio');

console.log("masuk portfolio");
const containerPortfolio1 = document.createElement('div');
containerPortfolio1.setAttribute('class', "row vcard-portfolio");

appPortfolio.appendChild(containerPortfolio1);

var request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:8000/v0/portfolio', true);

request.onload = function () {
	console.log("masuk jaringan portfolio : " + request.status);

	var isiDataPortfolio = JSON.parse(this.response);
	var code = isiDataPortfolio.meta.http_status;

	if (code >= 200 && code < 400) {
	    isiDataPortfolio.data.forEach(portfolioling => {

	    	const content1 = document.createElement('div');
	    	content1.setAttribute('class','col-12 col-sm-6 col-xl-4 single-portfolio-area achievement');

		    	const content11 = document.createElement('a');
		    	content11.setAttribute('href',portfolioling.urlToImage);
		    	content11.setAttribute('class',"img-url");

	    			const content111 = document.createElement('img');
	    			content111.setAttribute('src',portfolioling.urlToImage);

	    		const content12 = document.createElement('div');
	    		content12.setAttribute('class','portfolio-content');

	    			const content121 = document.createElement('h5');
	    			content121.setAttribute('style',"text-transform: uppercase;");
	    			content121.textContent = portfolioling.title;

	    			const content122 = document.createElement('a');
	    			content122.setAttribute('href','#');
	    			content122.setAttribute('class','catagory');
	    			content122.setAttribute('style',"text-transform: capitalize;");
	    			content122.textContent = portfolioling.subtitle;

	    			const content123 = document.createElement('p');
	    			content123.textContent = portfolioling.notes;

	    	containerPortfolio1.appendChild(content1);
	    		content1.appendChild(content11);
	    		content1.appendChild(content12);

	    			content11.appendChild(content111);

	    			content12.appendChild(content121);
	    			content12.appendChild(content122);
	    			content12.appendChild(content123);

	    });
	} else {
	    const errorMessagePortfolio = document.createElement('marquee');
	    errorMessagePortfolio.textContent = `Not Found Any Data! Portfolio`;
	    appPortfolio.appendChild(errorMessagePortfolio);
	}
}
request.send();