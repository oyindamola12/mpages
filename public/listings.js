let map;
let map2;
let appendDiv = document.getElementById('col-lg-4');
let appendDiv3 = document.getElementById('col-lg-5');
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
//  loading.style.display = 'block';
var getBusinessesData = true;
var searchwithin=false
console.log(userUid)

 function toggleData(){
  if (getBusinessesData === true && searchwithin ===false){
 fetch('https://www.mpageshub.com/getBusinesses')
    .then(response => response.json())
    .then(items=> {

  loading.style.display = 'none';

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


    if (business.hasOwnProperty('donation')) {
   arrangeitems.href=`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
   arrangeitems.href=`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
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
        if( (business.hasOwnProperty('Images'))){
          imgTag.src = business.data.Images[0]
        }else{
          imgTag.src =''
        }
       // Assuming you have an 'imageUrl' property in your data
        imgTag.alt = 'Image'; // Provide alternative text for accessibility
        arrangepic.appendChild(imgTag);
        imgTag.classList.add('imgs');


        // Create and append h5 tag for the title
        const titleTag = document.createElement('h5');
        titleTag.textContent = business.data.businessName;
        arrangetext.appendChild(titleTag);

        // Create and append span tag for the address v
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
        appendDiv.appendChild(arrangeitems)

        arrangeitems.addEventListener('click', () => {
        localStorage.removeItem('selectedUserId')
        localStorage.setItem('selectedUserData', JSON.stringify(business.data));
        localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
        localStorage.setItem('selectedUserId', business.id);
        localStorage.setItem('listingId', business.data.listingId);
        localStorage.setItem('owner', business.data.userid);

 if (business.hasOwnProperty('donation')) {
  window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
    }
        navigateToUserProfile(business.id);

      });

  }
    })
    .catch(error => {
      console.log('Error fetching items:', error);
    });

  }

if (getBusinessesData === false&&searchwithin ===false &&inputindustry&&latitude&&longitude  ){
 fetch('https://www.mpageshub.com/businessSearch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ industry:inputindustry,lat:latitude ,lng:longitude})
  })
  .then(response => response.json())
  .then(items => {

     loading.style.display = 'none';


   for (let i = 0; i < items.length; i++) {

      const business = items[i];

// const filteredArray = items.filter(obj => obj.data.industry=== 'baker');
// console.log( filteredArray)

   const arrangeitems= document.createElement('a');

 if (business.hasOwnProperty('donation')) {
  arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
  arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
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
        if( (business.hasOwnProperty('Images'))){
          imgTag.src = business.data.Images[0]
        }else{
          imgTag.src =''
        } // Assuming you have an 'imageUrl' property in your data
        imgTag.alt = 'Image'; // Provide alternative text for accessibility
        arrangepic.appendChild(imgTag);
        imgTag.classList.add('imgs');


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
        appendDiv.appendChild(arrangeitems)

        arrangeitems.addEventListener('click', () => {
        localStorage.removeItem('selectedUserId')
        localStorage.setItem('selectedUserData', JSON.stringify(business.data));
        localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
        localStorage.setItem('selectedUserId', business.id);
        localStorage.setItem('listingId', business.data.listingId);
        localStorage.setItem('owner', business.data.userid);

 if (business.hasOwnProperty('donation')) {
  window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
    }
        navigateToUserProfile(business.id);

      });


  }

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
  }

if (getBusinessesData === false&&searchwithin ===false &&industryInputview ){
 fetch('https://www.mpageshub.com/businessSearch2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ industry:industryInputview })
  })
  .then(response => response.json())
  .then(items => {

     loading.style.display = 'none';


   for (let i = 0; i < items.length; i++) {

      const business = items[i];

// const filteredArray = items.filter(obj => obj.data.industry=== 'baker');
// console.log( filteredArray)

   const arrangeitems= document.createElement('a');

 if (business.hasOwnProperty('donation')) {
  arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
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

        if( (business.hasOwnProperty('Images'))){
          imgTag.src = business.data.Images[0]
        }else{
          imgTag.src =''
        } // Assuming you have an 'imageUrl' property in your data
        imgTag.alt = 'Image'; // Provide alternative text for accessibility
        arrangepic.appendChild(imgTag);
        imgTag.classList.add('imgs');


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
        appendDiv.appendChild(arrangeitems)

        arrangeitems.addEventListener('click', () => {
        localStorage.removeItem('selectedUserId')
        localStorage.setItem('selectedUserData', JSON.stringify(business.data));
        localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
        localStorage.setItem('selectedUserId', business.id);
   localStorage.setItem('listingId', business.data.listingId);
           localStorage.setItem('owner', business.data.userid);
 if (business.hasOwnProperty('donation')) {
  window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
    }
        navigateToUserProfile(business.id);

      });

  }

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
  }
}

toggleData();

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

    // var industryInputview = getUrlParameter3('industryInputview');



//  function getUrlParameter(name) {
//             name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
//             var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//             var results = regex.exec(location.search);
//             return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
//         };

//         // Get the business data from the URL query parameter

//     // Display business information
// // Handle error (e.g., display an error message)
// const images = getUrlParameter('images');

// // Deserialize the serialized array back into an array
// const myImages  = JSON.parse(images );

//  var businessName = getUrlParameter('businessName');

//   var longitude =JSON.parse( getUrlParameter('longitude'));

//   var latitude =JSON.parse( getUrlParameter('latitude'));


//   var aboutData= getUrlParameter('about');

//   var phoneNo = getUrlParameter('phoneNo');

//   var emailData = getUrlParameter('email');

//   var openingtime = getUrlParameter('openingtime');
//   var closingtime = getUrlParameter('closingtime');

//  var listingsId = getUrlParameter('listingId');
//  var businessOwnerIds= getUrlParameter('userid');
//   var industrys = getUrlParameter('industry');

//   var businessAddress = getUrlParameter('businessAddress');



        // Load the Places Autocomplete service when the window is loaded
        // window.onload = function() {
        //     initAutocomplete();
        // };
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

//     function initMap(coordinates) {
//   // const map = new google.maps.Map(document.getElementById("map"), {
//   //   center: {
//   //     lat:  6.5227,
//   //   lng:3.6218
//   //   },
//   //   zoom: 13,
//   //   mapTypeControl: false,
//   // });
//   // // map.fitBounds({ // bounds of NSW
//   // //     "south": -37.5052801,
//   // //     "west": 140.9992793,
//   // //     "north": -28.15702,
//   // //     "east": 159.1054441
//   // //   });
//   // const input = document.getElementById('inputSuburb');
//   // const options = {
//   //   fields: ["address_components", "geometry", "types", "name"],
//   //   strictBounds: true,
//   //   // bounds : { // bounds of NSW
//   //   //   "south": -37.5052801,
//   //   //   "west": 140.9992793,
//   //   //   "north": -28.15702,
//   //   //   "east": 159.1054441
//   //   // },
//   //   // componentRestrictions: {
//   //   //   country: 'ng'
//   //   // },
//   //   // types: ['locality', 'postal_code']
//   // };

//   // autocomplete = new google.maps.places.Autocomplete(input, options);

//   // autocomplete.addListener('place_changed', function() {
//   //   const place = autocomplete.getPlace();
//   //   console.log(place);
//   // });

//   // const infowindow = new google.maps.InfoWindow();
//   // const infowindowContent = document.getElementById("infowindow-content");

//   // infowindow.setContent(infowindowContent);

//   // const marker = new google.maps.Marker({
//   //   map,
//   //   anchorPoint: new google.maps.Point(0, -29),
//   //   //  icon: 'public/img/placeholder.png'
//   // });

//   // autocomplete.addListener("place_changed", () => {
//   //   infowindow.close();
//   //   marker.setVisible(true);

//   //   const place = autocomplete.getPlace();

//   //   if (!place.geometry || !place.geometry.location) {
//   //     // User entered the name of a Place that was not suggested and
//   //     // pressed the Enter key, or the Place Details request failed.
//   //     window.alert("No details available for input: '" + place.name + "'");
//   //     return;
//   //   }

//   //   // If the place has a geometry, then present it on a map.
//   //   if (place.geometry.viewport) {
//   //     map.fitBounds(place.geometry.viewport);
//   //   } else {
//   //     map.setCenter(place.geometry.location);
//   //     map.setZoom(17);
//   //   }

//   //   marker.setPosition(place.geometry.location);
//   //   marker.setVisible(true);
//   //   infowindowContent.children["place-name"].textContent = place.name;
//   //   infowindowContent.children["place-address"].textContent =
//   //     place.formatted_address;
//   //   infowindow.open(map, marker);
//   // });

//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 10,
//       center: new google.maps.LatLng(6.5227,3.6218),
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     });

//     var infowindow = new google.maps.InfoWindow();

//     var marker, i;
//   coordinates.forEach(coord => {
//             const location = new google.maps.LatLng(coord.data.latitude, coord.data.longitude);
//             const marker = new google.maps.Marker({
//                 position: location,
//                 map: map,

//                 title: coord.data.businessAddress
//             });
//                 marker.setMap(map2)
//         });


//     // for (i = 0; i < locations.length; i++) {
//     //   marker = new google.maps.Marker({
//     //     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//     //     map: map
//     //   });

//     //   google.maps.event.addListener(marker, 'click', (function(marker, i) {
//     //     return function() {
//     //       infowindow.setContent(locations[i][0]);
//     //       infowindow.open(map, marker);
//     //     }
//     //   })(marker, i));
//     // }
// }

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

if (signedupAlready) {

myListings.href = "my-listings.html"
   } else {
myListings.href = "no-listings.html"
    }




 async function fetchDatas() {
 var industry= document.getElementById('searchIndustryInput').textContent;
 var location = document.getElementById('inputSuburb').value;

 appendDiv.style.display = 'none'
  loading.style.display = 'block';

var geocoder = new google.maps.Geocoder();

 geocoder.geocode({ 'address':location }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                 const latitude = results[0].geometry.location.lat();
                   const longitude = results[0].geometry.location.lng();
                   localStorage.setItem('lat', JSON.stringify(latitude));
                   localStorage.setItem('lng', JSON.stringify(longitude));
                   localStorage.setItem('industry', industry);
 fetch('hhttps://www.mpageshub.com/businessSearch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ industry: industry,lat:latitude ,lng:longitude})
  })
  .then(response => response.json())
  .then(items => {


  loading.style.display = 'none';

   for (let i = 0; i < items.length; i++) {

      const business = items[i];

// const filteredArray = items.filter(obj => obj.data.industry=== 'baker');
// console.log( filteredArray)

   const arrangeitems= document.createElement('a');

 if (business.hasOwnProperty('donation')) {
arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
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
        imgTag.src =  business.data.image1; // Assuming you have an 'imageUrl' property in your data
        imgTag.alt = 'Image'; // Provide alternative text for accessibility
        arrangepic.appendChild(imgTag);
        imgTag.classList.add('imgs');


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

        localStorage.setItem('selectedUserData', JSON.stringify(business.data));
        localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
        localStorage.setItem('selectedUserId', business.id);
        localStorage.setItem('listingId', business.data.listingId);
        localStorage.setItem('owner', business.data.userid);

 if (business.hasOwnProperty('donation')) {
  window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
    }
        navigateToUserProfile(business.id);

      });

  }

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });

  fetch('https://www.mpageshub.com/businessSearch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ industry: industry,lat:latitude ,lng:longitude})
  })
  .then(response => response.json())
  .then(items => {


  loading.style.display = 'none';

   for (let i = 0; i < items.length; i++) {

      const business = items[i];

// const filteredArray = items.filter(obj => obj.data.industry=== 'baker');
// console.log( filteredArray)

   const arrangeitems= document.createElement('a');

 if (business.hasOwnProperty('donation')) {
  arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
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
        imgTag.src =  business.data.image1; // Assuming you have an 'imageUrl' property in your data
        imgTag.alt = 'Image'; // Provide alternative text for accessibility
        arrangepic.appendChild(imgTag);
        imgTag.classList.add('imgs');


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

        localStorage.setItem('selectedUserData', JSON.stringify(business.data));
        localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
        localStorage.setItem('selectedUserId', business.id);
        localStorage.setItem('listingId', business.data.listingId);
        localStorage.setItem('owner', business.data.userid);

 if (business.hasOwnProperty('donation')) {
  window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
    }
        navigateToUserProfile(business.id);

      });

  }

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });

   fetch('https://www.mpageshub.com/MostSearched', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
 body: JSON.stringify({
 industry: industry,
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
}
              })

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

    for (let i = 0; i < items.length; i++) {
      const business = items[i];

const myJSON = JSON.stringify(business)
      const arrangeitems= document.createElement('a');

 if (business.hasOwnProperty('donation')) {
 arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
arrangeitems.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
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
        if( (business.hasOwnProperty('Images'))){
          imgTag.src = business.data.Images[0]
        }else{
          imgTag.src =''
        }
        // Assuming you have an 'imageUrl' property in your data
        imgTag.alt = 'Image'; // Provide alternative text for accessibility
        arrangepic.appendChild(imgTag);
        imgTag.classList.add('imgs');


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
        appendDiv.appendChild(arrangeitems)

        arrangeitems.addEventListener('click', () => {
        localStorage.setItem('selectedUserId', business.id);
        localStorage.setItem('selectedUserData', JSON.stringify(business.data));
        localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
        localStorage.setItem('listingId', business.data.listingId);
        localStorage.setItem('owner', business.data.userid);

 if (business.hasOwnProperty('donation')) {
  window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
window.location.href =`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
    }
 });
 console.log(items)
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

fetchPage(currentPage);

function reviews(){


var  reviewH2 = document.getElementById('review');
 var  reviewerName = document.getElementById('reviewerName');
 var  reviewText = document.getElementById('reviewText');
  var  reviewTime = document.getElementById('reviewTime');


 fetch('https://www.mpageshub.com/getReviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify({ listingId:listingsId,ownerId:businessOwnerIds })

  })
  .then(response => response.json())
  .then(items => {

for (let i = 0; i < items.length; i++) {

      const business = items[i];

// const filteredArray = items.filter(obj => obj.data.industry=== 'baker');
reviewerName.textContent =business.data.reviewer;
reviewText.textContent =business.data.review;
reviewTime.textContent=business.data.date;
reviewerName.textContent=business.data.reviewer


  }

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
}

reviews()