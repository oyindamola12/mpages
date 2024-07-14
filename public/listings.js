let map;
let map2;
let arrangeitems = document.getElementById('arrangeitems');
let lastDocument = null
let lastDocument2 = null
let lastDocument3 = null
let lastDocument4 = null
let appendDiv = document.getElementById('col-lg-5');
//var loadMore = document.getElementById('next-btn');
let container = document.getElementById("about-video");
let myListings = document.getElementById('myListings');
let inputIndustry =localStorage.getItem('industry');
let lat = JSON.parse(localStorage.getItem('lat'));
let lng = JSON.parse(localStorage.getItem('lng'));
let industry = document.getElementById('industry');
var storedUserId =localStorage.getItem('selectedUserId');
 var signedupAlready=  localStorage.getItem('signedup');
// var imagesId=JSON.parse(localStorage.getItem('imagesId'));
// var  inputName = document.getElementById('inputNameMyListings').value;
//  var  EnterReview = document.getElementById('EnterReview').value;
 var  reviewId = storedUserId
var userDataId =localStorage.getItem('userDataId');
var storedUserData = JSON.parse(localStorage.getItem('selectedUserData'));
// console.log(storedUserData.image1)
var userUid =localStorage.getItem('userId');
let currentPage = 1;
const itemsPerPage = 12;
//console.log(inputIndustry)
 const loading = document.getElementById('loading');
 const noloading = document.getElementById('noloading');
//  loading.style.display = 'block';
var getBusinessesData = true;
var searchwithin=false
var nextbtn= document.getElementById('next-btn');
// var nextbtn2= document.getElementById('next-btn2');
// var nextbtn3= document.getElementById('next-btn3');
// var nextbtn4= document.getElementById('next-btn4');

// console.log(userUid)
 function getUrlParameter(name) {
            name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
 };

var industrySearch = getUrlParameter('industryInput');
var locations = getUrlParameter('location');

// var latSearch = getUrlParameter('lat');
// var lngSearch = getUrlParameter('lng');

function getUrlParameter2(name) {
            name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function getUrlParameter3(name) {
            name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var industryInputview = getUrlParameter3('industryInputview');

function navigateToUserProfile(businessId, businesslistingId) {
        // Redirect to the user profile page with the user ID as a query parameter
        window.location.href = `/single-listing.html?id=${businessId}&listingid=${ businesslistingId}`;

}

 function toggleData() {
  if (industrySearch && locations) {
    fetch('https://www.mpageshub.com/businessSearch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ industry: industrySearch, location: locations }),
    })
      .then((response) => response.json())
      .then((items) => {
        nextbtn.style.display = items && items.length >= 12 ? 'block' : 'none';
        noloading.style.display = items.length === 0 ? 'block' : 'none';
        loading.style.display = 'none';

        items.forEach((business) => {
          const arrangeitems = document.createElement('a');
          arrangeitems.classList.add('arrange-items');

          const arrangepic = document.createElement('div');
          arrangepic.classList.add('arrange-pic');

          const arrangetext = document.createElement('div');
          arrangetext.classList.add('arrange-text');

          const tictext = document.createElement('div');
          tictext.textContent = business.industry;
          arrangepic.appendChild(tictext);
          tictext.classList.add('tic-text');

          const imgTag = document.createElement('img');
          imgTag.src =
            business.Images && business.Images.length > 0
              ? business.Images[0]
              : 'img/mPagesDesigns.png';
          imgTag.alt = 'Image';
          arrangepic.appendChild(imgTag);
          imgTag.classList.add('imgs');

          const titleTag = document.createElement('h5');
          titleTag.textContent = business.businessName.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
          arrangetext.appendChild(titleTag);

          if (signedupAlready) {
            const addressTag = document.createElement('span');
            addressTag.textContent = business.businessAddress.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
            arrangetext.appendChild(addressTag);
          }

          const subtitleTag = document.createElement('p');
          subtitleTag.textContent = `${business.openingtime} - ${business.closingtime}`;
          arrangetext.appendChild(subtitleTag);

          const openingTimeTag = document.createElement('div');
          openingTimeTag.textContent = `Opens tomorrow at ${business.openingtime}`;
          openingTimeTag.classList.add('open');
          arrangetext.appendChild(openingTimeTag);

          arrangeitems.appendChild(arrangepic);
          arrangeitems.appendChild(arrangetext);
          appendDiv.appendChild(arrangeitems);

          appendDiv.addEventListener('click', () => {
            localStorage.removeItem('selectedUserId');
            localStorage.setItem('selectedUserData', JSON.stringify(business));
            localStorage.setItem('userDataId', JSON.stringify(business.userid));
            localStorage.setItem('selectedUserId', business.id);
            localStorage.setItem('listingId', business.listingId);
            localStorage.setItem('owner', business.userid);
            navigateToUserProfile(business.userid, business.listingId);
          });
        });
      })
      .catch((error) => {
        console.error('Error updating value:', error);
      });
  }

  if (industryInputview) {
    fetch('https://www.mpageshub.com/businessSearch2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ industry: industryInputview }),
    })
      .then((response) => response.json())
      .then((items) => {
        nextbtn.style.display = items && items.length >= 12 ? 'block' : 'none';
        noloading.style.display = items.length === 0 ? 'block' : 'none';
        loading.style.display = 'none';

        items.forEach((business) => {
          const arrangeitems = document.createElement('a');
          arrangeitems.classList.add('arrange-items');

          const arrangepic = document.createElement('div');
          arrangepic.classList.add('arrange-pic');

          const arrangetext = document.createElement('div');
          arrangetext.classList.add('arrange-text');

          const tictext = document.createElement('div');
          tictext.textContent = business.data.industry;
          arrangepic.appendChild(tictext);
          tictext.classList.add('tic-text');

          const imgTag = document.createElement('img');
          imgTag.src =
            business.data.Images && business.data.Images.length > 0
              ? business.data.Images[0]
              : 'img/mPagesDesigns.png';
          imgTag.alt = 'Image';
          arrangepic.appendChild(imgTag);
          imgTag.classList.add('imgs');

          const titleTag = document.createElement('h5');
          titleTag.textContent = business.data.businessName.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
          arrangetext.appendChild(titleTag);

          if (signedupAlready) {
            const addressTag = document.createElement('span');
            addressTag.textContent = business.data.businessAddress.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
            arrangetext.appendChild(addressTag);
          }

          const subtitleTag = document.createElement('p');
          subtitleTag.textContent = `${business.data.openingtime} - ${business.data.closingtime}`;
          arrangetext.appendChild(subtitleTag);

          const openingTimeTag = document.createElement('div');
          openingTimeTag.textContent = `Opens tomorrow at ${business.data.openingtime}`;
          openingTimeTag.classList.add('open');
          arrangetext.appendChild(openingTimeTag);

          arrangeitems.appendChild(arrangepic);
          arrangeitems.appendChild(arrangetext);
          appendDiv.appendChild(arrangeitems);

          appendDiv.addEventListener('click', () => {
            localStorage.removeItem('selectedUserId');
            localStorage.setItem('selectedUserData', JSON.stringify(business.data));
            localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
            localStorage.setItem('selectedUserId', business.id);
            localStorage.setItem('listingId', business.data.listingId);
            localStorage.setItem('owner', business.data.userid);
            navigateToUserProfile(business.data.userid, business.data.listingId);
          });
        });
      })
      .catch((error) => {
        console.error('Error updating value:', error);
      });
  }
}

