let businesseListed = JSON.parse(localStorage.getItem('userBusiness'))
let myListings = document.getElementById('myListings');

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
const about = document.getElementById('aboutTextMyListings');
const address = document.getElementById('contactInfoAddressMyListings');
const email= document.getElementById('contactInfoemailMyListings');
//  const container= document.getElementById('about-video');
//  const rating2 = document.getElementById('rating2');
const businessNameh2= document.getElementById('businessNameh2MyListings');
const no = document.getElementById('contactInfoNumberMyListings');
const timeToOpen  = document.getElementById('timeToOpenMyListings');
const timeToClose = document.getElementById('timeToCloseMyListings');
//const image = document.getElementById('vidImage');
const image = document.getElementById('image');
const donateBtn = document.getElementById('share2');
const element = document.getElementById('myElements');
var shareSave = document.getElementById('shareSave');
var shareEdit = document.getElementById('shareEdit');
var accountNumber = document.getElementById('accountNumber')
var rollingindicator2=document.getElementById('rolling-indicator2')

 const imgCont2 = document.getElementById('imagePreview2');
 console.log(imgCont2)
// var bankName=document.getElementById('bank')
// Set the image URL
let listingId=selectedBusinessData.listingId

// console.log(selectedBusinessId )

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

//           for (let i = 0; i < items.length; i++) {
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
//           navigateToUserProfile(business.data.userid,business.data.listingId);

//       });

//        console.log(items)
//   }
//     })
//     .catch(error => {
//       console.log('Error fetching items:', error);
//     });
var signedupAlready=  localStorage.getItem('signedup');

 function getUrlParameter(name) {
            name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

var listingsId = getUrlParameter('listingid');
var businessOwnerIds = getUrlParameter('id');

function getUserProfile(){
fetch('/api/getSingleProfile2', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ listingId: listingsId, businessOwnerId: businessOwnerIds})
})
.then(response => response.json())
.then(userData => {

 let imageUrl = userData.Images && userData.Images.length > 0 ?userData.Images[0]:'img/mPagesDesigns.png'
    //  element.setAttribute('data-setbg', imageUrl);
     element.style.backgroundImage = `url(${imageUrl})`;

element.style.backgroundRepeat = 'no-repeat';
 element.style.backgroundSize = 'cover';
element.style.backgroundPosition = 'top';
     businessNameh2.textContent =  userData.businessName.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
       timeToOpen.textContent =  userData.openingtime;
        timeToClose.textContent = userData.closingtime;
        email.textContent = userData.email ;
       no.textContent = userData.phoneNo;
       address.textContent = userData.businessAddress.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
         about.textContent =  userData.about;

initMap2(userData)
display(userData)

fetchDonate1(userData)

  console.log('User Data:', userData);

})
.catch(error => {
  console.error('Error fetching user data:', error);
});
}

getUserProfile()



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

if (signedupAlready) {

myListings.href = "my-listings.html"
   } else {
myListings.href = "no-listings.html"
    }


 function shareOnFacebook() {
      const url = `single-listing.html?id=${businessOwnerIds}&listingid=${listingsId}`;
       const title = encodeURIComponent('M.PAGES'); // Replace 'YOUR_TITLE' with the title you want to share on Facebook
    const description = encodeURIComponent('Check out my business on m.pages, the No1 Muslim Online Business Directory, with over 40million ready Muslim Customers. Contact me in the link here:')


    // Construct the Facebook share link with the app link format
    const shareLink = `fb://share/?link=${url}&title=${title}&description=${description}`;

    // Open the Facebook app if available, otherwise open in browser
    window.open(shareLink, '_blank');
    }

function shareOnTwitter() {
      const url = `single-listing.html?id=${businessOwnerIds}&listingid=${listingsId}`;
    const text = encodeURIComponent('Check out my business on m.pages, the No1 Muslim Online Business Directory, with over 40million ready Muslim Customers. Contact me in the link here:');
     // Replace 'YOUR_TEXT' with the text you want to share on Twitter
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');

}

