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

 if (business.hasOwnProperty('donation')) {
 arrangeitems.href =`business-profile.html.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
    } else {
arrangeitems.href =`business-profile.html.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}`
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
        imgTag.src = business.data.Images[0]// Assuming you have an 'imageUrl' property in your data
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
        navigateToUserProfile2(business.id);

      });

       console.log(items)
  }
    })
    .catch(error => {
      console.log('Error fetching items:', error);
    });



function navigateToUserProfile2(businessId) {
        // Redirect to the user profile page with the user ID as a query parameter
        window.location.href = `/business-profile.html?id=${businessId}`;

}
//  getMyListing()

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