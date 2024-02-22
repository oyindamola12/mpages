let businesseListed = JSON.parse(localStorage.getItem('userBusiness'))
let myListings = document.getElementById('myListings');
// let searchInput = document.getElementById('searchInput').value;
let map;
let map2;
let selectedBusinessId = localStorage.getItem('selectedListingId');
let selectedBusinessData = JSON.parse(localStorage.getItem('selectedListingData'));
var params = new URLSearchParams(window.location.search);
var storedUserId =localStorage.getItem('selectedUserId');
var userDataId =localStorage.getItem('userDataId');
var storedUserData = JSON.parse(localStorage.getItem('selectedUserData'));
var inputIndustry = localStorage.getItem('industry');
var userUid =localStorage.getItem('userId');
const businessNameh2MyListings = document.getElementById('businessNameh2MyListings');
const editInputh2 = document.getElementById('editInput');
const editButton = document.getElementById('editButtonh2');
const saveButton = document.getElementById('saveButton');
const timeToOpenMyListings = document.getElementById('timeToOpenMyListings');
const editInputopen= document.getElementById('editInputopen');
const editButtonopen = document.getElementById('editButtonopen');
const saveButtonopen= document.getElementById('saveButtonopen');
const timeToCloseMyListings = document.getElementById('timeToCloseMyListings');
const editInputclose= document.getElementById('editInputclose');
const editButtonclose = document.getElementById('editButtonclose');
const saveButtonclose= document.getElementById('saveButtonclose');
const contactInfoAddressMyListings = document.getElementById('contactInfoAddressMyListings');
const editInputAddress= document.getElementById('editInputAddress');
const editButtonAddress = document.getElementById('editButtonAddress');
const saveButtonAddress= document.getElementById('saveButtonAddress');
const contactInfoNumberMyListings = document.getElementById('contactInfoNumberMyListings');
const editInputNumber= document.getElementById('editInputNumber');
const editButtonNumber = document.getElementById('editButtonNumber');
const saveButtonNumber= document.getElementById('saveButtonNumber');
const contactInfoemailMyListings = document.getElementById('contactInfoemailMyListings');
const editInputemail= document.getElementById('editInputemail');
const editButtonemail = document.getElementById('editButtonemail');
const saveButtonemail= document.getElementById('saveButtonemail');
const aboutTextMyListings = document.getElementById('aboutTextMyListings');
const editInputAbout= document.getElementById('editInputAbout');
const editButtonAbout = document.getElementById('editButtonAbout');
const saveButtonAbout= document.getElementById('saveButtonAbout');
// Set the image URL
let listingId=selectedBusinessData.listingId
// console.log(selectedBusinessId )

//  fetch('http://localhost:8000/getMyListings', {
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

//           for (let i = 0; i < items.length; i++) {
//       const business = items[i];


