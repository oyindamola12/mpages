function uuidv41() {
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
var addedListings=  localStorage.getItem('addedListings');
    var imgCont6 = document.getElementById('imagePreview');
console.log(imgCont6 )
 if(signedupAlready==='true'){
hidepass.style.display='none';
}

if (signedupAlready === 'true' && addedListings === 'true') {
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



function navigateToUserProfile(businessId) {
        // Redirect to the user profile page with the user ID as a query parameter
        window.location.href = `/single-listing.html?id=${businessId}`;
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

 var industry = document.querySelector('.select-styled2').textContent;
 var location =document.querySelector('.select-styled3').textContent;
 var nav =document.getElementById('navigateSearch');


 // Display the response
function previewImages(event) {
    var imgCont = document.getElementById('imagePreview');

    for (let i = 0; i < event.target.files.length; i++) {
        var divElm = document.createElement('div');
        divElm.id = "rowdiv" + i;

        var spanElm = document.createElement('span');

        var deleteImg = document.createElement('p');
        deleteImg.innerHTML = "x";
         deleteImg.style.cursor = "pointer";
        // deleteImg.style.position = "absolute";
        //deleteImg.style.top = "0";
    //   deleteImg.style.right = "0";
        deleteImg.style.backgroundColor = "#ffc946";
        deleteImg.style.borderRadius = "50%";
        deleteImg.style.width = "20px";
        deleteImg.style.height = "20px";
        deleteImg.style.textAlign = "center";
        deleteImg.style.lineHeight = "20px";
        deleteImg.style.color = "black";
        deleteImg.style.marginBottom = "10px";
        deleteImg.style.marginLeft = "80%";
        deleteImg.onclick = function() {this.parentNode.remove()}; // Delete button click event

        var image = document.createElement('img');
        image.src = URL.createObjectURL(event.target.files[i]);
        image.id = "output" + i;
        image.width = "200";

        spanElm.appendChild(image);

        divElm.appendChild(deleteImg); // Add delete button to the div
        divElm.appendChild(spanElm);

        imgCont.appendChild(divElm);

    }
    //  imgCont.innerHTML=''
}



// function previewImages(event){
//    var imgCont = document.getElementById('imagePreview');
//             for (let i = 0; i < event.target.files.length; i++) {
//                 var divElm = document.createElement('div');
//                 divElm.id = "rowdiv" + i;
//                 var spanElm = document.createElement('span');
//                 var deleteImg = document.createElement('p');
//                 deleteImg.innerHTML = "x";
//                 deleteImg.style.cursor = "pointer"; // Change cursor to pointer
//         deleteImg.style.position = "absolute"; // Position absolute
//         deleteImg.style.top = "0"; // Move to top
//         deleteImg.style.right = "0"; // Move to right
//         deleteImg.style.backgroundColor = "#ffc946"; // Circle color yellow
//         deleteImg.style.borderRadius = "50%"; // Make it a circle
//         deleteImg.style.width = "20px"; // Set width
//         deleteImg.style.height = "20px"; // Set height
//         deleteImg.style.textAlign = "center"; // Center the text
//         deleteImg.style.lineHeight = "20px"; // Center vertically
//         deleteImg.style.color = "black"; // X color black
//         deleteImg.style.margin = "0"; // Remove any margin
//                 var image = document.createElement('img');
//                 image.src = URL.createObjectURL(event.target.files[i]);
//                 image.id = "output" + i;
//                 image.width = "200";
//                 spanElm.appendChild(image);

//                 deleteImg.onclick = function() {this.parentNode.remove()};
//                 divElm.appendChild(deleteImg);
//                 divElm.appendChild(spanElm);

//                 imgCont.appendChild(divElm);
//                 console.log(URL.createObjectURL(event.target.files[i]))
//             }
// }
// Function to toggle between Upload Images and Reopen Gallery

function toggleGallery() {
    const fileInput = document.getElementById('fileImage');
    const toggleButton = document.getElementById('toggle-button');

    if (fileInput.style.display === 'none') {
        // Show file input to upload images
        fileInput.style.display = 'block';
        toggleButton.textContent = 'Reopen Gallery';
    } else {
        // Hide file input to reopen gallery
        fileInput.style.display = 'none';
        toggleButton.textContent = 'Upload Images';
        reopenImageGallery(); // Call function to reopen the gallery
    }
}

// Function to reopen the image gallery
function reopenImageGallery() {
    // Restore previously selected images
    const fileInput = document.getElementById('fileImage');
    // fileInput.value = ''; // Clear the current selection
    selectedImages.forEach(image => {
        fileInput.files.push(image);
    });
}


//   function previewImages(event) {
//     const files = event.target.files;
//     const imagePreview = document.getElementById('imagePreview');
// console.log(files)

//     for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         const reader = new FileReader();

//         reader.onload = function(e) {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             imagePreview.appendChild(img);
//         }

//         reader.readAsDataURL(file);


//   //       deleteBtn.textContent = 'x';
//   //         deleteBtn.type = 'button';
//   // deleteBtn.onclick = createDeleteHandler(i, files, previewImages);
//     }


// }


function uuidv4(){
return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11 ).replace(/[018]/g,(c)=>

(
c ^
(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >>(c /4)))
).toString(16)
);
}

// async function pay(){
// const businessName = document.getElementById('businessName').value;
// const contactPerson = document.getElementById('contactPerson').value;
// const donate = document.getElementById('yesNo').textContent;
// const industry =  document.querySelector('.select-styled').textContent;
// const businessAddress = document.getElementById('businessAddress').value;
// const openingtime= document.getElementById('openingtime').value;
// const closingtime = document.getElementById('closingtime').value;
// const email = document.getElementById('email').value;
// const phoneNo = document.getElementById('phoneNo').value;
// const about = document.getElementById('about').value;
// const password =document.getElementById('password').value
// // const fileInput = document.getElementById('fileImage');
// // const fileInputed = document.getElementById('fileImage').files;

// const signupStatus= true;
// var userids =uuidv4()

// if(businessName === ''|| password==="" ||contactPerson === ''||industry === ''||industry === 'Choose Category'||businessAddress === ''||phoneNo === ''||about === ''|| email  === ''){
//  alert("Please fill in all mandatory fields");
// return false;

//  }
// //  if ( fileInputed.length >5  ) {
// //         alert("You can only select a maxium of 5 images.");
// //         return;

// //     }

//   //  const files = fileInput.files;

// //             const formData = new FormData();

// //  for (let i = 0; i < files.length; i++) {
// //                 formData.append('images', files[i]);
// //             }
// // formData.append('userids', userids);

//  var handler = PaystackPop.setup({
//     key: 'pk_live_8db47ccef2cfc6bc1148849f867225a5de373772',
//      //key:'pk_test_733942352847369db55d32dc2b83d44db6b47fb1',
//       email:email,
//       amount: 3000 * 100,
//       ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
//       metadata: {
//          custom_fields: [
//             {
//                 display_name: contactPerson,
//                 variable_name: "mobile_number",
//                 value: phoneNo
//             }
//          ]
//       },
//       callback: function (response){
//  if (response.status){

// // var options = { content: galleryData};

// var geocoder = new google.maps.Geocoder();
//  geocoder.geocode({ 'address':businessAddress },async function (results, status) {
//                 if (status == google.maps.GeocoderStatus.OK) {
//                   const latitude = results[0].geometry.location.lat();
//                     const longitude = results[0].geometry.location.lng();

//         fetch('https://www.mpageshub.com/addBusiness', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },

//  body:JSON.stringify({
//  businessName: businessName,
//  contactPerson:contactPerson,
//  businessAddress: businessAddress,
//  industry:industry,
//  openingtime: openingtime,
//  closingtime:closingtime,
//  phoneNo:phoneNo,
//  about: about,
//  email: email,
//  password:password,
//  latitude:latitude,
//  longitude:longitude,
//  signupStatus:signupStatus,
//  wantDonation:donate,
//  addedListing:true,
//  userids:userids,

//  })
// })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Server response:', data);
//             // You can handle the server response as needed
//              localStorage.setItem('userId',data.userId);
//             localStorage.setItem('userData', JSON.stringify(data.businesses));
//             localStorage.setItem('signedup', 'true');

//             localStorage.setItem('addedListings', 'true');
//             window.location.reload();
//              window.location.href ='my-listings.html';



//         })
//         .catch(error => {
//             console.error('Error sending data to server:', error);
//         });

//           //  fetch('/addImages', {
//           //       method: 'POST',
//           //       body: formData
//           //   })
//           //   .then(response => response.json())
//           //   .then(data => {
//           //       console.log('Uploaded images:', data);
//           //   })
//           //   .catch(error => {
//           //       console.error('Error uploading images:', error);
//           //   });



//              } else {
//                     alert("Request failed.")
//                 }
//             });

// }
// else{
//     alert('Try again in a few minutes')
// }

//       },
//       onClose: function(){
//           alert('window closed');
//       }
//     });
//     handler.openIframe();


// }

async function pay() {
  const businessName = document.getElementById('businessName').value;
  const contactPerson = document.getElementById('contactPerson').value;
  const donate = document.getElementById('yesNo').textContent;
  const industry = document.querySelector('.select-styled').textContent;
  const businessAddress = document.getElementById('businessAddress').value;
  const openingtime = document.getElementById('openingtime').value;
  const closingtime = document.getElementById('closingtime').value;
  const email = document.getElementById('email').value;
  const phoneNo = document.getElementById('phoneNo').value;
  const about = document.getElementById('about').value;
  const password = document.getElementById('password').value;
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  const signupStatus = true;
  const userids = Math.floor(Math.random() * 1e10).toString();

  // Validation
  if (businessName === '' || password === "" || contactPerson === '' || industry === '' || industry === 'Choose Category' || businessAddress === '' || phoneNo === '' || about === '' || email === '' || country === '' || city === '') {
    alert("Please fill in all mandatory fields");
    return false;
  }

  try {
    const geocoder = new google.maps.Geocoder();
    const response = await new Promise((resolve, reject) => {
      geocoder.geocode({ 'address': businessAddress }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const latitude = results[0].geometry.location.lat();
          const longitude = results[0].geometry.location.lng();
          resolve({ latitude, longitude });
        } else {
          reject(new Error("Geocoding request failed."));
        }
      });
    });

    const { latitude, longitude } = response;

    const data = await fetch('https://www.mpageshub.com/addBusiness', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        businessName,
        contactPerson,
        businessAddress,
        industry,
        openingtime,
        closingtime,
        phoneNo,
        about,
        email,
        password,
        latitude,
        longitude,
        signupStatus,
        wantDonation: donate,
        addedListing: true,
        // userids, // Commented out
        country,
        city,
      })
    })
      .then(response => response.json());

    console.log('Server response:', data);

    localStorage.setItem('userId', data.userId);
    localStorage.setItem('userData', JSON.stringify(data.businesses));
    localStorage.setItem('signedup', 'true');
    localStorage.setItem('addedListings', 'true');
    window.location.href = 'my-listings.html';

  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.'); // Consider a more specific message
  }
}


