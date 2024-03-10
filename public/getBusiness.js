
function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(5)
  );
}

console.log(uuidv4());
let map;
let map2;
let  geocoder;
let appendDiv = document.getElementById('col-lg-4');
let appendDiv3 = document.getElementById('col-lg-5');
let myListings = document.getElementById('myListings');
const selectedBusinessId = localStorage.getItem('selectedBusinessId');
const selectedBusinessData = JSON.parse(localStorage.getItem('selectedBusinessData'));
var params = new URLSearchParams(window.location.search);
    var storedUserId =localStorage.getItem('selectedUserId');
    var userDataId =localStorage.getItem('userDataId');
    var storedUserData = JSON.parse(localStorage.getItem('selectedUserData'));
var inputIndustry = localStorage.getItem('industry');
 var userUid =localStorage.getItem('userId');
 var paramslogin = new URLSearchParams(window.location.search);

 let currentPage = 1;
const itemsPerPage = 12;
//console.log(inputIndustry)
 const loading = document.getElementById('loading');

// function findMostRecurringItem(arr) {
//     // Create an object to store the count of each item
//     const countMap = {};

//     // Iterate through the array and count occurrences of each item
//     arr.forEach(item => {
//         countMap[item] = (countMap[item] || 0) + 1;
//     });

//     // Find the item(s) with the highest count
//     let mostRecurringItems = [];
//     let maxCount = 0;
//     for (const [item, count] of Object.entries(countMap)) {
//         if (count > maxCount) {
//             mostRecurringItems = [item];
//             maxCount = count;
//         } else if (count === maxCount) {
//             mostRecurringItems.push(item);
//         }
//     }

//     // Return an object with the most recurring item(s) and its count
//     return {
//         mostRecurringItems: mostRecurringItems,
//         recurringItemCount: maxCount
//     };
// }