//  async function searchbyLocationParams (){
//   arrangeitems.innerHTML = '';
//   const keywords = locations.toLowerCase().split(' ').join(' ').replace(/\,/g, '');
//     const ref =db.collection('BusinessLists').where('industry', '==', industrySearch ).orderBy('createdAt').startAfter(lastDocument2||0).limit(12);
// const data = await ref.get();
//      loading.style.display = data ? 'none' : 'block';
//      if(loading.style.display === 'block'){
//   // nextbtn2 .style.display = 'none';
//      nextbtn.style.display='none';
//   // nextbtn3.style.display='none';
//   // nextbtn4.style.display='none';

// }
//   const keywordArray = keywords.split(' ');
// let template ='';
// //nextbtn2.style.display = data.length >= 12 ? 'block' : 'none';
//   noloading.style.display = data.length === 0 ? 'block' : 'none';
//   nextbtn.style.display='none';
//   // nextbtn3.style.display='none';
//   // nextbtn4.style.display='none';

// data.docs.forEach(doc =>{

//   const businesses = doc.data();



//     //const address = businesses.businessAddress.toLowerCase();


//       // Check if any keyword is included in the address
//       const matches = keywordArray.some(keyword => address.includes(keyword));
//       if (matches) {
//           template += `
//   <a class ="arrange-items">
//   <div class="arrange-pic">
//   <div class="tic-text">${businesses.industry}</div>

// <img src="${businesses.Images && businesses.Images.length > 0 ?businesses.Images[0]:'img/mPagesDesigns.png'}" class="imgs">
//   </div>


// <div class= "arrange-text">
//   <h5>
// ${businesses.businessName.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}
//   </h5>

//   <span>
// ${signedupAlready? businesses.businessAddress.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()):null}
//   </span>
//   <p>${businesses.openingtime+ " - " + businesses.closingtime}</p>

//   <div class="open">${'Opens tomorrow at ' + businesses.openingtime}</div>
// </div>

//   </a>`
//       }
//  arrangeitems.innerHTML += template;
//     arrangeitems.addEventListener('click', () => {
//         localStorage.removeItem('selectedUserId')
//         localStorage.setItem('selectedUserData', JSON.stringify(businesses));
//         localStorage.setItem('userDataId', JSON.stringify(businesses.userid));
//         localStorage.setItem('selectedUserId', businesses.id);
//         localStorage.setItem('listingId', businesses.listingId);
//         localStorage.setItem('owner', businesses.userid);
//         navigateToUserProfile(businesses.userid,businesses.listingId);
//       });

//       lastDocument2 = data.docs[data.docs.length-1]

//       if(data.empty){
// nextbtn2.removeEventListener('click', handleLoadMore2 )
//       }
// })
// }

//  async function searchbyLocationParams2 (){
//  arrangeitems.innerHTML = '';
//  const ref =db.collection('BusinessLists').where('industry', '==', industryInputview ).orderBy('createdAt').startAfter(lastDocument3||0).limit(12);
// const data = await ref.get();
//  loading.style.display = data ? 'none' : 'block';
//  if(loading.style.display === 'block'){
//    nextbtn3.style.display = 'none';
//      nextbtn.style.display='none';
//   nextbtn2.style.display='none';
//   nextbtn4.style.display='none';
// }
// nextbtn3.style.display =  data.length >= 12 ? 'block' : 'none';
// noloading.style.display = data.length === 0 ? 'block' : 'none';
// let template ='';
//   nextbtn.style.display='none';
//   nextbtn2.style.display='none';
//   nextbtn4.style.display='none';
// data.docs.forEach(doc =>{
//   const businesses = doc.data();



//   template += `
//   <a class ="arrange-items">
//   <div class="arrange-pic">
//   <div class="tic-text">${businesses.industry}</div>

// <img src="${businesses.Images && businesses.Images.length > 0 ?businesses.Images[0]:'img/mPagesDesigns.png'}" class="imgs">
//   </div>


