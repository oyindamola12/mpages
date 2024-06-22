var signedupAlready=  localStorage.getItem('signedup');
var addedListings=  localStorage.getItem('addedListings');
let myListings = document.getElementById('myListings');
async function getUsers() {
      const response = await fetch('/getCoordinates');
      const users = await response.json();
      return users;
    }

     function getUrlParameter(name) {
            name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

var listingsId = getUrlParameter('listingid');
var businessOwnerIds = getUrlParameter('id');
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
          title: user.businessName
        });
      });

      // Fit the map to the bounds
      map.fitBounds(bounds);
    }
 if (signedupAlready === 'true' && addedListings === 'true') {
myListings.href = "my-listings.html"
   } else {
myListings.href = "no-listings.html"
    }

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


if (!window.location.search) {
    window.location.href = '/my-listings.html';
} else {
    // Parameters found in the URL
   window.location.href = `/single-listing.html?id=${businessOwnerIds}&listingid=${listingsId}`;
}


 } else {
        alert(`Login failed. ${data.error}`);
      }
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
alert('Transfr App link will be sent to your email')


 } else {
        alert(`${data.error}`);
      }
}

async function register() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('passwordRegister').value;
      const firstName = document.getElementById('firstName').value;
      const phoneNo = document.getElementById('phoneNo').value;

if(email === ''|| password  === '' ||phoneNo === ''|| firstName ===''){
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


if (!window.location.search) {
    window.location.href = '/no-listings.html';
} else {
    // Parameters found in the URL
   window.location.href = `/single-listing.html?id=${businessOwnerIds}&listingid=${listingsId}`;
}

 } else {
        alert(`Registration failed. ${data.error}`);
      }
}