// // Example usage:
// const array = [1, 2, 3, 2, 3, 4, 5, 2, 2];
// const result = findMostRecurringItem(array);
// console.log("Most recurring item(s):", result.mostRecurringItems);
// console.log("Recurring item count:", result.recurringItemCount);

  fetch('https://www.mpageshub.com/mostFrequentIndustries')
    .then(response => response.json())
    .then(items=> {

let higestListing= document.getElementById('higestListing');
let higestListingLength = document.getElementById('higestListingLength');
let viewAll =document.getElementById('viewAll');
viewAll.style.cursor='pointer'
const node = document.createTextNode(items.len.length ==1 ?items.len.length + " Listing":items.len.length + " Listings");
higestListingLength.appendChild(node);

  const node2 = document.createTextNode(items.mostSearched);
higestListing.appendChild(node2);

viewAll.addEventListener('click', () => {    // Create and append p tag for the subtitle
 window.location.href =`listings.html?industryInputview=${items.mostSearched}`;
})
})
    .catch(error => {
      console.log('Error fetching items:', error);
    });

     fetch('https://www.mpageshub.com/secondFrequentIndustry')
    .then(response => response.json())
    .then(items=> {

let secondhigestListing= document.getElementById('secondhigestListing');
let secondhigestListingLength = document.getElementById('secondhigestListingLength');
let viewAll =document.getElementById('viewAll2');
viewAll.style.cursor='pointer'
const node = document.createTextNode(items.len.length ==1 ?items.len.length + " Listing":items.len.length+ " Listings");
secondhigestListingLength.appendChild(node);

const node2 = document.createTextNode(items.secondmostSearched);
secondhigestListing.appendChild(node2);
viewAll.addEventListener('click', () => {    // Create and append p tag for the subtitle
 window.location.href =`listings.html?industryInputview=${items.secondmostSearched}`;
})
    })
    .catch(error => {
      console.log('Error fetching items:', error);
    });


  fetch('https://www.mpageshub.com/thirdFrequentIndustry')
    .then(response => response.json())
    .then(items=> {

let thirdhigestListing= document.getElementById('thirdhigestListing');
let thirdhigestListingLength = document.getElementById('thirdhigestListingLength');
let viewAll =document.getElementById('viewAll3');
viewAll.style.cursor='pointer'
const node = document.createTextNode(items.len.length <= 1 ?items.len.length + " Listing":items.len.length+ " Listings");
thirdhigestListingLength.appendChild(node);

const node2 = document.createTextNode(items.thirdmostSearched);
thirdhigestListing.appendChild(node2);
viewAll.addEventListener('click', () => {    // Create and append p tag for the subtitle
 window.location.href =`listings.html?industryInputview=${items.thirdmostSearched}`;
})
    })
    .catch(error => {
      console.log('Error fetching items:', error);
    });

      fetch('https://www.mpageshub.com/fourthFrequentIndustry')
    .then(response => response.json())
    .then(items=> {
console.log(items)
let forthhigestListing= document.getElementById('forthhigestListing');
let forthhigestListingLength = document.getElementById('forthhigestListingLength');
let viewAll =document.getElementById('viewAll4');
viewAll.style.cursor='pointer'
const node = document.createTextNode(items.len.length ==1 ? items.len.length + " Listing":items.len.length+ " Listings");
forthhigestListingLength.appendChild(node);

const node2 = document.createTextNode(items.fourthmostSearched);
forthhigestListing.appendChild(node2);
viewAll.addEventListener('click', () => {    // Create and append p tag for the subtitle
 window.location.href =`listings.html?industryInputview=${items.fourthmostSearched}`;
})
    })
    .catch(error => {
      console.log('Error fetching items:', error);
    });

      fetch('https://www.mpageshub.com/fifthFrequentIndustry')
    .then(response => response.json())
    .then(items=> {

let fifthhigestListing= document.getElementById('fifthhigestListing');
let fifthhigestListingLength = document.getElementById('fifthhigestListingLength');
let viewAll =document.getElementById('viewAll5');
viewAll.style.cursor='pointer'
const node = document.createTextNode(items.len.length ==1 ?items.len.length + " Listing":items.len.length + " Listings");
fifthhigestListingLength.appendChild(node);

const node2 = document.createTextNode(items.fifthmostSearched );
fifthhigestListing.appendChild(node2);
viewAll.addEventListener('click', () => {    // Create and append p tag for the subtitle
 window.location.href =`listings.html?industryInputview=${items.fifthmostSearched}`;
})
    })
    .catch(error => {
      console.log('Error fetching items:', error);
    });


  var storedUserIdlogin =localStorage.getItem('userId');
    var signedupAlready=  localStorage.getItem('signedup');

 if(signedupAlready==='true'){
   document.getElementById('password').style.display='none';
}

function deleteItems() {
  localStorage.clear();
}