// <div class= "arrange-text">
//   <h5>
// ${businesses.businessName.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}
//   </h5>

//   <span>
// ${signedupAlready? businesses.businessAddress.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()):null}
//   </span>
//   <p>${businesses.openingtime+ " - " + businesses.closingtime}</p>

//   <div class="open">${'Opens tomorrow at ' + businesses.openingtime}</div>
// </div>

//   </a>`



// })


//  arrangeitems.innerHTML += template;
//        arrangeitems.addEventListener('click', () => {
//         localStorage.removeItem('selectedUserId')
//         localStorage.setItem('selectedUserData', JSON.stringify(businesses));
//         localStorage.setItem('userDataId', JSON.stringify(businesses.userid));
//         localStorage.setItem('selectedUserId', businesses.id);
//         localStorage.setItem('listingId', businesses.listingId);
//         localStorage.setItem('owner', businesses.userid);
//         navigateToUserProfile(businesses.userid,businesses.listingId);
//       });

//       lastDocument3 = data.docs[data.docs.length-1]

//       if(data.empty){
// nextbtn3.removeEventListener('click', handleLoadMore3 )
//       }
// }

//  async function toggleData2() {
// if (industrySearch && locations) {
// searchbyLocationParams()
// }

// if (industryInputview) {
// searchbyLocationParams2()
//   }
// }

//   function toggleData2(){

// if (industrySearch&& latSearch&&lngSearch  ){


//  fetch('https://www.mpageshub.com/searchBusinesses', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ industry:industrySearch,lat:latSearch ,lng:lngSearch})
//   })
//   .then(response => response.json())
//   .then(items => {
// if(items&&items.length >=12){
// nextbtn.style.display = 'block';
// }else{
//   nextbtn.style.display = 'none';
// }
// if(items.length === 0){
// noloading.style.display = 'block';
// }
// loading.style.display = 'none';


//    for (let i = 0; i < items.length; i++) {

//       const business = items[i];
//       // console.log(business.data.email)

// // const filteredArray = items.filter(obj => obj.data.industry=== 'baker');
// // console.log( filteredArray)

//    const arrangeitems= document.createElement('a');

//       arrangeitems.classList.add('arrange-items');

//       const arrangepic= document.createElement('div');
//       arrangepic.classList.add('arrange-pic');

//         const arrangetext= document.createElement('div');
//        arrangetext.classList.add('arrange-text');

//       //  const rating= document.createElement('div');
//       //  rating.textContent = business.data.rating;
//       //   arrangepic.appendChild(rating);
//       //   rating.classList.add('rating');

//        const tictext= document.createElement('div');
//        tictext.textContent = business.data.industry;
//         arrangepic.appendChild(tictext);
//         tictext.classList.add('tic-text');


//        const imgTag = document.createElement('img');
//       imgTag.src =business.data.Images && business.data.Images.length > 0 ?business.data.Images[0]:'img/mPagesDesigns.png' // Assuming you have an 'imageUrl' property in your data
//         imgTag.alt = 'Image'; // Provide alternative text for accessibility
//         arrangepic.appendChild(imgTag);
//         imgTag.classList.add('imgs');


//         // Create and append h5 tag for the title
//         const titleTag = document.createElement('h5');
//         titleTag.textContent = business.data.businessName;
//         arrangetext.appendChild(titleTag);

//         // Create and append span tag for the address

//        if (signedupAlready) {
//  const addressTag = document.createElement('span');
//         addressTag.textContent = business.data.businessAddress;
//        arrangetext.appendChild(addressTag);
//    }


//         // Create and append p tag for the subtitle
//         const subtitleTag = document.createElement('p');
//         subtitleTag.textContent =business.data.openingtime+ " - " + business.data.closingtime;
//         arrangetext.appendChild(subtitleTag);

//         // Create and append button tag for the opening time
//         const openingTimeTag = document.createElement('div');
//         openingTimeTag.textContent = 'Opens tomorrow at ' + business.data.openingtime;
//         openingTimeTag.classList.add('open');
//         arrangetext.appendChild(openingTimeTag);
//         arrangeitems.appendChild(arrangepic)
//         arrangeitems.appendChild(arrangetext)
//         appendDiv.appendChild(arrangeitems)

//         arrangeitems.addEventListener('click', () => {
//         localStorage.removeItem('selectedUserId')
//         localStorage.setItem('selectedUserData', JSON.stringify(business.data));
//         localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
//         localStorage.setItem('selectedUserId', business.id);
//         localStorage.setItem('listingId', business.data.listingId);
//         localStorage.setItem('owner', business.data.userid);


//    navigateToUserProfile(business.data.userid,business.data.listingId);


//       });


//   }

//   })
//   .catch(error => {
//     console.error('Error updating value:', error);
//   });
//   }

// if ( industryInputview ){


//  fetch('https://www.mpageshub.com/businessSearch2', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ industry:industryInputview })
//   })
//   .then(response => response.json())
//   .then(items => {
// if(items&&items.length >=12){
// nextbtn.style.display = 'block';
// }else{
//   nextbtn.style.display = 'none';
// }
// if(items.length === 0){
// noloading.style.display = 'block';
// }
// loading.style.display = 'none';


//    for (let i = 0; i < items.length; i++) {

//       const business = items[i];

// // const filteredArray = items.filter(obj => obj.data.industry=== 'baker');
// // console.log( filteredArray)

//    const arrangeitems= document.createElement('a');

//       arrangeitems.classList.add('arrange-items');

//       const arrangepic= document.createElement('div');
//       arrangepic.classList.add('arrange-pic');

