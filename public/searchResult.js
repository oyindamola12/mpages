let map;
let map2;
let appendDiv = document.getElementById('col-lg-4');
// let appendDiv3 = document.getElementById('col-lg-5');
let myListings = document.getElementById('myListings');
let inputIndustry =localStorage.getItem('industry');
let lat = JSON.parse(localStorage.getItem('lat'));
let lng = JSON.parse(localStorage.getItem('lng'));
let industry = document.getElementById('industry');
var storedUserId =localStorage.getItem('selectedUserId');
// var imagesId=JSON.parse(localStorage.getItem('imagesId'));
var storedUserData = JSON.parse(localStorage.getItem('selectedUserData'));
// console.log(storedUserData.image1)
var userUid =localStorage.getItem('userId');
 let currentPage = 1;
const itemsPerPage = 12;
//console.log(inputIndustry)
 const loading = document.getElementById('loading');
//  loading.style.display = 'block';



//  fetch('https://www.mpageshub.com/businessSearch', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ industry:inputIndustry,lat:lat ,lng:lng})
//   })
//   .then(response => response.json())
//   .then(items => {
//      loading.style.display = 'none';

//    for (let i = 0; i < items.length; i++) {

//       const business = items[i];

// // const filteredArray = items.filter(obj => obj.data.industry=== 'baker');
// // console.log( filteredArray)

//    const arrangeitems= document.createElement('a');
//    arrangeitems.href=`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&image1=${business.data.image1}&image2=${business.data.image2}&image3=${business.data.image3}&image4=${business.data.image4}&image5=${business.data.image5}&image6=${business.data.image6}&image7=${business.data.image7}&image8=${business.data.image8}&image9=${business.data.image9}&image10=${business.data.image10}`

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
       // imgTag.src =business.data.Images && business.data.Images.length > 0 ?business.data.Images[0]:'img/mPages Designs.png' // Assuming you have an 'imageUrl' property in your data
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
//         appendDiv.appendChild(arrangeitems)

//         arrangeitems.addEventListener('click', () => {
//         localStorage.removeItem('selectedUserId')
//         localStorage.setItem('selectedUserData', JSON.stringify(business.data));
//         localStorage.setItem('userDataId', JSON.stringify(business.data.userid));
//         localStorage.setItem('selectedUserId', business.id);
//  window.location.href = `single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}`;
//         navigateToUserProfile(business.id);

//       });

//   }

//   })
//   .catch(error => {
//     console.error('Error updating value:', error);
//   });
//   fetch(`https://www.mpageshub.com/businessData?storedUserId=${storedUserId}`)
//     .then(response => response.json())
//     .then(items=> {

//    const about = document.getElementById('aboutText');
//         const address = document.getElementById('contactInfoAddress');
//         const email = document.getElementById('contactInfoemail');
//         const rating2 = document.getElementById('rating2');
//         const businessNameh2= document.getElementById('businessNameh2');
//         const no = document.getElementById('contactInfoNumber');
//         const timeToOpen  = document.getElementById('timeToOpen');
//         const timeToClose = document.getElementById('timeToClose');
//         const image = document.getElementById('vidImage');
//         const element = document.getElementById('myElement');
//         // profileImage.src = storedUserData.photoURL || 'placeholder-image.jpg';
// const imageUrl =  items.image1;

// element.setAttribute('data-setbg', imageUrl);

// // Set the background image using inline CSS
// element.style.backgroundImage = `url(${imageUrl})`;
//        rating2.textContent = businessInfo2.rating;
//         businessNameh2.textContent = items.businessName;
//         timeToOpen.textContent =  items.openingtime;
//          timeToClose.textContent =  items.closingtime;
//          email.textContent =  items.email;
//          no.textContent =  items.phoneNo;
//          address.textContent = items.businessAddress;
//          about.textContent =  items.about;
//          let imageSrc= items.image2

//          image.src =imageSrc

//         //  let latitude= items.latitude
//         //  let longitude= items.longitude