if (signedupAlready) {

myListings.href = "my-listings.html"
   } else {
myListings.href = "no-listings.html"
    }
  //  console.log(userUid)


  //   if (storedUserId) {
  //       // Use the stored user data to populate the profile page
  //       const about = document.getElementById('aboutText');
  //       const address = document.getElementById('contactInfoAddress');
  //       const email = document.getElementById('contactInfoemail');
  //       const rating2 = document.getElementById('rating2');
  //       const businessNameh2= document.getElementById('businessNameh2');
  //       const no = document.getElementById('contactInfoNumber');
  //       const timeToOpen  = document.getElementById('timeToOpen');
  //       const timeToClose = document.getElementById('timeToClose');

  //       // profileImage.src = storedUserData.photoURL || 'placeholder-image.jpg';

  //     //  rating2.textContent = storedUserData.rating;
  //       businessNameh2.textContent = storedUserData.businessName;
  //       timeToOpen.textContent = storedUserData.openingtime;
  //        timeToClose.textContent = storedUserData.closingtime;
  //        email.textContent = storedUserData.email;
  //        no.textContent = storedUserData.phoneNo;
  //        address.textContent = storedUserData.businessAddress;
  //        about.textContent = storedUserData.about;
  //       //  let latitude=storedUserData.latitude
  //       //  let longitude=storedUserData.longitude

  //         const location = new google.maps.LatLng(storedUserData.latitude, storedUserData.longitude);
  //           const marker = new google.maps.Marker({
  //               position: location,
  //               map: map2,
  //               title:storedUserData.businessAddress
  //           });
  //  } else {

  //   }

  var params2 = new URLSearchParams(window.location.search);
   // var storedUserId2 =localStorage.getItem('selectedUserId');
    var storedUserData2 = JSON.parse(localStorage.getItem('selectedUserData'));
    console.log(storedUserData2)

  // console.log(inputIndustry)

 let inputed=JSON.parse(localStorage.getItem('searchData'));



   var params = new URLSearchParams(window.location.search);

  //  var userBusiness = JSON.parse(localStorage.getItem('userBusiness'));

     if(storedUserIdlogin){

// fetch('https://www.mpageshub.com/login')
//     .then(response => response.json())
//     .then(items=> {
//       // Populate the list in the HTML with specified tags
//     for (let i = 0; i < items.length; i++) {
//      console.log(items)
//     }
//     })
//     .catch(error => {
//       console.log('Error fetching items:', error);
//     });

     }

// console.log(storedUserIdlogin)
// function disableImage(){
// var imgfile =document.getElementById('fileImage').file
// if(imgfile.length ===5){
//   document.getElementById("fileImage").disabled = true;

// }
// }
// disableImage()


// function initMap() {
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


//     }

// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: {
//       lat:  6.5227,
//     lng:3.6218
//     },
//     zoom: 13,
//     mapTypeControl: false,
//   });
//   // map.fitBounds({ // bounds of NSW
//   //     "south": -37.5052801,
//   //     "west": 140.9992793,
//   //     "north": -28.15702,
//   //     "east": 159.1054441
//   //   });
//   const input = document.getElementById('inputSuburb');
//   const options = {
//     fields: ["address_components", "geometry", "types", "name"],
//     strictBounds: true,
//     // bounds : { // bounds of NSW
//     //   "south": -37.5052801,
//     //   "west": 140.9992793,
//     //   "north": -28.15702,
//     //   "east": 159.1054441
//     // },
//     // componentRestrictions: {
//     //   country: 'ng'
//     // },
//     // types: ['locality', 'postal_code']
//   };

//   autocomplete = new google.maps.places.Autocomplete(input, options);

//   autocomplete.addListener('place_changed', function() {
//     const place = autocomplete.getPlace();
//     console.log(place);
//   });

//   const infowindow = new google.maps.InfoWindow();
//   const infowindowContent = document.getElementById("infowindow-content");

//   infowindow.setContent(infowindowContent);

//   const marker = new google.maps.Marker({
//     map,
//     anchorPoint: new google.maps.Point(0, -29),
//   });

//   autocomplete.addListener("place_changed", () => {
//     infowindow.close();
//     marker.setVisible(false);

//     const place = autocomplete.getPlace();

//     if (!place.geometry || !place.geometry.location) {
//       // User entered the name of a Place that was not suggested and
//       // pressed the Enter key, or the Place Details request failed.
//       window.alert("No details available for input: '" + place.name + "'");
//       return;
//     }

//     // If the place has a geometry, then present it on a map.
//     if (place.geometry.viewport) {
//       map.fitBounds(place.geometry.viewport);
//     } else {
//       map.setCenter(place.geometry.location);
//       map.setZoom(17);
//     }

//     marker.setPosition(place.geometry.location);
//     marker.setVisible(true);
//     infowindowContent.children["place-name"].textContent = place.name;
//     infowindowContent.children["place-address"].textContent =
//       place.formatted_address;
//     infowindow.open(map, marker);
//   });
// }

// window.initMap = initMap;

//         // Load the Places Autocomplete service when the window is loaded
//         window.onload = function() {
//             initAutocomplete();
//         };