//         const arrangetext= document.createElement('div');
//        arrangetext.classList.add('arrange-text');

//        const tictext= document.createElement('div');
//        tictext.textContent = business.data.industry;
//         arrangepic.appendChild(tictext);
//         tictext.classList.add('tic-text');

//         const imgTag = document.createElement('img');
//         imgTag.src =business.data.Images && business.data.Images.length > 0 ?business.data.Images[0]:'img/mPagesDesigns.png'// Assuming you have an 'imageUrl' property in your data
//         imgTag.alt = 'Image'; // Provide alternative text for accessibility
//         arrangepic.appendChild(imgTag);
//         imgTag.classList.add('imgs');


//         // Create and append h5 tag for the title
//         const titleTag = document.createElement('h5');
//         titleTag.textContent = business.data.businessName;
//         arrangetext.appendChild(titleTag);

//         // Create and append span tag for the address


//        if (signedupAlready) {
//  const addressTag = document.createElement('span');
//         addressTag.textContent = business.data.businessAddress;
//        arrangetext.appendChild(addressTag);
//    }

//    // Create and append p tag for the subtitle
//         const subtitleTag = document.createElement('p');
//         subtitleTag.textContent =business.data.openingtime+ " - " + business.data.closingtime;
//         arrangetext.appendChild(subtitleTag);

//         // Create and append button tag for the opening time
//         const openingTimeTag = document.createElement('div');
//         openingTimeTag.textContent = 'Opens tomorrow at ' + business.data.openingtime;
//         openingTimeTag.classList.add('open');
//         arrangetext.appendChild(openingTimeTag);
//         arrangeitems.appendChild(arrangepic)
//         arrangeitems.appendChild(arrangetext)
//         appendDiv.appendChild(arrangeitems)

//         arrangeitems.addEventListener('click', () => {
//         localStorage.removeItem('selectedUserId')
//         localStorage.setItem('selectedUserData', JSON.stringify(business.data));
//         localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
//         localStorage.setItem('selectedUserId', business.id);
//         localStorage.setItem('listingId', business.data.listingId);
//         localStorage.setItem('owner', business.data.userid);
//         navigateToUserProfile(business.data.userid,business.data.listingId);

//       });

//   }

//   })
//   .catch(error => {
//     console.error('Error updating value:', error);
//   });
//   }

//   }

function noparams(){
 fetch('https://www.mpageshub.com/getBusinesses')
    .then(response => response.json())
    .then(items=> {

if(items&&items.length >=12){
nextbtn.style.display = 'block';
}else{
  nextbtn.style.display = 'none';
}
if(items.length === 0){
noloading.style.display = 'block';
}
loading.style.display = 'none';

if(loading.style.display === 'block'){
   nextbtn.style.display = 'none';
}

 // Populate the list in the HTML with specified tags
//    var industry = document.querySelector('.select-styled2').textContent;
    for (let i = 0; i < items.length; i++) {

      const business = items[i];

// console.log( business.data.Images[1])
// const filteredArray = items.filter(obj => obj.data.industry=== 'baker');
// console.log( filteredArray)

    const images = JSON.stringify(business.data.Images);
// Construct the URL with the serialized array as a query parameter

    const arrangeitems= document.createElement('a');

      arrangeitems.classList.add('arrange-items');

      const arrangepic= document.createElement('div');
      arrangepic.classList.add('arrange-pic');

        const arrangetext= document.createElement('div');
       arrangetext.classList.add('arrange-text');

      //  const rating= document.createElement('div');
      //  rating.textContent = business.data.rating;
      //   arrangepic.appendChild(rating);
      //   rating.classList.add('rating');

       const tictext= document.createElement('div');
       tictext.textContent = business.data.industry;
        arrangepic.appendChild(tictext);
        tictext.classList.add('tic-text');
        const imgTag = document.createElement('img');
        imgTag.src =business.data.Images && business.data.Images.length > 0 ?business.data.Images[0]:'img/mPagesDesigns.png'
       // Assuming you have an 'imageUrl' property in your data
        imgTag.alt = 'Image'; // Provide alternative text for accessibility
        arrangepic.appendChild(imgTag);
        imgTag.classList.add('imgs');


        // Create and append h5 tag for the title
        const titleTag = document.createElement('h5');
        titleTag.textContent = business.data.businessName.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        arrangetext.appendChild(titleTag);

        // Create and append span tag for the address v

       if (signedupAlready) {
        const addressTag = document.createElement('span');
        addressTag.textContent = business.data.businessAddress.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        arrangetext.appendChild(addressTag);
   }


        // Create and append p tag for the subtitle
        const subtitleTag = document.createElement('p');
        subtitleTag.textContent =business.data.openingtime+ " - " + business.data.closingtime;
        arrangetext.appendChild(subtitleTag);

        // Create and append button tag for the opening time
        const openingTimeTag = document.createElement('div');
        openingTimeTag.textContent = 'Opens tomorrow at ' + business.data.openingtime;
        openingTimeTag.classList.add('open');
        arrangetext.appendChild(openingTimeTag);
        arrangeitems.appendChild(arrangepic)
        arrangeitems.appendChild(arrangetext)
        appendDiv.appendChild(arrangeitems)
        appendDiv.addEventListener('click', () => {
        localStorage.removeItem('selectedUserId')
        localStorage.setItem('selectedUserData', JSON.stringify(business.data));
        localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
        localStorage.setItem('selectedUserId', business.id);
        localStorage.setItem('listingId', business.data.listingId);
        localStorage.setItem('owner', business.data.userid);
        navigateToUserProfile(business.data.userid,business.data.listingId);

      });

  }

    })
    .catch(error => {
      console.log('Error fetching items:', error);
    });

}