function shareOnLinkedin() {
      const url = `single-listing.html?id=${businessOwnerIds}&listingid=${listingsId}`;
      window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title='Check out my business on m.pages, the No1 Muslim Online Business Directory, with over 40million ready Muslim Customers. Contact me in the link here:'`, '_blank');
    }

//&description=${description}

 function shareOnPinterest() {
      const url = `single-listing.html?id=${businessOwnerIds}&listingid=${listingsId}`;
    const media = encodeURIComponent('IMAGE_URL'); // Replace 'IMAGE_URL' with the URL of the image you want to share
      const description = encodeURIComponent('Check out my business on m.pages, the No1 Muslim Online Business Directory, with over 40million ready Muslim Customers. Contact me in the link here:'); // Replace 'DESCRIPTION' with a description of the image
    window.open(`https://www.pinterest.com/pin/create/button/?url=${url}&description=${description}`, '_blank');
}

  function shareOnWhatsApp() {
      const url = `single-listing.html?id=${businessOwnerIds}&listingid=${listingsId}`;
      window.open(`https://api.whatsapp.com/send?text=Check%20out%20my%20business%20on%20m.pages%20,%20the%20No1.%20Muslim%20Online%20Business%20Directory%20,%20with%20over%2040million%20ready%20Muslim%20Customers.%20Contact%20me%20in%20the%20link%20here:%20${url}`, '_blank');
    }

function display(userData) {
    let myImages = userData.Images;

    myImages.forEach(image => {
      var deleteImg = document.createElement('p');
        deleteImg.innerHTML = "&times;";
          deleteImg.classList.add('deleteImg');
         deleteImg.style.cursor = "pointer";

        deleteImg.style.backgroundColor = "#000";
        // deleteImg.style.borderRadius = "50%";
        deleteImg.style.width = "20px";
        deleteImg.style.height = "20px";
        deleteImg.style.textAlign = "center";
        deleteImg.style.lineHeight = "20px";
        deleteImg.style.color = "#fff";
        deleteImg.style.marginBottom = "10px";

        deleteImg.onclick =async function removeItem(itemId) {
    try {
        const response = await fetch('/api/removeFromArray', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                itemId:image,
                userId: userData.userid,
                listingId: userData.listingId,
            })
        });

        if (response.ok) {
            alert('Item removed from array successfully');
            window.location.reload();
        } else {
            console.error('Failed to remove item from array:', response.statusText);
            alert('Failed to remove item from array');
        }
    } catch (error) {
        console.error('Error removing item from array:', error);
        alert('Error removing item from array');
    }

        }
        const img = document.createElement('img');
        img.src = image;
        img.classList.add('IMAGEURL');
                document.querySelector(".about-video").appendChild(deleteImg );
        document.querySelector(".about-video").appendChild(img);
    });


}

async function fetchDonate1(userData) {

let hideDonateTotal= document.getElementById('hideDonateTotal');
  if (userData && userData.donation === "Yes") {
        hideDonateTotal.style.display = "inline-flex";
    } else {
        hideDonateTotal.style.display = "none";

    }
}

function onwithdraw() {
  alert('Feature will be available soon.')
  // document.getElementById("overlay3").style.display = "block";
}

function offwithdraw() {

const accountNumber = document.getElementById('accountNumber');
const accountNumber2 = document.getElementById('accountNumber2')
const accountName= document.getElementById('accountName');
const bankName = document.getElementById('bank');
const bankName2 = document.getElementById('bankName2');
let bankCode = document.getElementById('bankCode')
let Available = document.getElementById('Available')
let Available2 = document.getElementById('Available2');

accountNumber.textContent =''
accountNumber2.textContent =''
accountName.textContent=''
bankName.textContent='Choose Bank'
bankName2.textContent=''
bankCode.textContent='Bank Code'
Available.textContent='0.00'
Available2.textContent=''
document.getElementById("popupReview3").style.display = "block";
 document.getElementById("popupReview4").style.display = "none";
 document.getElementById("overlay3").style.display = "none";

}