async function getUsers() {
      const response = await fetch('/getCoordinates');
      const users = await response.json();
      return users;
    }

   async function initMap() {

     var mlwStyles =[
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                          { visibility: "off" }
                    ]
                }
            ];
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


    initMap();
    initMap2();

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

//get businesses Data

// function saveUserDataToLocalstorage(businessId, businessData) {
//         localStorage.setItem('selectedUserId', businessId);
//         localStorage.setItem('selectedUserData', JSON.stringify(businessData));
//     }

function navigateToUserProfile(businessId) {
        // Redirect to the user profile page with the user ID as a query parameter
        window.location.href = `/single-listing.html?id=${businessId}`;
}


//  function addMarkers2(coordinates) {
//         coordinates.forEach(coord => {

//         });
//     }


// function sendBusinessInfo() {
// const businessName = document.getElementById('businessName').value;
// const contactPerson = document.getElementById('contactPerson').value;
// const industry =  document.querySelector('.select-styled').textContent;
// const businessAddress = document.getElementById('businessAddress').value;
// const openingtime= document.getElementById('openingtime').value;
// const closingtime = document.getElementById('closingtime').value;
// const email = document.getElementById('email').value;
// const phoneNo = document.getElementById('phoneNo').value;
// const about = document.getElementById('about').value;


//   if(businessName === ''|| contactPerson === ''||industry === ''||businessAddress === ''||phoneNo === ''||about === ''|| email  === ''){
//  alert("Please fill in all mandatory fields");
// return false;
//  }

//   var geocoder = new google.maps.Geocoder();
//  geocoder.geocode({ 'address':businessAddress }, function (results, status) {
//                 if (status == google.maps.GeocoderStatus.OK) {
//                   const latitude = results[0].geometry.location.lat();
//                     const longitude = results[0].geometry.location.lng();
//  fetch('https://www.mpageshub.com/addBusiness', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//  body: JSON.stringify({
//   businessName: businessName,
//  contactPerson:contactPerson,
//  businessAddress: businessAddress,
//  industry:industry,
//  openingtime: openingtime,
//  closingtime:closingtime,
//  phoneNo:phoneNo,
//  about: about,
//  email: email,
// // fileItem:fileItem,
// //  fileName:fileName,
// latitude:latitude,
// longitude:longitude
// })
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Server response:', data);
//             // You can handle the server response as needed
//         })
//         .catch(error => {
//             console.error('Error sending data to server:', error);
//         });

//                 } else {
//                     alert("Request failed.")
//                 }
//  });   // Make an HTTP POST request to the Node.js backend
// }

  function toggleOptions() {
            var options = document.getElementById('options');
            options.style.display = (options.style.display === 'none' || options.style.display === '') ? 'block' : 'none';
  }

function toggleOptionsYes() {
            var options = document.getElementById('yes/no');
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

const yesNo=  document.getElementById('hideYes');

if(value === 'Mosque' || value === 'Charity Organization'|| value === 'Orphanage Home' || value === 'School' || value ==="Islamic Organization"){
yesNo.style.display = 'inline-block';
}else{
yesNo.style.display = 'none';
}

            toggleOptions();
  }

 function selectOptionyes(value) {
            var styledSelect = document.getElementById('yesNo');
            styledSelect.textContent = value;

            toggleOptionsYes();
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

 var industry = document.querySelector('.select-styled2').textContent;
 var location =document.querySelector('.select-styled3').textContent;
 var nav =document.getElementById('navigateSearch');

 async function fetchData( ) {
 var industry= document.getElementById('searchIndustryInput').textContent;
 var location = document.getElementById('inputSuburb').value;

 console.log(industry)
 console.log(location)
 var nav =document.getElementById('navigateSearch');

var geocoder = new google.maps.Geocoder();

 geocoder.geocode({ 'address':location }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                 const latitude = results[0].geometry.location.lat();
                   const longitude = results[0].geometry.location.lng();
                   localStorage.setItem('lat', JSON.stringify(latitude));
                   localStorage.setItem('lng', JSON.stringify(longitude));
                   localStorage.setItem('industry', industry);
                   window.location.href =`listings.html?lat=${latitude}&lng=${ longitude}&industryInput=${industry}`;
                }
              })

}

 // Display the response