// async function noparams2(){
//  nextbtn.style.display = 'none'
//   // nextbtn2.style.display='none';
//   // nextbtn3.style.display='none';
//   // nextbtn4.style.display='none';
// const ref =db.collection('BusinessLists').orderBy('createdAt').startAfter(lastDocument||0).limit(12);
// const data = await ref.get();
//  loading.style.display = data ? 'none' : 'block';
//    if(data&&data.length >=12){
// nextbtn.style.display = 'block';
// }else{
//   nextbtn.style.display = 'none';
// }
// if(data.length === 0){
// noloading.style.display = 'block';
//    nextbtn.style.display = 'none';
//   //  nextbtn2.style.display='none';
//   // nextbtn3.style.display='none';
//   // nextbtn4.style.display='none';
// }
// if(loading.style.display === 'block'){
//    nextbtn.style.display = 'none';
//   //  nextbtn2.style.display='none';
//   // nextbtn3.style.display='none';
//   // nextbtn4.style.display='none';

// }

// let template ='';
// data.docs.forEach(doc =>{
//   const businesses = doc.data();


// // loading.style.display = 'none';



//   template += `

//   <div class="arrange-pic">
//   <div class="tic-text">${businesses.industry}</div>

// <img src="${businesses.Images && businesses.Images.length > 0 ?businesses.Images[0]:'img/mPagesDesigns.png'}" class="imgs">
//   </div>


// <div class= "arrange-text">
//   <h5>
// ${businesses.businessName.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}
//   </h5>

//   <span>
// ${signedupAlready? businesses.businessAddress.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()):null}
//   </span>
//   <p>${businesses.openingtime+ " - " + businesses.closingtime}</p>

//   <div class="open">${'Opens tomorrow at ' + businesses.openingtime}</div>
// </div>

// `



// })

//  arrangeitems.innerHTML += template;
//        arrangeitems.addEventListener('click', () => {
//         localStorage.removeItem('selectedUserId')
//         localStorage.setItem('selectedUserData', JSON.stringify(businesses));
//         localStorage.setItem('userDataId', JSON.stringify(businesses.userid));
//         localStorage.setItem('selectedUserId', businesses.id);
//         localStorage.setItem('listingId', businesses.listingId);
//         localStorage.setItem('owner', businesses.userid);
//         navigateToUserProfile(businesses.userid,businesses.listingId);
//       });

//       lastDocument = data.docs[data.docs.length-1]

//       if(data.empty){
// nextbtn.removeEventListener('click', handleLoadMore )
//       }
// }

//  async function fetchDatas2() {
//  var industry= document.getElementById('searchIndustryInput').textContent;
//  var location = document.getElementById('inputSuburb').value;
//   const keywords = location.toLowerCase().split(' ').join(' ').replace(/\,/g, '');
// if( industry === "Choose Industry" || location === null){
// return alert('Choose Industry and enter a location')
// }else{
//  arrangeitems.innerHTML = '';

//   loading.style.display = 'block';

//     const ref =db.collection('BusinessLists').where('industry', '==', industry ).orderBy('createdAt').startAfter(lastDocument4||0).limit(12);
// const data = await ref.get();
//      loading.style.display = data ? 'none' : 'block';
//       nextbtn.style.display='none';
//   //nextbtn2.style.display='none';
//   //nextbtn3.style.display='none';
//      if(loading.style.display === 'block'){
//    nextbtn.style.display = 'none';
//   //    nextbtn2.style.display='none';
//   // nextbtn3.style.display='none';
//   // nextbtn4.style.display='none';
// }
//   //const address = businesses.businessAddress.toLowerCase();
// //nextbtn4.style.display =  data.length >= 12 ? 'block' : 'none';
//         noloading.style.display = data.length === 0 ? 'block' : 'none';

//   const keywordArray = keywords.split(' ');
// let template ='';
// data.docs.forEach(doc =>{

//   const businesses = doc.data();



//       // Check if any keyword is included in the address
//       const matches = keywordArray.some(keyword => address.includes(keyword));
//       if (matches) {
//           template += `
//   <a class ="arrange-items">
//   <div class="arrange-pic">
//   <div class="tic-text">${businesses.industry}</div>

// <img src="${businesses.Images && businesses.Images.length > 0 ?businesses.Images[0]:'img/mPagesDesigns.png'}" class="imgs">
//   </div>


// <div class= "arrange-text">
//   <h5>
// ${businesses.businessName.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}
//   </h5>

//   <span>
// ${signedupAlready? businesses.businessAddress.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()):null}
//   </span>
//   <p>${businesses.openingtime+ " - " + businesses.closingtime}</p>

//   <div class="open">${'Opens tomorrow at ' + businesses.openingtime}</div>
// </div>

//   </a>`
//       }
// // loading.style.display = 'none';



// })

//   arrangeitems.innerHTML += template;
//       mostSearch(industry)
//        arrangeitems.addEventListener('click', () => {
//         localStorage.removeItem('selectedUserId')
//         localStorage.setItem('selectedUserData', JSON.stringify(businesses));
//         localStorage.setItem('userDataId', JSON.stringify(businesses.userid));
//         localStorage.setItem('selectedUserId', businesses.id);
//         localStorage.setItem('listingId', businesses.listingId);
//         localStorage.setItem('owner', businesses.userid);
//         navigateToUserProfile(businesses.userid,businesses.listingId);


//       });

//       lastDocument4 = data.docs[data.docs.length-1]

//       if(data.empty){
// //nextbtn4.removeEventListener('click', handleLoadMore4 )
//       }


// }


// }

//const loadMore = document.getElementById('loadMore');

// const handleLoadMore =()=>{
// noparams2()
// }

