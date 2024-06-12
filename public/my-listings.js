 let map;
let map2;
let businessedListed = JSON.parse(localStorage.getItem('userBusiness'))
let myListings = document.getElementById('myListings');

// let searchInput = document.getElementById('searchInput').value;
let appendDiv3 = document.getElementById('col-lg-5');
const selectedBusinessId = localStorage.getItem('selectedListingId');
const selectedBusinessData = JSON.parse(localStorage.getItem('selectedListingData'));
var params = new URLSearchParams(window.location.search);
var storedUserId =localStorage.getItem('selectedUserId');
var userDataId =localStorage.getItem('userDataId');
var storedUserData = JSON.parse(localStorage.getItem('selectedUserData'));
const inputIndustry = localStorage.getItem('industry');
var signedupAlready=  localStorage.getItem('signedup');
 let currentPage = 1;
const itemsPerPage = 12;
var userUid =localStorage.getItem('userId');
console.log(userUid)
// async function  getMyListing(){
// if(userUid){
//  fetch('https://www.mpageshub.com/getMyListings', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//  body: JSON.stringify({
//   userUid:userUid
// })
//         })
//         .then(response => response.json())
//         .then(items => {

//              for (let i = 0; i < items.length; i++) {
//       const business = items[i];


//       const arrangeitems= document.createElement('a');
//       arrangeitems.href='business-profile.html'
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

//         const imgTag = document.createElement('img');
//         imgTag.src =  business.data.image1; // Assuming you have an 'imageUrl' property in your data
//         imgTag.alt = 'Image'; // Provide alternative text for accessibility
//         arrangepic.appendChild(imgTag);



//         // Create and append h5 tag for the title
//         const titleTag = document.createElement('h5');
//         titleTag.textContent = business.data.businessName;
//         arrangetext.appendChild(titleTag);


//         // Create and append span tag for the address
//         const addressTag = document.createElement('span');
//         addressTag.textContent = business.data.businessAddress;
//        arrangetext.appendChild(addressTag);

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
//         appendDiv3.appendChild(arrangeitems)
//         arrangeitems.addEventListener('click', () => {
//         localStorage.setItem('selectedListingId', business.id);
//         localStorage.setItem('selectedListingData', JSON.stringify(business.data));
//         localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
//         navigateToUserProfile2(business.id);

//       });

//        console.log(items)
//   }
//     })
//     .catch(error => {
//       console.log('Error fetching items:', error);
//     });

// }



// }

  fetch(`https://www.mpageshub.com/getMyListings?userUid=${userUid}`)
    .then(response => response.json())
    .then(items=> {
   loading.style.display = 'none';
          for (let i = 0; i < items.length; i++) {
      const business = items[i];

const images = JSON.stringify(business.data.Images);
      const arrangeitems= document.createElement('a');



 if (business.hasOwnProperty('donation') && business.hasOwnProperty('Images')){
 arrangeitems.href =`business-profile.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    }

 if (!business.hasOwnProperty('donation') && business.hasOwnProperty('Images')){
arrangeitems.href =`business-profile.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
    }
 if (business.hasOwnProperty('donation') && !business.hasOwnProperty('Images')){
 arrangeitems.href =`business-profile.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&listingId=${business.data.listingId}&donation=${business.data.donation}`
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



        // Create and append h5 tag for the title
        const titleTag = document.createElement('h5');
        titleTag.textContent = business.data.businessName;
        arrangetext.appendChild(titleTag);


        // Create and append span tag for the address
        const addressTag = document.createElement('span');
        addressTag.textContent = business.data.businessAddress;
       arrangetext.appendChild(addressTag);

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
        appendDiv3.appendChild(arrangeitems)
        arrangeitems.addEventListener('click', () => {
        localStorage.setItem('selectedListingId', business.id);
        localStorage.setItem('selectedListingData', JSON.stringify(business.data));
        localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
        navigateToUserProfile2(business.data.userid,business.data.listingId);

      });

       console.log(items)
  }
    })
    .catch(error => {
      console.log('Error fetching items:', error);
    });



function navigateToUserProfile2(businessId, businesslistingId) {
        // Redirect to the user profile page with the user ID as a query parameter
        window.location.href = `/business-profile.html?id=${businessId}&listingid=${ businesslistingId}`;

}
//  getMyListing()
if (signedupAlready) {

myListings.href = "my-listings.html"
   } else {
myListings.href = "no-listings.html"
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

      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: { lat: 0, lng: 0 } ,// Center of the map
        styles: mlwStyles
      });

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
    }
 initMap();

  var params = new URLSearchParams(window.location.search);
   var userUid =localStorage.getItem('userId');
    if (userUid) {

myListings.href = "my-listings.html"
   } else {
myListings.href = "no-listings.html"
    }

//     function fetchPage(page) {

//      fetch(`https://www.mpageshub.com/getMyListings2?page=${page}&userUid=${userUid}`)
//     .then(response => response.json())
//     .then(items=> {
//    loading.style.display = 'none';
//     for (let i = 0; i < items.length; i++) {
//       const business = items[i];

// // const myJSON = JSON.stringify(business)
//       const arrangeitems= document.createElement('a');
//       arrangeitems.href=`business-profile.html`
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

//         const imgTag = document.createElement('img');
//         imgTag.src =   // Assuming you have an 'imageUrl' property in your data
//         imgTag.alt = 'Image'; // Provide alternative text for accessibility
//         arrangepic.appendChild(imgTag);
//         imgTag.classList.add('imgs');


//         // Create and append h5 tag for the title
//         const titleTag = document.createElement('h5');
//         titleTag.textContent = business.data.businessName;
//         arrangetext.appendChild(titleTag);

//         // Create and append span tag for the address
//         const addressTag = document.createElement('span');
//         addressTag.textContent = business.data.businessAddress;
//        arrangetext.appendChild(addressTag);

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
//         appendDiv3.appendChild(arrangeitems)

//         arrangeitems.addEventListener('click', () => {
//         localStorage.setItem('selectedUserId', business.id);
//         localStorage.setItem('selectedUserData', JSON.stringify(business.data));
//         localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
//        window.location.href = `business-profile.html`;
//  });

//   }
//     })
//     .catch(error => {
//       console.log('Error fetching items:', error);
//     });



// }

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

  function selectOption(value) {
            var styledSelect = document.querySelector('.select-styled');
            styledSelect.textContent = value;

            toggleOptions();
  }
  function on() {
  document.getElementById("overlaylisting").style.display = "block";
}
on()

  function closeIt() {
  document.getElementById("overlaylisting").style.display = "none";
}

async function loans() {
      const email = document.getElementById('transfrEmail').value;


if(email === ''){
 alert("Please fill in all mandatory fields");
return false;
 }

      const response = await fetch('https://www.mpageshub.com/transfr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

     if (response.ok) {
alert('Transfr App link has been sent to your email')


 } else {
        alert(`${data.error}`);
      }
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

  // fetchPage(currentPage);
  window.onpopstate = function(event) {
    // Reload the page when the user navigates back
    location.reload();
  };