async function login() {
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

if(email === ''|| password  === ''){
 alert("Please fill in all mandatory fields");
return false;
 }

      const response = await fetch('https://www.mpageshub.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

     if (response.ok) {

      localStorage.setItem('userId',data.userId);
      localStorage.setItem('userBusiness',JSON.stringify(data.businesses));
      localStorage.setItem('signedup', 'true');
      window.location.href = '/my-listings.html';



 } else {
        alert(`Login failed. ${data.error}`);
      }
}


async function register() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('passwordRegister').value;
      const firstName = document.getElementById('firstName').value;
      const phoneNo = document.getElementById('lphoneNo').value;

if(email === ''|| password  === ''){
 alert("Please fill in all mandatory fields");
return false;
 }

      const response = await fetch('https://www.mpageshub.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName , phoneNo }),
      });

      const data = await response.json();

     if (response.ok) {

      localStorage.setItem('userId',data.userId);
      localStorage.setItem('userBusiness',JSON.stringify(data.businesses));
      localStorage.setItem('signedup', 'true');
      window.location.href = '/no-listings.html';


 } else {
        alert(`Registration failed. ${data.error}`);
      }
}


  function previewImages(event) {
    const files = event.target.files;


    const imagePreview = document.getElementById('imagePreview');



    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        }

        reader.readAsDataURL(file);


  //       const deleteBtn = document.createElement('button');
  //       deleteBtn.textContent = 'x';
  //         deleteBtn.type = 'button';
  // deleteBtn.onclick = createDeleteHandler(i, files, previewImages);
    }

      // const selectedImagesContainer = document.getElementById('selectedImagesContainer');
      // selectedImagesContainer.innerHTML = '';

  //     for (let i = 0; i < files.length; i++) {
  //       const file = files[i];
  //       const img = document.createElement('img');
  //       img.src = URL.createObjectURL(file);

  //       const deleteBtn = document.createElement('button');
  //       deleteBtn.textContent = 'x';
  //         deleteBtn.type = 'button';
  // deleteBtn.onclick = createDeleteHandler(i, files, previewImages);

  //       const div = document.createElement('div');
  //       div.appendChild(img);
  //       div.appendChild(deleteBtn);
  //      imagePreview.appendChild(div);
  //     }
}


 function createDeleteHandler(index, files, callback) {
      return function(event) {
        event.preventDefault();
        files.splice(index, 1);
        callback(files);
      };
    }
function uuidv4(){
return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11 ).replace(/[018]/g,(c)=>

(
c ^
(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >>(c /4)))
).toString(16)
);
}

