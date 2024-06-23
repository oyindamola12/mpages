
function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(5)
  );
}
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
var hidepass =   document.getElementById('password')
 let currentPage = 1;
const itemsPerPage = 12;
//console.log(inputIndustry)
 const loading = document.getElementById('loading');
var storedUserIdlogin =localStorage.getItem('userId');
var signedupAlready=  localStorage.getItem('signedup');
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



if (signedupAlready) {

myListings.href = "my-listings.html"
   } else {
myListings.href = "no-listings.html"
    }


  var params2 = new URLSearchParams(window.location.search);
   // var storedUserId2 =localStorage.getItem('selectedUserId');
    var storedUserData2 = JSON.parse(localStorage.getItem('selectedUserData'));


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


async function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 0,
    lng:0
    },
    zoom: 13,
    mapTypeControl: false,
  });

  const input = document.getElementById('inputSuburb');
  const options = {
    fields: ["address_components", "geometry", "types", "name"],
    strictBounds: true,

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
}

window.initMap = initMap;


  window.onload = function() {
            initAutocomplete();
        };


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

if(value === 'Mosque' || value === 'Charity Organization'|| value === 'Orphanage Home' || value === 'School' || value ==="Islamic Organization"|| value ==="Imam"){
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


 var nav =document.getElementById('navigateSearch');

 async function fetchData( ) {
 var industry= document.getElementById('searchIndustryInput').textContent;
 var location = document.getElementById('inputSuburb').value;

if( industry === "Choose Industry" || location === null){
alert('Choose Industry  and enter a location')
}else{
  var geocoder = new google.maps.Geocoder();
 geocoder.geocode({ 'address':location }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                 const latitude = results[0].geometry.location.lat();
                   const longitude = results[0].geometry.location.lng();
                   localStorage.setItem('lat', JSON.stringify(latitude));
                   localStorage.setItem('lng', JSON.stringify(longitude));
                   localStorage.setItem('industry', industry);
                   window.location.href =`listings.html?lat=${latitude}&lng=${longitude}&industryInput=${industry}&location=${location}`;
                }
              })
}


}
  function on() {
  document.getElementById("overlaylisting").style.display = "block";
}
on()

async function loans() {
 const email = document.getElementById('transfrEmail').value;
  document.getElementById("overlaylisting").style.display = "none";

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
     document.getElementById("overlaylisting").style.display = "none";


 } else {
        alert(`${data.error}`);
      }
}
  function closeIt() {
  document.getElementById("overlaylisting").style.display = "none";
}



//  function createDeleteHandler(index, files, callback) {
//       return function(event) {
//         event.preventDefault();
//         files.splice(index, 1);
//         callback(files);
//       };
//     }
function uuidv4(){
return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11 ).replace(/[018]/g,(c)=>

(
c ^
(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >>(c /4)))
).toString(16)
);
}