// const handleLoadMore2 =()=>{
// searchbyLocationParams()
// }

// const handleLoadMore3 =()=>{
// searchbyLocationParams2()
// }

// const handleLoadMore4 =()=>{
// fetchDatas2()
// }




//nextbtn.addEventListener('click', handleLoadMore)
// nextbtn2.addEventListener('click', handleLoadMore2)
// nextbtn3.addEventListener('click', handleLoadMore3)
// nextbtn4.addEventListener('click', handleLoadMore4)


if (!window.location.search) {
     noparams()
} else {
    // Parameters found in the URL
  toggleData();
}

 function fetchCoordinates() {
        fetch('https://www.mpageshub.com/getBusinesses')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(coordinates => {
                initMap(coordinates);
            })
            .catch(error => {
                console.error('Error fetching coordinates:', error);
            });
    }

 function addMarkers(coordinates) {
        coordinates.forEach(coord => {
            const location = new google.maps.LatLng(coord.data.latitude, coord.data.longitude);
            const marker = new google.maps.Marker({
                position: location,
                map: map,

                title: coord.data.businessAddress
            });
        });
    }
async function getUsers() {
      const response = await fetch('/getCoordinates');
      const users = await response.json();
      return users;
    }

     var mlwStyles =[
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                          { visibility: "off" }
                    ]
                }
            ];

async function initMap() {
    const users = await getUsers();

      // Create a LatLngBounds object to store the bounds of all markers
      const bounds = new google.maps.LatLngBounds();
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 0,
    lng:0
    },
    zoom: 2,
    mapTypeControl: false,
     styles: mlwStyles
  });

  const input = document.getElementById('inputSuburb');
  const options = {
    fields: ["address_components", "geometry", "types", "name"],
    strictBounds: true,

  };

 users.forEach(user => {
        const position = { lat: user.latitude, lng: user.longitude };
        // Extend the bounds to include the marker's position
        bounds.extend(position);
        const marker = new google.maps.Marker({
          position: position,
          map: map,
          title: user.name
        });
      });

      // Fit the map to the bounds
  map.fitBounds(bounds);
  // autocomplete = new google.maps.places.Autocomplete(input, options);

  // autocomplete.addListener('place_changed', function() {
  //   const place = autocomplete.getPlace();
  //   console.log(place);
  // });

  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");
  infowindow.setContent(infowindowContent);

  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29),
  });

  autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);

    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent = place.formatted_address;
    infowindow.open(map, marker);
  });
   map.fitBounds(bounds);
}

window.initMap = initMap;

window.onload = function() {
            initAutocomplete();
        };


  //  async function initMap() {
  //     const users = await getUsers();

  //     // Create a LatLngBounds object to store the bounds of all markers
  //     const bounds = new google.maps.LatLngBounds();

  //     const map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 2,
  //       center: { lat: 0, lng: 0 } ,// Center of the map
  //       styles: mlwStyles
  //     });

  //     users.forEach(user => {
  //       const position = { lat: user.latitude, lng: user.longitude };
  //       // Extend the bounds to include the marker's position
  //       bounds.extend(position);
  //       const marker = new google.maps.Marker({
  //         position: position,
  //         map: map,
  //         title: user.name
  //       });
  //     });

  //     // Fit the map to the bounds
  //     map.fitBounds(bounds);
  //   }


if (signedupAlready) {

myListings.href = "my-listings.html"
   } else {
myListings.href = "no-listings.html"
    }




 async function fetchDatas() {
 var industry= document.getElementById('searchIndustryInput').textContent;
 var location = document.getElementById('inputSuburb').value;

if( industry === "Choose Industry" || location === null){
alert('Choose Industry and enter a location')
}else{

              localStorage.setItem('location', JSON.stringify(location));
                //  localStorage.setItem('lng', JSON.stringify(longitude));
                  localStorage.setItem('industry', industry);
                   getFiltered(industry,location)
                   mostSearch(industry)

}


}


async function mostSearch(industry) {


      const response = await fetch('https://www.mpageshub.com/MostSearched', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ industry:industry}),
      });

      const data = await response.json();

}

function getFiltered(industry, location) {
  appendDiv.innerHTML = '';
  loading.style.display = 'block';

  fetch('/api/businessSearch3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ industry: industry, location: location }),
  })
    .then((response) => response.json())
    .then((items) => {
      nextbtn.style.display = items && items.length >= 12 ? 'block' : 'none';
      noloading.style.display = items.length === 0 ? 'block' : 'none';
      loading.style.display = 'none';

      items.forEach((business) => {
        console.log(business)
        const arrangeitems = document.createElement('a');
        arrangeitems.classList.add('arrange-items');

        const arrangepic = document.createElement('div');
        arrangepic.classList.add('arrange-pic');

        const arrangetext = document.createElement('div');
        arrangetext.classList.add('arrange-text');

        const tictext = document.createElement('div');
        tictext.textContent = business.industry;
        arrangepic.appendChild(tictext);
        tictext.classList.add('tic-text');

        const imgTag = document.createElement('img');
        imgTag.src = business.Images && business.Images.length > 0
          ? business.Images[0]
          : 'img/mPagesDesigns.png';
        imgTag.alt = 'Image';
        arrangepic.appendChild(imgTag);
        imgTag.classList.add('imgs');

        const titleTag = document.createElement('h5');
        titleTag.textContent = business.businessName;
        arrangetext.appendChild(titleTag);

        if (signedupAlready) {
          const addressTag = document.createElement('span');
          addressTag.textContent = business.businessAddress;
          arrangetext.appendChild(addressTag);
        }

        const subtitleTag = document.createElement('p');
        subtitleTag.textContent = `${business.openingtime} - ${business.closingtime}`;
        arrangetext.appendChild(subtitleTag);

        const openingTimeTag = document.createElement('div');
        openingTimeTag.textContent = `Opens tomorrow at ${business.openingtime}`;
        openingTimeTag.classList.add('open');
        arrangetext.appendChild(openingTimeTag);

        arrangeitems.appendChild(arrangepic);
        arrangeitems.appendChild(arrangetext);
        appendDiv.appendChild(arrangeitems);

        arrangeitems.addEventListener('click', () => {
          localStorage.removeItem('selectedUserId');
          localStorage.setItem('selectedUserData', JSON.stringify(business));
          localStorage.setItem('userDataId', JSON.stringify(business.userid));
          localStorage.setItem('selectedUserId', business.id);
          localStorage.setItem('listingId', business.listingId);
          localStorage.setItem('owner', business.userid);
          navigateToUserProfile(business.userid, business.listingId);
        });
      });
    })
    .catch((error) => {
      console.error('Error updating value:', error);
    });
}


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
   document.getElementById("overlay").style.display = "none";
}

