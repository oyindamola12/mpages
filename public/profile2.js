let map;
let map2;
let appendDiv = document.getElementById('col-lg-4');
let appendDiv3 = document.getElementById('col-lg-5');
let container = document.getElementById("about-video");
let myListings = document.getElementById('myListings');
let facebook = document.getElementById('facebook');
let twitter = document.getElementById('twitter');
let linkedin = document.getElementById('linkedin');
let reddit = document.getElementById('reddit');
let pinterest = document.getElementById('pinterest');
let inputIndustry =localStorage.getItem('industry');
let lat = JSON.parse(localStorage.getItem('lat'));
let lng = JSON.parse(localStorage.getItem('lng'));
let industry = document.getElementById('industry');
var storedUserId =localStorage.getItem('selectedUserId');
 var signedupAlready=  localStorage.getItem('signedup');
 var about = document.getElementById('aboutText');
 var address = document.getElementById('contactInfoAddress');
 var email= document.getElementById('contactInfoemail');

//const rating2 = document.getElementById('rating2');
 var businessNameh2= document.getElementById('businessNameh2');
 var no = document.getElementById('contactInfoNumber');
 var timeToOpen  = document.getElementById('timeToOpen');
 var timeToClose = document.getElementById('timeToClose');
//const image = document.getElementById('vidImage');
 var image = document.getElementById('image');
 var element = document.getElementById('myElement');
// var imagesId=JSON.parse(localStorage.getItem('imagesId'));
// var  inputName = document.getElementById('inputNameMyListings').value;
//  var  EnterReview = document.getElementById('EnterReview').value;
 var  reviewId = storedUserId
var userDataId =localStorage.getItem('userDataId');
var storedUserData = JSON.parse(localStorage.getItem('selectedUserData'));
var userUid =localStorage.getItem('userId');

// var donateBtn = document.getElementById('share2');
// var divider= document.getElementById('divider');
function hideContact() {
    var contactText = document.getElementById('showcontact');
   var contactText2 = document.getElementById('hidecontact');
    if (signedupAlready && signedupAlready === 'true') {
        contactText.style.display = 'block';
        contactText2.style.display = 'none';
    } else {
        contactText.style.display = 'none';
        contactText2.style.display = 'block';
    }
}

   hideContact()
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

 function getUrlParameter(name) {
            name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

var listingsId = getUrlParameter('listingid');
var businessOwnerIds = getUrlParameter('id');

        // Get the business data from the URL query parameter

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

// function shareToOnline() {

//   facebook.href=`https://www.facebook.com/sharer/sharer.php?u=http://localhost:8000/single-listing.htmlsingle-listing.html?businessName=${business.data.businessName}&businessAddress=${ business.data.businessAddress}&industry=${business.data.industry} &openingtime=${business.data.openingtime} &closingtime=${business.data.closingtime}&email=${business.data.email} &about=${business.data.about}&phoneNo=${business.data.phoneNo}&latitude=${business.data.latitude} &longitude=${business.data.longitude}&userid=${business.data.userid}&images=${encodeURIComponent(images)}&listingId=${business.data.listingId}&donation=${business.data.donation}`
//     }
// shareToOnline()
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

function getUserProfile(){
fetch('/api/getSingleProfile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ listingId: listingsId, businessOwnerId: businessOwnerIds})
})
.then(response => response.json())
.then(userData => {


 const imageUrl = userData.Images && userData.Images.length > 0 ?userData.Images[0]:'img/mPagesDesigns.png'
//    element.setAttribute('data-setbg', imageUrl);
    element.style.backgroundImage = `url(${imageUrl})`;
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'top';
     businessNameh2.textContent =  userData.businessName;
       timeToOpen.textContent =  userData.openingtime;
        timeToClose.textContent = userData.closingtime;
        email.textContent = userData.email ;
       no.textContent = userData.phoneNo;
       address.textContent = userData.businessAddress;
         about.textContent =  userData.about;
initMap2(userData)
display(userData)
showDonateButton(userData)
    //  const location = new google.maps.LatLng( latitude,  longitude);
    //         const marker = new google.maps.Marker({
    //             position: location,
    //             map: map2,
    //             title:businessAddress
    //         });
  // Handle the user data received from the backend
  console.log('User Data:', userData);

})
.catch(error => {
  console.error('Error fetching user data:', error);
});
}

getUserProfile()

if (signedupAlready) {

myListings.href = "my-listings.html"
   } else {
myListings.href = "no-listings.html"
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


function showDonateButton(userData) {
    var donateBtn = document.getElementById('share2');
    var divider = document.getElementById('divider');

    if (userData && userData.donation === "Yes") {
        divider.style.display = "block";
        donateBtn.style.display = 'block';
    } else {
        divider.style.display = "none";
        donateBtn.style.display = 'none';
    }
}

showDonateButton()
// getProfile()
var mlwStyles =[
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                          { visibility: "off" }
                    ]
                }
            ];
function initMap2(userData) {

  geocoder = new google.maps.Geocoder();
 map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 17,
    center: {
    lat: userData.latitude,
    lng:userData.longitude
  },
    scrollwheel: false,
     styles: mlwStyles
  });
   const location = new google.maps.LatLng( userData.latitude,  userData.longitude);
            const marker = new google.maps.Marker({
                position: location,
                map: map2,
                // title:
            });
            marker.setMap(map2)

    }

function display(userData) {
    if (userData && userData.Images && userData.Images.length > 0) {
        const myImages = userData.Images;

        myImages.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.classList.add('IMAGEURL');
            document.querySelector(".about-video").appendChild(img);
        });
    }
}

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
reviewH2.textContent='Reviews'
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
 function shareOnFacebook() {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }
function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('YOUR_TEXT'); // Replace 'YOUR_TEXT' with the text you want to share on Twitter
    window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
}

     function shareOnLinkedin() {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=YOUR_TITLE`, '_blank');
    }

//&description=${description}

     function shareOnPinterest() {
    const url = encodeURIComponent(window.location.href);
    const media = encodeURIComponent('IMAGE_URL'); // Replace 'IMAGE_URL' with the URL of the image you want to share
    const description = encodeURIComponent('DESCRIPTION'); // Replace 'DESCRIPTION' with a description of the image
    window.open(`https://www.pinterest.com/pin/create/button/?url=${url}`, '_blank');
}

  function shareOnWhatsApp() {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://api.whatsapp.com/send?text=Check%20out%20this%20user%20details:%20${url}`, '_blank');
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
 amount:options,
ownerId:businessOwnerIds,
documentId:listingsId

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
ownerId:businessOwnerIds,
documentId:listingsId


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
        // Check if the 'param' parameter exists and has a value
function gotoRegister(){
   window.location.href = `/register.html?id=${businessOwnerIds}&listingid=${listingsId}`;
}

function gotoLogin(){
   window.location.href = `/login.html?id=${businessOwnerIds}&listingid=${listingsId}`;
}