async function pay2() {
  const businessName = document.getElementById('businessName').value;
  const contactPerson = document.getElementById('contactPerson').value;
  const donate = document.getElementById('yesNo').textContent;
  const industry = document.querySelector('.select-styled').textContent;
  const businessAddress = document.getElementById('businessAddress').value;
  const openingtime = document.getElementById('openingtime').value;
  const closingtime = document.getElementById('closingtime').value;
  const email = document.getElementById('email').value;
  const phoneNo = document.getElementById('phoneNo').value;
  const about = document.getElementById('about').value;
  const password = document.getElementById('password').value;
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  const signupStatus = true;
  const userids = Math.floor(Math.random() * 1e10).toString();

  // Validation
  if (businessName === '' || password === "" || contactPerson === '' || industry === '' || industry === 'Choose Category' || businessAddress === '' || phoneNo === '' || about === '' || email === '' || country === '' || city === '') {
    alert("Please fill in all mandatory fields");
    return false;
  }

  try {
    // Show loading indicator (optional)
    showLoadingIndicator();

    const geocoder = new google.maps.Geocoder();
    const response = await new Promise((resolve, reject) => {
      geocoder.geocode({ 'address': businessAddress }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const latitude = results[0].geometry.location.lat();
          const longitude = results[0].geometry.location.lng();
          resolve({ latitude, longitude });
        } else {
          reject(new Error("Geocoding request failed."));
        }
      });
    });

    const { latitude, longitude } = response;

    const data = await fetch('https://www.mpageshub.com/addBusiness', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        businessName,
        contactPerson,
        businessAddress,
        industry,
        openingtime,
        closingtime,
        phoneNo,
        about,
        email,
        password,
        latitude,
        longitude,
        signupStatus,
        wantDonation: donate,
        addedListing: true,
        country,
        city,
      })
    })
      .then(response => response.json());

    console.log('Server response:', data);

    localStorage.setItem('userId', data.userId);
    localStorage.setItem('userData', JSON.stringify(data.businesses));
    localStorage.setItem('signedup', 'true');
    localStorage.setItem('addedListings', 'true');
    window.location.href = 'my-listings.html';

    // Hide loading indicator (optional)
    hideLoadingIndicator();

  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while adding your business. Please try again.'); // More specific message
  }
}



  async function uploadImg(){
     const fileInputs = document.getElementById('fileImage');
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



  function payWithPaystack() {
signedupAlready==='true' ? pay2() : pay();
}