//           const location = new google.maps.LatLng( items.latitude,  items.longitude);
//             const marker = new google.maps.Marker({
//                 position: location,
//                 map: map2,
//                 title:storedUserData.businessAddress
//             });

//     })
//     .catch(error => {
//       console.log('Error fetching items:', error);
//     });

fetch('https://www.mpageshub.com/getMostSearched')
    .then(response => response.json())
    .then(items=> {
     // Populate the list in the HTML with specified tags
    //    var industry = document.querySelector('.select-styled2').textContent;
    for (let i = 0; i < items.length; i++) {


  }
    })
    .catch(error => {
      console.log('Error fetching items:', error);
    });


// function navigateToUserProfile(businessId) {
//         // Redirect to the user profile page with the user ID as a query parameter
//         window.location.href = `/single-listing.html?id=${businessId}`;
// }

//  function initMap() {
//   var coordinates = {
//     lat: 6.5227,
//     lng:3.6218
//   };
//   geocoder = new google.maps.Geocoder();
//  map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 5,
//     center: coordinates,
//     scrollwheel: false
//   });

//  fetchCoordinates();
//  }
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat:  6.5227,
    lng:3.6218
    },
    zoom: 13,
    mapTypeControl: false,
  });
  // map.fitBounds({ // bounds of NSW
  //     "south": -37.5052801,
  //     "west": 140.9992793,
  //     "north": -28.15702,
  //     "east": 159.1054441
  //   });
  const input = document.getElementById('inputSuburb');
  const options = {
    fields: ["address_components", "geometry", "types", "name"],
    strictBounds: true,
    // bounds : { // bounds of NSW
    //   "south": -37.5052801,
    //   "west": 140.9992793,
    //   "north": -28.15702,
    //   "east": 159.1054441
    // },
    // componentRestrictions: {
    //   country: 'ng'
    // },
    // types: ['locality', 'postal_code']
  };

  autocomplete = new google.maps.places.Autocomplete(input, options);

  autocomplete.addListener('place_changed', function() {
    const place = autocomplete.getPlace();
    console.log(place);
  });

  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");

  infowindow.setContent(infowindowContent);

  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29),
    //  icon: 'public/img/placeholder.png'
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
    infowindowContent.children["place-address"].textContent =
      place.formatted_address;
    infowindow.open(map, marker);
  });
}

 window.initMap = initMap;

        // Load the Places Autocomplete service when the window is loaded
 window.onload = function() {
            initAutocomplete();
        };

 function fetchCoordinates() {
        fetch('https://www.mpageshub.com/getBusinesses')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(coordinates => {
                addMarkers(coordinates);
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


if (userUid) {
myListings.href = "myListings.html"
   } else {
myListings.href = "no-listings.html"
    }


  function initMap2() {
  var coordinates = {
    lat: 6.5227,
    lng:3.6218
  };
  geocoder = new google.maps.Geocoder();
 map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 14,
    center: coordinates,
    scrollwheel: false
  });

    }

 async function fetchDatas( ) {
 var industry= document.getElementById('searchIndustryInput').textContent;
 var location = document.getElementById('inputSuburb').value;

 console.log(industry)
 console.log(location)
 var nav =document.getElementById('navigateSearch');

var geocoder = new google.maps.Geocoder();

 geocoder.geocode({ 'address':location }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                  // console.log(location)
                   const latitude = results[0].geometry.location.lat();
                   const longitude = results[0].geometry.location.lng();
                   localStorage.setItem('lat', JSON.stringify(latitude));
                   localStorage.setItem('lng', JSON.stringify(longitude));
                   localStorage.setItem('industry', industry);

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


const inputName = document.getElementById('inputName').value;
const EnterReview = document.getElementById('EnterReview').value;
const reviewId = storedUserId
var userDataId =localStorage.getItem('userDataId');


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
destinationId:reviewId,
userDataId:userDataId
}})
.then(json => {
        console.log(json);
    })