function on2() {
  document.getElementById("overlay2").style.display = "block";
}

function off2() {
 document.getElementById("overlay2").style.display = "none";
}


function payWithPaystack1() {

  var options = document.getElementById('industry').textContent;
  var email = document.getElementById('inputmail').value;

 if(email === ''|| options==="Choose Amount"  ){
 alert("Please fill in all mandatory fields");
return false;
}

    var handler = PaystackPop.setup({
        key: 'pk_live_8db47ccef2cfc6bc1148849f867225a5de373772', //put your public key here
        email:  email, //put your customer's email here
        amount:options*100, //amount the customer is supposed to pay
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",

                }
            ]
        },
        callback: function (response) {
           if (response.status){
fetch('https://www.mpageshub.com/addDonations2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
 body: JSON.stringify({
 email:email,
 OtherAmount:options,
ownerId:storedUserData.userid,
documentId:storedUserData.listingId

})
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
            // You can handle the server response as needed
        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });
       document.getElementById("overlay2").style.display = "none";
           }




        },
        onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); //open the paystack's payment modal
}

function payWithPaystack2() {

var OtherAmount = document.getElementById('OtherAmount').value;
  var email = document.getElementById('inputmail').value;

 if(email === '' ){
 alert("Please fill in all mandatory fields");
return false;
}

    var handler = PaystackPop.setup({
        key: 'pk_live_8db47ccef2cfc6bc1148849f867225a5de373772', //put your public key here
        email:  email, //put your customer's email here
        amount:OtherAmount*100, //amount the customer is supposed to pay
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",

                }
            ]
        },
        callback: function (response) {
           if (response.status){

fetch('https://www.mpageshub.com/addDonations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
 body: JSON.stringify({
 email:email,
 amount: OtherAmount,
ownerId:storedUserData.userid,
documentId:storedUserData.listingId


})
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
            // You can handle the server response as needed
        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });
       document.getElementById("overlay2").style.display = "none";
           }




        },
        onClose: function () {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); //open the paystack's payment modal
}

function payWithPaystack(){
    var OtherAmount = document.getElementById('OtherAmount').value;
 if(OtherAmount === ''){
   payWithPaystack1()
} else{
   payWithPaystack2()
  }
  }

const x = document.getElementById("demo");

const sendPost = async (data) => {
    const body = JSON.stringify(data);
    return fetch('https://www.mpageshub.com/review', {
        method: 'POST', // GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, same-origin
        cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, follow, error
        referrer: 'no-referrer', // no-referrer, client
        body
    })
        .then(response => response.json()) // parses JSON response into native JavaScript objects
}

function off1() {
const inputName = document.getElementById('inputName').value.trim();
const EnterReview = document.getElementById('EnterReview').value.trim();

if(EnterReview=== "" ){
 alert('Please enter review.');
}
if (inputName === "") {
alert('Please enter your name.');
} else {
sendPost({data:{
reviewerName:inputName,
review:EnterReview,
// destinationId:reviewId,
ownerId:businessOwnerIds ,
listingId:listingsId
}})
.then(json => {
        console.log(json);
    })
.catch(e => console.log(e));
}
document.getElementById("overlay").style.display = "none";

}


// function getProfile(){


// const about = document.getElementById('aboutText');
//        const address = document.getElementById('contactInfoAddress');
//         const email= document.getElementById('contactInfoemail');
//         //  const container= document.getElementById('about-video');
// //         const rating2 = document.getElementById('rating2');
//         const businessNameh2= document.getElementById('businessNameh2');
//      const no = document.getElementById('contactInfoNumber');
//        const timeToOpen  = document.getElementById('timeToOpen');
//        const timeToClose = document.getElementById('timeToClose');
// //         const image = document.getElementById('vidImage');

//        const image = document.getElementById('image');

//         const donateBtn = document.getElementById('share2');
//         const element = document.getElementById('myElement');
//      const imageUrl = myImages[0];
//         element.setAttribute('data-setbg', imageUrl);
// // console.log( myImages[0])
// // Set the background image using inline CSS
// element.style.backgroundImage = `url(${imageUrl})`;

//     //  element.setAttribute('data-setbg', imageUrl);

// // if(donate && donate==='Yes'){
// //   donateBtn.style.display = 'none';
// // }else{
// //    donateBtn.style.display = 'block';
// // }



//      businessNameh2.textContent =  businessName;
//        timeToOpen.textContent =  openingtime;
//         timeToClose.textContent = closingtime;
//         email.textContent = emailData ;
//        no.textContent = phoneNo;
//        address.textContent = businessAddress;
//          about.textContent =  aboutData;


// }

// getProfile()

