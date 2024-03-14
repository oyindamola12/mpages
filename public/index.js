//Get Businesses
//  let businessName = document.getElementById('businessName');
let searchBtn = document.getElementById('searchListing')
let address = document.getElementById('businessAddress');
var signedupAlready=  localStorage.getItem('signedup');
let map;
let geocoder;

async function initMap() {
  var coordinates = {
    lat: 6.5227,
    lng:3.6218
  };
  geocoder = new google.maps.Geocoder();
 map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: coordinates,
    scrollwheel: false
  });
 fetchCoordinates();
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
                addMarkers(coordinates);
            })
            .catch(error => {
                console.error('Error fetching coordinates:', error);
            });
    }
//get businesses Data

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

// Populate the profile page with user data
let fileItem;
let fileName;

function getFile(e){
  fileItem= e.target.files[0];
  fileName=fileItem.name;

}
if (signedupAlready) {

myListings.href = "my-listings.html"
   } else {
myListings.href = "no-listings.html"
    }

 function getCoordinates() {
        const addressInput = document.getElementById('businessAddress');
        const address = addressInput.value.trim();



        // Use Google Maps Geocoding API to get coordinates from the address
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDOGikfQraj0VsJPnpJMqgm5IORGCRIcTo`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'OK' && data.results.length > 0) {
                    const location = data.results[0].geometry.location;
                    const latitude = location.lat;
                    const longitude = location.lng;

                    // Send coordinates to the Node.js server
                    sendBusinessInfo(latitude, longitude);
                } else {
                    console.error('Unable to retrieve coordinates. Please check the address.');
                }
            })
            .catch(error => {
                console.error('Error getting coordinates:', error);
            });
}


function submitData() {
        const addressInput = document.getElementById('address');
        const additionalDataInput = document.getElementById('additionalData');

        const address = addressInput.value.trim();
        const additionalData = additionalDataInput.value.trim();

        if (address === '' || additionalData === '') {
            console.error('Please enter both address and additional data.');
            return;
        }

        // Use Google Maps Geocoding API to get coordinates from the address
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'OK' && data.results.length > 0) {
                    const location = data.results[0].geometry.location;
                    const latitude = location.lat;
                    const longitude = location.lng;

                    // Send coordinates and additional data to the Node.js server
                    sendToServer(latitude, longitude, additionalData);
                } else {
                    console.error('Unable to retrieve coordinates. Please check the address.');
                }
            })
            .catch(error => {
                console.error('Error getting coordinates:', error);
            });
    }

function sendToServer(latitude, longitude, additionalData) {
        // Use fetch to send data to the Node.js server
        fetch('/api/submitData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                latitude: latitude,
                longitude: longitude,
                additionalData: additionalData,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
        })
        .catch(error => {
            console.error('Error sending data to server:', error);
        });
    }

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
   document.getElementById("overlay").style.display = "none";
}

const inputName = document.getElementById('inputName').value;
const EnterReview = document.getElementById('EnterReview').value;
const reviewId = storedUserId
var userDataId =localStorage.getItem('userDataId');


const x = document.getElementById("demo");

// // const sendPost = async (data) => {
// //     const body = JSON.stringify(data);
// //     return fetch('https://www.mpageshub.com/review', {
// //         method: 'POST', // GET, POST, PUT, DELETE, etc.
// //         mode: 'cors', // no-cors, cors, same-origin
// //         cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
// //         credentials: 'same-origin', // include, same-origin, omit
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         redirect: 'follow', // manual, follow, error
// //         referrer: 'no-referrer', // no-referrer, client
// //         body
// //     })
// //         .then(response => response.json()) // parses JSON response into native JavaScript objects
// // }

// function off1() {
// const inputName = document.getElementById('inputName').value.trim();
// const EnterReview = document.getElementById('EnterReview').value.trim();
// if(EnterReview=== "" ){
//  alert('Please enter review.');
// }
// if (inputName === "") {
// alert('Please enter your name.');
// } else {
// sendPost({data:{
// reviewerName:inputName,
// review:EnterReview,
// destinationId:reviewId,
// userDataId:userDataId
// }})
// .then(json => {
//         console.log(json);
//     })
// .catch(e => console.log(e));
// }
// document.getElementById("overlay").style.display = "none";
// }

initMap();



// google.maps.event.addDomListener(window, "load", initMap);