.catch(e => console.log(e));
}
document.getElementById("overlay").style.display = "none";

}

 function getUrlParameter(name) {
            name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

        // Get the business data from the URL query parameter

    // Display business information
// Handle error (e.g., display an error message)


  var businessName = getUrlParameter('businessName');
  var image10Data = getUrlParameter('image10');
  var image9Data  = getUrlParameter('image9');
  var image8Data = getUrlParameter('image8');
  var image7Data = getUrlParameter('image7');
  var image6Data = getUrlParameter('image6');
  var image5Data = getUrlParameter('image5');
  var image4Data= getUrlParameter('image4');
  var image3Data= getUrlParameter('image3');
  var image2Data = getUrlParameter('image2');
  var image1Data = getUrlParameter('image1');
  var longitude = getUrlParameter('longitude');
  var latitude = getUrlParameter('latitude');
  var aboutData= getUrlParameter('about');
  var phoneNo = getUrlParameter('phoneNo');
  var emailData = getUrlParameter('email');
  var openingtime = getUrlParameter('openingtime');
  var closingtime = getUrlParameter('closingtime');
  var industrys = getUrlParameter('industry');
  var businessAddress = getUrlParameter('businessAddress');
  console.log(businessName )

function getProfile(){
const about = document.getElementById('aboutText');
const address = document.getElementById('contactInfoAddress');
const email= document.getElementById('contactInfoemail');
// const rating2 = document.getElementById('rating2');
const businessNameh2= document.getElementById('businessNameh2');
const no = document.getElementById('contactInfoNumber');
const timeToOpen  = document.getElementById('timeToOpen');
const timeToClose = document.getElementById('timeToClose');
//const image = document.getElementById('vidImage');

        const image2 = document.getElementById('image2');
        const image3 = document.getElementById('image3');
        const image4 = document.getElementById('image4');
        const image5 = document.getElementById('image5');
        const image6 = document.getElementById('image6');
        const image7 = document.getElementById('image7');
        const image8 = document.getElementById('image8');
        const image9 = document.getElementById('image9');
        const donateBtn = document.getElementById('share2');
        const element = document.getElementById('myElement');
        const imageUrl = image1Data;
        element.setAttribute('data-setbg', imageUrl);
// Set the background image using inline CSS
        element.style.backgroundImage = `url(${imageUrl})`;
        element.setAttribute('data-setbg', imageUrl);

// if(businessInfo2.donate){
//   donateBtn.style.display = 'block';
// }
//Set the background image using inline CSS
       element.style.backgroundImage = `url(${imageUrl})`;

       businessNameh2.textContent =  businessName;
       timeToOpen.textContent =  openingtime;
       timeToClose.textContent = closingtime;
       email.textContent = emailData ;
       no.textContent = phoneNo;
       address.textContent = businessAddress;
       about.textContent =  aboutData;

           image2.src=image2Data
         image3.src=image3Data
         image4.src=image4Data
         image5.src=image5Data
         image6.src=image7Data
         image7.src=image7Data
         image8.src=image8Data
         image9.src=image9Data



          const location = new google.maps.LatLng( latitude,  longitude);
            const marker = new google.maps.Marker({
                position: location,
                map: map2,
                title:businessAddress
            });

}

getProfile()

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
       arrangeitems.href=`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&image1=${business.data.image1}&image2=${business.data.image2}&image3=${business.data.image3}&image4=${business.data.image4}&image5=${business.data.image5}&image6=${business.data.image6}&image7=${business.data.image7}&image8=${business.data.image8}&image9=${business.data.image9}&image10=${business.data.image10}`
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
         imgTag.src =business.data.Images && business.data.Images.length > 0 ?business.data.Images[0]:'img/mPages Designs.png'
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
       window.location.href=`single-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&image1=${business.data.image1}&image2=${business.data.image2}&image3=${business.data.image3}&image4=${business.data.image4}&image5=${business.data.image5}&image6=${business.data.image6}&image7=${business.data.image7}&image8=${business.data.image8}&image9=${business.data.image9}&image10=${business.data.image10}`
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