// function initMap2() {
//   var coordinates = {
//     lat: latitude,
//     lng:longitude
//   };
//   geocoder = new google.maps.Geocoder();
//  map2 = new google.maps.Map(document.getElementById('map2'), {
//     zoom: 17,
//     center: coordinates,
//     scrollwheel: false
//   });
//    const location = new google.maps.LatLng( latitude,  longitude);
//             const marker = new google.maps.Marker({
//                 position: location,
//                 map: map2,
//                 title:businessName
//             });
//             marker.setMap(map2)

//     }
// initMap2()

// function display(){


//         for (let i = 0; i < myImages.length; i++) {
//             const img = document.createElement('img');
//             img.src = myImages[i];
//             img.classList.add('IMAGEURL')
//            document.querySelector(".about-video").appendChild(img)
//         }
// }

// display()
  function toggleOptions() {
            var options = document.getElementById('options');
            options.style.display = (options.style.display === 'none' || options.style.display === '') ? 'block' : 'none';
  }

  function toggleOptions2() {
   var options = document.getElementById('options2');
    options.style.display = (options.style.display === 'none' || options.style.display === '') ? 'block' : 'none';
  }

  function toggleOptions3() {
            var options = document.getElementById('options3');
            options.style.display = (options.style.display === 'none' || options.style.display === '') ? 'block' : 'none';
 }

  function selectOption4(value) {
            var styledSelect = document.querySelector('.select-styled4');
            styledSelect.textContent = value;

            toggleOptions();
  }

  function selectOption2(value) {
            var styledSelect = document.querySelector('.select-styled2');
            styledSelect.textContent = value;

            toggleOptions();
  }

  function selectOption3(value) {
            var styledSelect = document.querySelector('.select-styled3');
            styledSelect.textContent = value;

            toggleOptions3();
 }

function fetchPage(page) {

     fetch(`https://www.mpageshub.com/getBusinesses2?page=${page}`)
    .then(response => response.json())
    .then(items=> {
  loading.style.display = 'none';

    for (let i = 0; i < items.length; i++) {
      const business = items[i];

console.log(business.data.email)
const myJSON = JSON.stringify(business)
      const arrangeitems= document.createElement('a');

 if (business.hasOwnProperty('donation') && business.hasOwnProperty('Images')){
 arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    }

 if (!business.hasOwnProperty('donation') && business.hasOwnProperty('Images')){
arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
    }
 if (business.hasOwnProperty('donation') && !business.hasOwnProperty('Images')){
 arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    }


    if(business.hasOwnProperty('Images')){

    }
      arrangeitems.classList.add('arrange-items');

      const arrangepic= document.createElement('div');
      arrangepic.classList.add('arrange-pic');

        const arrangetext= document.createElement('div');
       arrangetext.classList.add('arrange-text');

      //  const rating= document.createElement('div');
      //  rating.textContent = business.data.rating;
      //   arrangepic.appendChild(rating);
      //   rating.classList.add('rating');

       const tictext= document.createElement('div');
       tictext.textContent = business.data.industry;
        arrangepic.appendChild(tictext);
        tictext.classList.add('tic-text');


         const imgTag = document.createElement('img');

        imgTag.src =business.data.Images && business.data.Images.length > 0 ?business.data.Images[0]:'img/mPagesDesigns.png'
        // Assuming you have an 'imageUrl' property in your data
        imgTag.alt = 'Image'; // Provide alternative text for accessibility
        arrangepic.appendChild(imgTag);
        imgTag.classList.add('imgs');


        // Create and append h5 tag for the title
        const titleTag = document.createElement('h5');
        titleTag.textContent = business.data.businessName.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        arrangetext.appendChild(titleTag);

        // Create and append span tag for the address

       if (signedupAlready) {
 const addressTag = document.createElement('span');
        addressTag.textContent = business.data.businessAddress.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
       arrangetext.appendChild(addressTag);
   }


        // Create and append p tag for the subtitle
        const subtitleTag = document.createElement('p');
        subtitleTag.textContent =business.data.openingtime+ " - " + business.data.closingtime;
        arrangetext.appendChild(subtitleTag);

        // Create and append button tag for the opening time
        const openingTimeTag = document.createElement('div');
        openingTimeTag.textContent = 'Opens tomorrow at ' + business.data.openingtime;
        openingTimeTag.classList.add('open');
        arrangetext.appendChild(openingTimeTag);
        arrangeitems.appendChild(arrangepic)
        arrangeitems.appendChild(arrangetext)
        appendDiv.appendChild(arrangeitems)

        appendDiv.addEventListener('click', () => {
        localStorage.setItem('selectedUserId', business.id);
        localStorage.setItem('selectedUserData', JSON.stringify(business.data));
        localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
        localStorage.setItem('listingId', business.data.listingId);
        localStorage.setItem('owner', business.data.userid);

     if (business.hasOwnProperty('donation') && business.hasOwnProperty('Images')){
  window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    }

 if (!business.hasOwnProperty('donation') && business.hasOwnProperty('Images')){
  window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
    }
 if (business.hasOwnProperty('donation') && !business.hasOwnProperty('Images')){
  window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    }
   navigateToUserProfile(business.data.userid,business.data.listingId);
 });

  }
    })
    .catch(error => {
      console.log('Error fetching items:', error);
    });



}

  function handlePagination(direction) {
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
        fetchPage(currentPage);
    } else if (direction === 'next') {
        currentPage++;
       fetchPage(currentPage);
    }
}

    // Initial fetch when the page loads

// fetchPage(currentPage);
window.onpopstate = function(event) {
    // Reload the page when the user navigates back
    location.reload();
  };

  //window.addEventListener('DOMContentLoaded', () => noparams2())