async function verifyAccount() {
const accountNumber = document.getElementById('accountNumber').value;
const accountNumber2 = document.getElementById('accountNumber2')
const accountName= document.getElementById('accountName');
const bankName = document.getElementById('bank').textContent;
const bankName2 = document.getElementById('bankName2');
let bankCode = document.getElementById('bankCode').textContent
 let Available = document.getElementById('Available').textContent;
  let Available2 = document.getElementById('Available2');
console.log(bankCode)
      try {
                    const response = await fetch('/verify-account', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ accountNumber, bankCode })
                    });
                    const data = await response.json();
                    const nameAcc=data.accountName.charAt(0).toUpperCase() + data.accountName.slice(1).toLowerCase();
                    if (response.ok) {
                         accountName.textContent = data.accountName;
                        accountNumber2.textContent = accountNumber;
                        bankName2.textContent= bankName
                        Available2.textContent= Available
   document.getElementById("popupReview3").style.display = "none";
  document.getElementById("popupReview4").style.display = "block";
                    } else {
                       alert(data.error || 'Something went wrong');
                         document.getElementById("popupReview3").style.display = "block";
  document.getElementById("popupReview4").style.display = "none";

                    }
                } catch (error) {
                    console.error('Error:', error);
                   alert('Failed to verify account');
  document.getElementById("popupReview3").style.display = "block";
  document.getElementById("popupReview4").style.display = "none";
                }


 }

// async function createRecipient() {
//  var accountNumber = document.getElementById('accountNumber').value
//  var bankCode = document.getElementById('bankCode').value
//  var name = document.getElementById('accountName').value

//     try {
//         const response = await fetch('/create-recipient', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ accountNumber, bankCode, name})
//         });
//         const data = await response.json();
//           initiateTransfer(data)// Handle recipient code as needed
//     } catch (error) {
//         console.error('Error creating recipient:', error);
//     }
//   document.getElementById("popupReview4").style.display = "none";
//   document.getElementById("popupReview5").style.display = "block";
// }
async function withdraw() {
   var amount=  document.getElementById("Available2").textContent;
   var name=  document.getElementById("accountName").textContent;
   var accountNumber=  document.getElementById("accountNumber2").textContent;
   var bankCode=  document.getElementById("bankCode").textContent;

      try {
                    const response = await fetch('/complete-transaction', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ accountNumber, bankCode, name, amount })
                    });
                    const data = await response.json();

                    if (response.ok) {
                        // Handle successful transfer
                        alert('Transfer successful:', data);

  document.getElementById("popupReview4").style.display = "none";
  document.getElementById("popupReview5").style.display = "block";
                    } else {
                       alert('Something went wrong, try again in a few minutes');


  document.getElementById("popupReview5").style.display = "none";
  document.getElementById("popupReview4").style.display = "block";
                    }
                } catch (error) {
                    alert('Something went wrong, try again in a few minutes');
                    // errorDiv.textContent = 'Failed to complete transaction';

  document.getElementById("popupReview5").style.display = "none";
  document.getElementById("popupReview4").style.display = "block";
                }
}