//       const arrangeitems= document.createElement('a');
//       arrangeitems.href='businessProfile.html'
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

 function getUrlParameter(name) {
            name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

        // Get the business data from the URL query parameter

    // Display business information
// Handle error (e.g., display an error message)
const images = getUrlParameter('images');

// Deserialize the serialized array back into an array
const myImages  = JSON.parse(images );

 var businessName = getUrlParameter('businessName');
  var longitude =JSON.parse( getUrlParameter('longitude'));

  var latitude =JSON.parse( getUrlParameter('latitude'));

  var aboutData= getUrlParameter('about');

  var phoneNo = getUrlParameter('phoneNo');

  var emailData = getUrlParameter('email');

 var listingsId = getUrlParameter('listingId');
 var businessOwnerIds= getUrlParameter('userid');
  var openingtime = getUrlParameter('openingtime');
    var closingtime = getUrlParameter('closingtime');

  var industrys = getUrlParameter('industry');

  var businessAddress = getUrlParameter('businessAddress');

function getProfile(){


const about = document.getElementById('aboutTextMyListings');
       const address = document.getElementById('contactInfoAddressMyListings');
        const email= document.getElementById('contactInfoemailMyListings');
        //  const container= document.getElementById('about-video');
       //  const rating2 = document.getElementById('rating2');
        const businessNameh2= document.getElementById('businessNameh2MyListings');
     const no = document.getElementById('contactInfoNumberMyListings');
       const timeToOpen  = document.getElementById('timeToOpenMyListings');
       const timeToClose = document.getElementById('timeToCloseMyListings');
//         const image = document.getElementById('vidImage');

       const image = document.getElementById('image');
console.log( myImages[0])
        const donateBtn = document.getElementById('share2');
        const element = document.getElementById('myElements');
     const imageUrl = myImages[0];


// //Set the background image using inline CSS
 element.style.backgroundImage = `url(${imageUrl})`;

     element.setAttribute('data-setbg', imageUrl);
// if(donate && donate==='Yes'){
//   donateBtn.style.display = 'none';
// }else{
//    donateBtn.style.display = 'block';
//}

     businessNameh2.textContent =  businessName;
       timeToOpen.textContent =  openingtime;
        timeToClose.textContent = closingtime;
        email.textContent = emailData ;
       no.textContent = phoneNo;
       address.textContent = businessAddress;
         about.textContent =  aboutData;

    //  const location = new google.maps.LatLng( latitude,  longitude);
    //         const marker = new google.maps.Marker({
    //             position: location,
    //             map: map2,
    //             title:businessAddress
    //         });

}

getProfile()
function display(){


        for (let i = 0; i < myImages.length; i++) {
            const img = document.createElement('img');
            img.src = myImages[i];
            img.classList.add('IMAGEURL')
           document.querySelector(".about-video").appendChild(img)
        }
}

display()

function reviews(){


// var  reviewH2 = document.getElementById('review');
 var  reviewerName = document.getElementById('reviewerName');
 var  reviewText = document.getElementById('reviewText');
  var  reviewTime = document.getElementById('reviewTime');


 fetch('http://localhost:8000/getReviews', {
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
// }
function initMap2() {
  var coordinates = {
    lat: latitude,
    lng:longitude
  };
  geocoder = new google.maps.Geocoder();
 map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 17,
    center: coordinates,
    scrollwheel: false
  });
   const location = new google.maps.LatLng( latitude,  longitude);
            const marker = new google.maps.Marker({
                position: location,
                map: map2,
                title:businessName
            });
            marker.setMap(map2)

    }
initMap2()

function toggleEdit() {
            const header = document.getElementById('businessNameh2MyListings');
            const editButton = document.querySelector('button');

            if (header.tagName === 'H2') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = header.textContent && header.textContent.trim(); // Check if header.textContent exists before calling trim()
                input.addEventListener('keyup', function(event) {
                    if (event.key === 'Enter') {
                        updateData(input.value);
                    }
                });
                header.replaceWith(input);
                editButton.textContent = 'Save';
            } else {
                const newValue = header.value.trim();
                updateData(newValue);
            }
   }

function toggleEditopentime() {
            const header = document.getElementById('timeToOpenMyListings');
            const editButton = document.getElementById('editopentime');

            if (header.tagName === 'DIV') {
                const input = document.createElement('input');
                input.type = 'time';
                input.value = header.textContent && header.textContent.trim(); // Check if header.textContent exists before calling trim()
                input.addEventListener('keyup', function(event) {
                    if (event.key === 'Enter') {
                        updateData(input.value);
                    }
                });
                header.replaceWith(input);
                editButton.textContent = 'Save';
            } else {
                const newValue = header.value;
                updateData(newValue);
            }
    }

function toggleEditclosetime() {
            const header = document.getElementById('timeToCloseMyListings');
            const editButton = document.getElementById('editclosetime');

            if (header.tagName === 'DIV') {
                const input = document.createElement('input');
                input.type = 'time';
                input.placeholder='00.00'
                input.value = header.textContent && header.textContent.trim(); // Check if header.textContent exists before calling trim()
                input.addEventListener('keyup', function(event) {
                    if (event.key === 'Enter') {
                        updateData(input.value);
                    }
                });
                header.replaceWith(input);
                editButton.textContent = 'Save';
            } else {
                const newValue = header.value.trim();
                // updateData(newValue);
            }
    }

 function toggleEditAbout() {
            const header = document.getElementById('aboutTextMyListings');
            const editButton = document.getElementById('editAbout');

            if (header.tagName === 'P') {
                const input = document.createElement('textarea');
                input.type = 'text';
                // input.placeholder='00.00'
                input.value = header.textContent && header.textContent.trim(); // Check if header.textContent exists before calling trim()
                input.addEventListener('keyup', function(event) {
                    if (event.key === 'Enter') {
                        updateData(input.value);
                    }
                });
                header.replaceWith(input);
                editButton.textContent = 'Save';
            } else {
                const newValue = header.value.trim();
                // updateData(newValue);
            }
    }

 function toggleEditAddress() {
            const header = document.getElementById('contactInfoAddressMyListings');
            const editButton = document.getElementById('editAddress');

            if (header.tagName === 'SPAN') {
                const input = document.createElement('input');
                input.type = 'text';
                // input.placeholder='00.00'
                input.value = header.textContent && header.textContent.trim(); // Check if header.textContent exists before calling trim()
                input.addEventListener('keyup', function(event) {
                    if (event.key === 'Enter') {
                        updateData(input.value);
                    }
                });
                header.replaceWith(input);
                editButton.textContent = 'Save';
            } else {
                const newValue = header.value.trim();
                // updateData(newValue);
            }
      }

 function toggleEditNumber() {
            const header = document.getElementById('contactInfoNumberMyListings');
            const editButton = document.getElementById('editNumber');

            if (header.tagName === 'LI') {
                const input = document.createElement('input');
                input.type = 'text';
                // input.placeholder='00.00'
                input.value = header.textContent && header.textContent.trim(); // Check if header.textContent exists before calling trim()
                input.addEventListener('keyup', function(event) {
                    if (event.key === 'Enter') {
                        updateData(input.value);
                    }
                });
                header.replaceWith(input);
                editButton.textContent = 'Save';
            } else {
                const newValue = header.value.trim();
                // updateData(newValue);
            }
      }

 function toggleEditEmail() {
            const header = document.getElementById('contactInfoemailMyListings');
            const editButton = document.getElementById('editEmail');

            if (header.tagName === 'LI') {
                const input = document.createElement('input');
                input.type = 'text';
                // input.placeholder='00.00'
                input.value = header.textContent && header.textContent.trim(); // Check if header.textContent exists before calling trim()
                input.addEventListener('keyup', function(event) {
                    if (event.key === 'Enter') {
                        updateData(input.value);
                    }
                });
                header.replaceWith(input);
                editButton.textContent = 'Save';
            } else {
                const newValue = header.value.trim();
                updateData(newValue);
            }
      }

 async function updateData(newValue) {

            try {
                const response = await fetch('http://localhost:8000/updateData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ newValue,selectedBusinessId ,userUid  })
                });

                if (response.ok) {
                    const updatedValue = await response.text();
                    document.getElementById('businessNameh2MyListings').textContent = updatedValue;
                    alert('Data updated successfully!');
                } else {
                    console.error('Failed to update data');
                    alert('Failed to update data. Please try again.');
                }
            } catch (error) {
                console.error('Error updating data:', error);
                alert('An error occurred while updating data. Please try again later.');
            }
      }

