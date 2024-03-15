
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


 if(signedupAlready==='true'){
hidepass.style.display='none';
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


function previewImages(event){
   var imgCont = document.getElementById('imagePreview');
            for (let i = 0; i < event.target.files.length; i++) {
                var divElm = document.createElement('div');
                divElm.id = "rowdiv" + i;
                var spanElm = document.createElement('span');
                var deleteImg = document.createElement('p');
                deleteImg.innerHTML = "x";
                var image = document.createElement('img');
                image.src = URL.createObjectURL(event.target.files[i]);
                image.id = "output" + i;
                image.width = "200";
                spanElm.appendChild(image);

                deleteImg.onclick = function() {this.parentNode.remove()};
                divElm.appendChild(deleteImg);
                divElm.appendChild(spanElm);

                imgCont.appendChild(divElm);
                console.log(URL.createObjectURL(event.target.files[i]))
            }
}


//   function previewImages(event) {
//     const files = event.target.files;
// const imagePreview = document.getElementById('imagePreview');


//     for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         const reader = new FileReader();

//         reader.onload = function(e) {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             imagePreview.appendChild(img);
//         }

//         reader.readAsDataURL(file);


//   //       const deleteBtn = document.createElement('button');
//   //       deleteBtn.textContent = 'x';
//   //         deleteBtn.type = 'button';
//   // deleteBtn.onclick = createDeleteHandler(i, files, previewImages);
//     }

//       // const selectedImagesContainer = document.getElementById('selectedImagesContainer');
//       // selectedImagesContainer.innerHTML = '';

//   //     for (let i = 0; i < files.length; i++) {
//   //       const file = files[i];
//   //       const img = document.createElement('img');
//   //       img.src = URL.createObjectURL(file);

//   //       const deleteBtn = document.createElement('button');
//   //       deleteBtn.textContent = 'x';
//   //         deleteBtn.type = 'button';
//   // deleteBtn.onclick = createDeleteHandler(i, files, previewImages);

//   //       const div = document.createElement('div');
//   //       div.appendChild(img);
//   //       div.appendChild(deleteBtn);
//   //      imagePreview.appendChild(div);
//   //     }
// }

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
  var placeholder = "https://ibb.co/pxRnrcY"
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
placeholder:placeholder
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
var placeholder = "https://ibb.co/pxRnrcY"
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

     if ( fileInputed.length >5  ) {
        alert("You can only select a maxium of 5 images.");
        return;

    }
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
formData.append('postid', postid);
formData.append('userUid', userUid);

      var handler = PaystackPop.setup({
       //key: 'pk_live_8db47ccef2cfc6bc1148849f867225a5de373772',
       key:'pk_test_733942352847369db55d32dc2b83d44db6b47fb1',
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
userids: postid,
placeholder :placeholder
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



  function payWithPaystack() {
signedupAlready==='true' ? pay2() : pay();
}