async function pay(){
const businessName = document.getElementById('businessName').value;
const contactPerson = document.getElementById('contactPerson').value;
const donate = document.getElementById('yesNo').textContent;
const industry =  document.querySelector('.select-styled').textContent;
const businessAddress = document.getElementById('businessAddress').value;
const openingtime= document.getElementById('openingtime').value;
const closingtime = document.getElementById('closingtime').value;
const email = document.getElementById('email').value;
const phoneNo = document.getElementById('phoneNo').value;
const about = document.getElementById('about').value;
const password =document.getElementById('password').value
 const fileInput = document.getElementById('fileImage');
  const fileInputed = document.getElementById('fileImage').files;
const signupStatus= true;
var userids =uuidv4()

if(businessName === ''|| password==="" ||contactPerson === ''||industry === ''||businessAddress === ''||phoneNo === ''||about === ''|| email  === ''){
 alert("Please fill in all mandatory fields");
return false;

 }

  // if ( fileInputed.length < 3 ) {
  //       alert("Please select a minimum of 3 images.");
  //       return;

  //   }

  //    if ( fileInputed.length >5  ) {
  //       alert("You can only select a maxium of 5 images.");
  //       return;

  //   }
  //     if (!fileInput) {
  //   console.error('File input element not found');
  //   return;
  // }


  // Check if files are undefined or null

   const files = fileInput.files;

            // if (files.length === 0) {
            //     console.error('No files selected');
            //     return;
            // }

            const formData = new FormData();

    // formData.append('businessName', businessName);
    // formData.append('email', email);
    // formData.append('phoneNo', phoneNo);
    // formData.append('contactPerson', contactPerson);
    // formData.append( 'businessAddress', businessAddress);
    // formData.append('industry', industry);
    // formData.append('openingtime', openingtime);
    // formData.append('closingtime',closingtime);
    // formData.append('about', about);
    // formData.append(' addedListing', true);
    // formData.append(' signupStatus', true);
    // formData.append('password',password);
    // formData.append(' wantDonation', donate);
 for (let i = 0; i < files.length; i++) {
                formData.append('images', files[i]);
            }

                formData.append('userids', userids);
 var handler = PaystackPop.setup({
      key: 'pk_live_8db47ccef2cfc6bc1148849f867225a5de373772',
    // key:'pk_test_733942352847369db55d32dc2b83d44db6b47fb1',
      email:email,
      amount: 3000 * 100,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: contactPerson,
                variable_name: "mobile_number",
                value: phoneNo
            }
         ]
      },
      callback: function (response){
 if (response.status){

// var options = { content: galleryData};

var geocoder = new google.maps.Geocoder();
 geocoder.geocode({ 'address':businessAddress },async function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                  const latitude = results[0].geometry.location.lat();
                    const longitude = results[0].geometry.location.lng();

        fetch('https://www.mpageshub.com/addBusiness', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },

   body:JSON.stringify({
  businessName: businessName,
 contactPerson:contactPerson,
 businessAddress: businessAddress,
 industry:industry,
 openingtime: openingtime,
 closingtime:closingtime,
 phoneNo:phoneNo,
 about: about,
 email: email,
 password:password,
 latitude:latitude,
 longitude:longitude,
 signupStatus:signupStatus,
 wantDonation:donate,
addedListing:true,
userids:userids,

 })
})
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
            // You can handle the server response as needed
             localStorage.setItem('userId',data.userId);
            localStorage.setItem('userData', JSON.stringify(data.businesses));
            localStorage.setItem('signedup', 'true');
            localStorage.setItem('addedListings', 'true');
             window.location.href ='my-listings.html';



        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });

           fetch('/addImages', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Uploaded images:', data);
            })
            .catch(error => {
                console.error('Error uploading images:', error);
            });



             } else {
                    alert("Request failed.")
                }
            });

}
else{
    alert('Try again in a few minutes')
}

      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();


}
 async function pay2(){
const businessName = document.getElementById('businessName').value;
const contactPerson = document.getElementById('contactPerson').value;
const industry =  document.querySelector('.select-styled').textContent;
const donate = document.getElementById('yesNo').textContent;
const businessAddress = document.getElementById('businessAddress').value;
const openingtime= document.getElementById('openingtime').value;
const closingtime = document.getElementById('closingtime').value;
const email = document.getElementById('email').value;
const phoneNo = document.getElementById('phoneNo').value;
const about = document.getElementById('businessName').value;
const fileInput = document.getElementById('fileImage');
// var storedUserIdlogin =localStorage.getItem('userId');
const fileInputed = document.getElementById('fileImage').files;

let postid =uuidv4()
  if (businessName === ''|| password==="" ||contactPerson === ''||industry === ''||businessAddress === ''||phoneNo === ''||about === ''|| email  === ''){
 alert("Please fill in all mandatory fields");
return false;

    }

  // if ( fileInputed.length < 3 ) {
  //       alert("Please select a minimum of 3 images.");
  //       return;

  //   }

    //  if ( fileInputed.length >5  ) {
    //     alert("You can only select a maxium of 5 images.");
    //     return;

    // }
  // if (!fileInput) {
  //   console.error('File input element not found');
  //   return;
  //   }



  // Check if files are undefined or null

   const files = fileInput.files;

            if (files.length === 0) {
                console.error('No files selected');
                return;
            }




            const formData = new FormData();

 for (let i = 0; i < files.length; i++) {
   formData.append('images', files[i]);
            }
   formData.append(' postid',  postid);

 formData.append('userUid',userUid);

      var handler = PaystackPop.setup({
       key: 'pk_live_8db47ccef2cfc6bc1148849f867225a5de373772',
       //key:'pk_test_733942352847369db55d32dc2b83d44db6b47fb1',
      email:email,
      amount: 3000 * 100,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: contactPerson,
                variable_name: "mobile_number",
                value: phoneNo
            }
         ]
      },
      callback: function  (response){

 if (response.status){

var geocoder = new google.maps.Geocoder();
 geocoder.geocode({ 'address':businessAddress },async function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                  const latitude = results[0].geometry.location.lat();
                    const longitude = results[0].geometry.location.lng();


  fetch('https://www.mpageshub.com/addBusiness2', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
 body:JSON.stringify({
businessName: businessName,
 contactPerson:contactPerson,
 businessAddress: businessAddress,
 industry:industry,
 openingtime: openingtime,
 closingtime:closingtime,
 phoneNo:phoneNo,
 about: about,
 email: email,
 addedListing:true,
 latitude:latitude,
 longitude:longitude,
userId:userUid,
wantDonation:donate,
userids: postid

  })
           })
        .then(response =>  response.json())
        .then( async data => {
            console.log('Server response:', data);




            // You can handle the server response as needed
            localStorage.setItem('userId',data.userId);
            localStorage.setItem('userData', JSON.stringify(data.businesses));
            localStorage.setItem('signedup', 'true');
            localStorage.setItem('addedListings', 'true');
            window.location.href ='my-listings.html';
        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });

  fetch('/addImages2', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Uploaded images:', data);
            })
            .catch(error => {
                console.error('Error uploading images:', error);
            });

  } else {
 alert("Request failed.")
                }
            });

}


      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }

  async function uploadImg(){
     const fileInputs = document.getElementById('fileInputs');
      const newInput = document.createElement('input');
      newInput.type = 'file';
      newInput.name = 'images';
      newInput.multiple = true;
      fileInputs.appendChild(newInput);

      const files = document.querySelectorAll('input[type="file"]');
      files.forEach(fileInput => {
        const selectedFiles = fileInput.files;
        // Handle file upload logic here
        console.log(selectedFiles);
          });
  }

//  console.log(storedUserData)

//     if (login) {
//         // Use the stored user data to populate the profile page
//         const about = document.getElementById('aboutText');
//         const address = document.getElementById('contactInfoAddress');
//         const email = document.getElementById('contactInfoemail');
//         const rating2 = document.getElementById('rating2');
//         const businessNameh2= document.getElementById('businessNameh2');
//         const no = document.getElementById('contactInfoNumber');
//         const timeToOpen  = document.getElementById('timeToOpen');
//         const timeToClose = document.getElementById('timeToClose');

//         // profileImage.src = storedUserData.photoURL || 'placeholder-image.jpg';

//        rating2.textContent = storedUserData.rating;
//         businessNameh2.textContent = storedUserData.businessName;
//         timeToOpen.textContent = storedUserData.openingtime;
//          timeToClose.textContent = storedUserData.closingtime;
//          email.textContent = storedUserData.email;
//          no.textContent = storedUserData.phoneNo;
//          address.textContent = storedUserData.businessAddress;
//          about.textContent = storedUserData.about;


//    } else {
//         console.error('User ID or user data not found in localStorage or URL parameters.');
//}

  function payWithPaystack() {
signedupAlready==='true' ? pay2() : pay();
}