editButton.addEventListener('click', () => {
  editInputh2.value = businessNameh2MyListings.textContent;
businessNameh2MyListings.style.display = 'none';
  editInputh2.style.display = 'block';
  editButton.style.display = 'none';
  saveButton.style.display = 'inline-block';

});

saveButton.addEventListener('click', () => {
  const newValue = editInputh2.value;
 businessNameh2MyListings.style.display = 'block';
 editInputh2.style.display = 'none';
 editButton.style.display = 'inline-block';
 saveButton.style.display = 'none';
  // Update Firestore with the new value
  fetch('http://localhost:8000/updateh2',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({newValue, ownerId:businessOwnerIds ,listingId:listingsId})
  })
  .then(response => response.json())
  .then(data => {
 console.log('Value updated successfully:', data);

 businessNameh2MyListings.textContent = newValue;
 businessNameh2MyListings.style.display = 'block';
 editInputh2.style.display = 'none';
 editButton.style.display = 'inline-block';
 saveButton.style.display = 'none';
  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
});

editButtonopen.addEventListener('click', () => {
  editInputopen.value = timeToOpenMyListings.textContent;
  timeToOpenMyListings.style.display = 'none';
  editInputopen.style.display = 'block';
  editButtonopen.style.display = 'none';
  saveButtonopen.style.display = 'inline-block';
});

saveButtonopen.addEventListener('click', () => {
  const newValue = editInputopen.value;
 timeToOpenMyListings.textContent = newValue;
timeToOpenMyListings.style.display = 'block';
    editInputopen.style.display = 'none';
    editButtonopen.style.display = 'inline-block';
    saveButtonopen.style.display = 'none';
  // Update Firestore with the new value

  fetch('http://localhost:8000/updateopen', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify

    ({newValue, ownerId:businessOwnerIds ,listingId:listingsId})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Value updated successfully:', data);
    // Update the UI
    timeToOpenMyListings.textContent = newValue;
    timeToOpenMyListings.style.display = 'block';
    editInputopen.style.display = 'none';
    editButtonopen.style.display = 'inline-block';
    saveButtonopen.style.display = 'none';
  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
});

  editButtonclose.addEventListener('click', () => {
  editInputclose.value = timeToCloseMyListings.textContent;
  timeToCloseMyListings.style.display = 'none';
  editInputclose.style.display = 'block';
  editButtonclose.style.display = 'none';
  saveButtonclose.style.display = 'inline-block';
});

saveButtonclose.addEventListener('click', () => {
  const newValue = editInputclose.value;

    timeToCloseMyListings.style.display = 'block';
    editInputclose.style.display = 'none';
    editButtonclose.style.display = 'inline-block';
    saveButtonclose.style.display = 'none';
  // Update Firestore with the new value
  fetch('http://localhost:8000/updateclose', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({newValue, ownerId:businessOwnerIds ,listingId:listingsId})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Value updated successfully:', data);
    // Update the UI
    timeToCloseMyListings.textContent = newValue;
    timeToCloseMyListings.style.display = 'block';
    editInputclose.style.display = 'none';
    editButtonclose.style.display = 'inline-block';
    saveButtonclose.style.display = 'none';
  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
});

  editButtonAddress.addEventListener('click', () => {
  editInputAddress.value = contactInfoAddressMyListings.textContent;
  contactInfoAddressMyListings.style.display = 'none';
  editInputAddress.style.display = 'block';
  editButtonAddress.style.display = 'none';
  saveButtonAddress.style.display = 'inline-block';
});

saveButtonAddress.addEventListener('click', () => {
  const newValue = editInputAddress.value;

    contactInfoAddressMyListings.style.display = 'block';
    editInputAddress.style.display = 'none';
    editButtonAddress.style.display = 'inline-block';
    saveButtonAddress.style.display = 'none';
  // Update Firestore with the new value
  fetch('http://localhost:8000/updateAddress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({newValue, ownerId:businessOwnerIds ,listingId:listingsId})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Value updated successfully:', data);
    // Update the UI
    contactInfoAddressMyListings.textContent = newValue;
    contactInfoAddressMyListings.style.display = 'block';
    editInputAddress.style.display = 'none';
    editButtonAddress.style.display = 'inline-block';
    saveButtonAddress.style.display = 'none';
  })
  .catch(error => {
    console.error('Error updating value:', error);
  });

});

editButtonNumber.addEventListener('click', () => {
  editInputNumber.value = contactInfoNumberMyListings.textContent;
 contactInfoNumberMyListings.style.display = 'none';
  editInputNumber.style.display = 'block';
  editButtonNumber.style.display = 'none';
  saveButtonNumber.style.display = 'inline-block';
});

saveButtonNumber.addEventListener('click', () => {
  const newValue = editInputNumber.value;
contactInfoNumberMyListings.style.display = 'block';
    editInputNumber.style.display = 'none';
    editButtonNumber.style.display = 'inline-block';
    saveButtonNumber.style.display = 'none';
  // Update Firestore with the new value
  fetch('http://localhost:8000/updateNumber', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({newValue, ownerId:businessOwnerIds ,listingId:listingsId})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Value updated successfully:', data);
    // Update the UI
contactInfoNumberMyListings.textContent = newValue;
contactInfoNumberMyListings.style.display = 'block';
    editInputNumber.style.display = 'none';
    editButtonNumber.style.display = 'inline-block';
    saveButtonNumber.style.display = 'none';
  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
});

editButtonemail.addEventListener('click', () => {
  editInputemail.value = contactInfoemailMyListings.textContent;
 contactInfoemailMyListings.style.display = 'none';
  editInputemail.style.display = 'block';
  editButtonemail.style.display = 'none';
  saveButtonemail.style.display = 'inline-block';
});

saveButtonemail.addEventListener('click', () => {
  const newValue = editInputemail.value;
   contactInfoemailMyListings.style.display = 'block';
    editInputemail.style.display = 'none';
    editButtonemail.style.display = 'inline-block';
    saveButtonemail.style.display = 'none';
  // Update Firestore with the new value
  fetch('http://localhost:8000/updateEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({newValue, ownerId:businessOwnerIds ,listingId:listingsId})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Value updated successfully:', data);
    // Update the UI
contactInfoemailMyListings.textContent = newValue;
contactInfoemailMyListings.style.display = 'block';
    editInputemail.style.display = 'none';
    editButtonemail.style.display = 'inline-block';
    saveButtonemail.style.display = 'none';
  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
});

editButtonAbout.addEventListener('click', () => {
  editInputAbout.value = aboutTextMyListings.textContent;
  aboutTextMyListings.style.display = 'none';
  editInputAbout.style.display = 'block';
  editButtonAbout.style.display = 'none';
  saveButtonAbout.style.display = 'inline-block';
});

saveButtonAbout.addEventListener('click', () => {
  const newValue = editInputAbout.value;
  aboutTextMyListings.style.display = 'block';
    editInputAbout.style.display = 'none';
    editButtonAbout.style.display = 'inline-block';
    saveButtonAbout.style.display = 'none';
  // Update Firestore with the new value
  fetch('http://localhost:8000/updateAbout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({newValue, ownerId:businessOwnerIds ,listingId:listingsId})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Value updated successfully:', data);
    // Update the UI
    aboutTextMyListings.textContent = newValue;
    aboutTextMyListings.style.display = 'block';
    editInputAbout.style.display = 'none';
    editButtonAbout.style.display = 'inline-block';
    saveButtonAbout.style.display = 'none';
  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
});