async function fetchDonate2() {
  let Total = document.getElementById('Total');
  let Available = document.getElementById('Available');
  let withdraw = document.getElementById('withdraw');
  let totalAmount = 0;
  try {
    const response = await fetch('https://www.mpageshub.com/getDonations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ listingId: listingsId, ownerId: businessOwnerIds })
    });
    const data = await response.json();
   data.forEach((donation) => {
    let amount = parseFloat(donation.amount); // Convert string to number
    totalAmount += amount;
});
    if (totalAmount !== 0) {
      Available.textContent = "#" + (totalAmount * 0.9).toFixed(2); // Ensure toFixed(2) for two decimal places
      Total.textContent = "#" + totalAmount.toFixed(2);
      withdraw.style.display = 'block';
    } else {
      Available.textContent = '0.00';
      Total.textContent = '0.00';
      // withdraw.style.display = 'none';
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

fetchDonate2()




function previewImages(event) {
  let selectedFiles = [];

    var imgCont = document.getElementById('imagePreview2');
    for (let i = 0; i < event.target.files.length; i++) {
        selectedFiles.push(event.target.files[i]);
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
        //deleteImg.onclick = function() {
          //  removeImage(index);
        //};
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

// function testB(){
//     var loaderId = document.getElementById('indicatorButton');
//     var shareSave = document.getElementById('shareSave');
//     loaderId.style.display='block'
//  shareSave.style.display='none'
// }

// function testB2(){
//     var loaderId = document.getElementById('indicatorButton');
//     var shareSave = document.getElementById('shareSave');
//     loaderId.style.display='inline-block'
//  shareSave.style.display='none'
// }

async function updateImage() {
 var fileInput = document.getElementById('fileImage');
    var imgCont = document.getElementById('imagePreview2');
    var loaderId = document.getElementById('indicatorButton');
    var shareSave = document.getElementById('shareSave');
  var shareEdit = document.getElementById('shareEdit');
var editIcon1 = document.querySelector(".my-selector1")
var editIcon2 = document.querySelector(".my-selector2")
var editIcon3 = document.querySelector(".my-selector3")
var editIcon4 = document.querySelector(".my-selector4")
var editIcon5 = document.querySelector(".my-selector5")
var editIcon6 = document.querySelector(".my-selector6")
var editIcon7 = document.querySelector(".my-selector7")

    const files = fileInput.files;

    if (files.length === 0) {

  shareEdit.style.display='block'
  shareSave.style.display='none'
  editIcon1.style.display='none'
  editIcon2.style.display='none'
  editIcon3.style.display='none'
  editIcon4.style.display='none'
  editIcon5.style.display='none'
  editIcon6.style.display='none'
  editIcon7.style.display='none'
 return;
    }

    if (files.length > 5) {
        alert("You can only select a maximum of 5 images.");
        return;
    }
 loaderId.style.display='inline-block'
 shareSave.style.display='none'
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
    }

    formData.append('userId', businessOwnerIds);
    formData.append('listingId', listingsId);

    try {
        const response = await fetch('/addImages3', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Uploaded images:', data);
             loaderId.style.display='none'
              shareSave.style.display='block'
           imgCont.innerHTML='';
            window.location.reload();


        } else {
            throw new Error('Failed to upload images');
        }
    } catch (error) {
           imgCont.innerHTML='';
           window.location.reload();


        console.error('Error uploading images:', error);
        // alert('Error uploading images');
    }
}

async function showEdit() {
var editIcon1 = document.querySelector(".my-selector1")
var editIcon2 = document.querySelector(".my-selector2")
var editIcon3 = document.querySelector(".my-selector3")
var editIcon4 = document.querySelector(".my-selector4")
var editIcon5 = document.querySelector(".my-selector5")
var editIcon6 = document.querySelector(".my-selector6")
var editIcon7 = document.querySelector(".my-selector7")
 var shareSave = document.getElementById('shareSave');
  var shareEdit = document.getElementById('shareEdit');
  shareEdit.style.display='none'
  shareSave.style.display='block'
  editIcon1.style.display='block'
  editIcon2.style.display='block'
  editIcon3.style.display='block'
  editIcon4.style.display='block'
  editIcon5.style.display='block'
  editIcon6.style.display='block'
  editIcon7.style.display='block'
}

async function opengallery() {
var editIcon1 = document.querySelector(".my-selector1")
var editIcon2 = document.querySelector(".my-selector2")
var editIcon3 = document.querySelector(".my-selector3")
var editIcon4 = document.querySelector(".my-selector4")
var editIcon5 = document.querySelector(".my-selector5")
var editIcon6 = document.querySelector(".my-selector6")
var editIcon7 = document.querySelector(".my-selector7")
 var shareSave = document.getElementById('shareSave');
  var shareEdit = document.getElementById('shareEdit');
  // var openImage=document.getElementById('fileImage')
  // openImage.click();
  shareEdit.style.display='none'
  shareSave.style.display='block'
  editIcon1.style.display='block'
  editIcon2.style.display='block'
  editIcon3.style.display='block'
  editIcon4.style.display='block'
  editIcon5.style.display='block'
  editIcon6.style.display='block'
  editIcon7.style.display='block'

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

// function previewImages(event) {
//     const files = event.target.files;
//     const imagePreview = document.getElementById('imagePreview2');

//     // Combine the files from both sets into a single array
//     const allFiles = [...files];

//     // Loop through the combined files
//     for (let i = 0; i < allFiles.length; i++) {
//         const file = allFiles[i];
//         const reader = new FileReader();

//         // Read the file as a data URL
//         reader.readAsDataURL(file);

//         // Callback function when reading is done
//         reader.onload = function(e) {
//             // Create an img element for each file
//             const img = document.createElement('img');
//             img.src = e.target.result;

//             // Append the img element to the imagePreview container
//             imagePreview.appendChild(img);
//         }
//     }
// }


 async function updateData(newValue) {

            try {
                const response = await fetch('https://www.mpageshub.com/updateData', {
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

async function editButtontoUpdate(){
  editInputh2.value = businessNameh2MyListings.textContent;
  businessNameh2MyListings.style.display = 'none';
  editInputh2.style.display = 'block';
  editButton.style.display = 'none';
  saveButton.style.display = 'inline-block';
}

async function editButtontoSave(){
 const newValue = editInputh2.value;
 var shareSave = document.getElementById('shareSave');
 var shareEdit = document.getElementById('shareEdit');
 businessNameh2MyListings.style.display = 'block';
 editInputh2.style.display = 'none';
 editButton.style.display = 'inline-block';
 saveButton.style.display = 'none';
  // Update Firestore with the new value
  fetch('https://www.mpageshub.com/updateh2',{
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
 //businessNameh2MyListings.style.display = 'block';
//  editInputh2.style.display = 'none';
//  editButton.style.display = 'inline-block';
//  saveButton.style.display = 'none';
// shareSave.style.display = 'block';
// shareEdit.style.display = 'none'

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
  location.reload();
}

async function openButtontoUpdate(){
    editInputopen.value = timeToOpenMyListings.textContent;
  timeToOpenMyListings.style.display = 'none';
  editInputopen.style.display = 'block';
  editButtonopen.style.display = 'none';
  saveButtonopen.style.display = 'inline-block';
}

async function openButtontoSave(){

  const newValue = editInputopen.value;
 timeToOpenMyListings.textContent = newValue;
timeToOpenMyListings.style.display = 'block';
    editInputopen.style.display = 'none';
    editButtonopen.style.display = 'inline-block';
    saveButtonopen.style.display = 'none';
  // Update Firestore with the new value

  fetch('https://www.mpageshub.com/updateopen', {
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
    // timeToOpenMyListings.style.display = 'block';
    // editInputopen.style.display = 'none';
    // editButtonopen.style.display = 'inline-block';
    // saveButtonopen.style.display = 'none';

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
location.reload();
}

async function closeButtontoUpdate(){
  editInputclose.value = timeToCloseMyListings.textContent;
  timeToCloseMyListings.style.display = 'none';
  editInputclose.style.display = 'block';
  editButtonclose.style.display = 'none';
  saveButtonclose.style.display = 'inline-block';
}

async function closeButtontoSave(){

  const newValue = editInputclose.value;

    timeToCloseMyListings.style.display = 'block';
    editInputclose.style.display = 'none';
    editButtonclose.style.display = 'inline-block';
    saveButtonclose.style.display = 'none';
  // Update Firestore with the new value
  fetch('https://www.mpageshub.com/updateclose', {
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
    // timeToCloseMyListings.style.display = 'block';
    // editInputclose.style.display = 'none';
    // editButtonclose.style.display = 'inline-block';
    // saveButtonclose.style.display = 'none';

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
location.reload();
}

async function addressButtontoUpdate(){
   editInputAddress.value = contactInfoAddressMyListings.textContent;
  contactInfoAddressMyListings.style.display = 'none';
  editInputAddress.style.display = 'block';
  editButtonAddress.style.display = 'none';
  saveButtonAddress.style.display = 'inline-block';

}

async function addressButtontoSave(){

  const newValue = editInputAddress.value;

    contactInfoAddressMyListings.style.display = 'block';
    editInputAddress.style.display = 'none';
    editButtonAddress.style.display = 'inline-block';
    saveButtonAddress.style.display = 'none';
  // Update Firestore with the new value
  fetch('https://www.mpageshub.com/updateAddress', {
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
    // contactInfoAddressMyListings.style.display = 'block';
    // editInputAddress.style.display = 'none';
    // editButtonAddress.style.display = 'inline-block';
    // saveButtonAddress.style.display = 'none';

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
location.reload();

}


async function numberButtontoUpdate(){
  editInputNumber.value = contactInfoNumberMyListings.textContent;
 contactInfoNumberMyListings.style.display = 'none';
  editInputNumber.style.display = 'block';
  editButtonNumber.style.display = 'none';
  saveButtonNumber.style.display = 'inline-block';
}

async function numberButtontoSave(){

  const newValue = editInputNumber.value;
contactInfoNumberMyListings.style.display = 'block';
    editInputNumber.style.display = 'none';
    editButtonNumber.style.display = 'inline-block';
    saveButtonNumber.style.display = 'none';
  // Update Firestore with the new value
  fetch('https://www.mpageshub.com/updateNumber', {
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
// contactInfoNumberMyListings.style.display = 'block';
//     editInputNumber.style.display = 'none';
//     editButtonNumber.style.display = 'inline-block';
//     saveButtonNumber.style.display = 'none';

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
  location.reload();

}

async function emailButtontoUpdate(){
  editInputemail.value = contactInfoemailMyListings.textContent;
 contactInfoemailMyListings.style.display = 'none';
  editInputemail.style.display = 'block';
  editButtonemail.style.display = 'none';
  saveButtonemail.style.display = 'inline-block';
}

async function emailButtontoSave(){

  const newValue = editInputemail.value;
   contactInfoemailMyListings.style.display = 'block';
    editInputemail.style.display = 'none';
    editButtonemail.style.display = 'inline-block';
    saveButtonemail.style.display = 'none';
  // Update Firestore with the new value
  fetch('https://www.mpageshub.com/updateEmail', {
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
// contactInfoemailMyListings.style.display = 'block';
//     editInputemail.style.display = 'none';
//     editButtonemail.style.display = 'inline-block';
//     saveButtonemail.style.display = 'none';

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
location.reload();
}

async function aboutButtontoUpdate(){
 editInputAbout.value = aboutTextMyListings.textContent;
  aboutTextMyListings.style.display = 'none';
  editInputAbout.style.display = 'block';
  editButtonAbout.style.display = 'none';
  saveButtonAbout.style.display = 'inline-block';
}


async function aboutButtontoSave(){

  const newValue = editInputAbout.value;
  aboutTextMyListings.style.display = 'block';
    editInputAbout.style.display = 'none';
    editButtonAbout.style.display = 'inline-block';
    saveButtonAbout.style.display = 'none';
  // Update Firestore with the new value
  fetch('https://www.mpageshub.com/updateAbout', {
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
    // aboutTextMyListings.style.display = 'block';
    // editInputAbout.style.display = 'none';
    // editButtonAbout.style.display = 'inline-block';
    // saveButtonAbout.style.display = 'none';

  })
  .catch(error => {
    console.error('Error updating value:', error);
  });
location.reload();
}

 function toggleOptionsbank() {
            var options = document.getElementById('bankoptions');
            options.style.display = (options.style.display === 'none' || options.style.display === '') ? 'block' : 'none';
  }

 function selectOption5(value) {
            var styledSelect = document.querySelector('.select-styled5');
            styledSelect.textContent = value;

            toggleOptionsbank();
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
    document.getElementById("overlaylisting").style.display = "none";


 } else {
        alert(`${data.error}`);
      }
}


  function closeIt() {
  document.getElementById("overlaylisting").style.display = "none";
}

  function openIt() {
  document.getElementById("overlaylisting").style.display = "block";
}
   function selectCodeOption(value) {
var bankCode = document.getElementById('bankCode')
            bankCode.textContent = value;


  }