const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyparser = require('body-parser');
const admin = require('firebase-admin');
const path =require('path')
const bodyParser = require('body-parser');
const axios = require('axios');
const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
const multer =require('multer');
const uuid = require('uuid-v4');

const publicPath=path.join(__dirname,'public')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath))
const storage = new Storage({
projectId:"mpages-6ed7a",
keyFilename: './mpages-6ed7a-firebase-adminsdk-4pvwm-26f9cafdd7.json',
});
app.use(express.json({ limit: "1000mb", extended: true }));
app.use(express.urlencoded({  limit: "1000mb", extended: true, parameterLimit: 50000}));
const { initializeApp} = require( "firebase/app");
const { auth} = require( "firebase/auth");
const serviceAccount = require('./mpages-6ed7a-firebase-adminsdk-4pvwm-26f9cafdd7.json');
app.set('view engine', 'ejs');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mpages-6ed7a-default-rtdb.firebaseio.com",
  storageBucket: "gs://mpages-6ed7a.appspot.com",
});
const { v4: uuidv4 } = require('uuid');

function generateUniqueId() {
    // Generate a random UUID
    return uuidv4();
}

// Example usage:
const uniqueId = generateUniqueId();
console.log(uniqueId); // Output: '3c40e28b-03b6-4695-b04d-2e0c59aa4c70'
const paystack='pk_test_733942352847369db55d32dc2b83d44db6b47fb1';//'pk_live_8db47ccef2cfc6bc1148849f867225a5de373772'
const bucketName =  "gs://mpages-6ed7a.appspot.com";
const db = admin.firestore();
const bucket = admin.storage().bucket();
// const storage = multer.memoryStorage()
// const upload = multer({storage:storage})
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory temporarily
});

const firebaseConfig = {
     apiKey: "AIzaSyDCeY-Tx9d2NKkPy_Vv1Qs3OwMWudqY8Ag",
          authDomain: "mpages-f2ff6.firebaseapp.com",
          projectId: "mpages-f2ff6",
          storageBucket: "mpages-f2ff6.appspot.com",
          messagingSenderId: "838976424438",
          appId: "1:838976424438:web:1c7ac4525119b361de9fd7"
};

initializeApp(firebaseConfig);
const cors = require('cors');
const allowedOrigins = ['https://www.mpageshub.com', 'https://www.mpageshub.com'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors(corsOptions));
// function uuidv4() {
//   return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
//     (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(5)
//   );
// }


//Upload image

app.post('/addBusiness',async (req, res, )=> {
    const businessName = req.body.businessName;
    const contactPerson = req.body.contactPerson;
    const businessAddress = req.body.businessAddress;
    const industry = req.body.industry;
    const openingtime = req.body.openingtime;
    const closingtime = req.body.closingtime;
    const phoneNo = req.body.phoneNo;
    const about = req.body.about;
    const email = req.body.email;
    const password = req.body.password;
    const lat =req.body.latitude;
    const lng =req.body.longitude;
    const signupStatus=req.body.signupStatus;
    const userids=req.body.userids;
    const donation=req.body.wantDonation


    const user={
    email:req.body.email,
    password:req.body.password,
   }

  try {

     const userSnapshot = await
     db.collection('Users') // Replace 'users' with your collection name
      .where('email', '==', email)
      .where('password', '==', password)
      .limit(1)
      .get();


    //   const imageUrls = [];

    // // Loop through each image
    // for (let i = 0; i < images.length; i++) {
    //   const image = images[i];

    //   // Define the path where the image will be stored in the bucket
    //   const imagePath = `Images/${image}`;

    //   // Upload the image to GCS
    //   await storage.bucket(bucketName).upload(image, {
    //     destination: imagePath,
    //     metadata: {
    //       contentType: 'image/jpeg', // Change this to the appropriate content type if needed
    //     },
    //   });

    //   // Get the URL of the uploaded image
    //   const imageUrl = `https://storage.googleapis.com/${bucketName}/${imagePath}`;
    //   imageUrls.push(imageUrl);
    // }
if (userSnapshot.empty) {
const userResponse = await admin.auth().createUser({
email:user.email,
password:user.password,
})


const addUsers =  db.collection('Users').doc(userids);
await addUsers.set({
fullName:contactPerson,
phoneNo: phoneNo,
email:email,
password: password,
userid:userids,
signupStatus:signupStatus,
created:admin.firestore.FieldValue.serverTimestamp(),
addListing:true,

});

const userListings =  db.collection('Users').doc( userids).collection('BusinessLists').doc(userids);
await  userListings.set({
 businessName:businessName,
 fullName: contactPerson,
 businessAddress: businessAddress,
 industry: industry,
 openingtime: openingtime,
 closingtime: closingtime,
 phoneNo: phoneNo,
 about: about,
 email: email,
 userid:userids,
  // images: uploadedUrls,
 timestamp: admin.firestore.FieldValue.serverTimestamp(),
  latitude:lat,
 longitude:lng,
 listingId:userids,
 donation:donation,

});

const businessDb =  db.collection('BusinessLists').doc(userids);
await businessDb.set({
 businessName:businessName,
 fullName: contactPerson,
 businessAddress: businessAddress,
 industry: industry,
 openingtime: openingtime,
 closingtime: closingtime,
 phoneNo: phoneNo,
 about: about,
 email: email,
 userid:userids,
 timestamp: admin.firestore.FieldValue.serverTimestamp(),
  // images: uploadedUrls,
  latitude:lat,
  longitude:lng,
  listingId:userids,
  donation:donation,


});
 return res.status(200).json({ userId:userids,userResponse});
 }
 else{
  return res.status(401).json({ error: 'User Exist, Login' });
    }

} catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }

});

// app.post('/addImages', upload.array('images'), async (req, res) => {
//     try {
//         const imageUrls = [];
//         const files = req.files;
//         const userids = req.body.userids;

//         for (const image of files) {
//             // Generate a unique file name for each image (you can customize this as needed)
//             const fileName = `images/${Date.now()}_${image.originalname}`;

//             // Upload the image to Firebase Storage
//             const file = bucket.file(fileName);
//             await file.save(image.buffer, {
//                 metadata: {
//                     contentType: image.mimetype,
//                 },
//             });

//             // Get the public URL of the uploaded image
//             const [imageUrl] = await file.getSignedUrl({ action: 'read', expires: '01-01-5000' });
//             imageUrls.push(imageUrl);
//         }

//         // Update Firestore documents with image URLs
//         const businessDb = db.collection('BusinessLists').doc(userids);
//         await businessDb.set({ Images: imageUrls }, { merge: true });

//         const businessDb2 = db.collection('Users').doc(userids).collection('BusinessLists').doc(userids);
//         await businessDb2.set({ Images: imageUrls }, { merge: true });

//         console.log('Images uploaded successfully');

//         res.json({ message: 'Images uploaded successfully', imageUrls });
//     } catch (error) {
//         console.error('Error uploading images to Firebase Storage:', error);
//         res.status(500).json({ error: 'Error uploading images to Firebase Storage' });
//     }
// });

app.post('/verify-account', async (req, res) => {
    try {
        // Get account number and bank code from the request body
        const { accountNumber, bankCode } = req.body;

        // Make a request to the Paystack API to verify the account
        const response = await axios.get(`https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`, {
            headers: {
                Authorization: paystack
            }
        });

        // Extract the account details from the response
       const accountName = response.data.data.account_name;

        // Respond with the account details
        res.json(accountName);
    } catch (error) {
        console.error('Error verifying account:', error.response.data);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/addBusiness2',async (req, res)=> {

    const businessName = req.body.businessName;
    const contactPerson = req.body.contactPerson;
    const businessAddress = req.body.businessAddress;
    const industry = req.body.industry;
    const openingtime = req.body.openingtime;
    const closingtime = req.body.closingtime;
    const phoneNo = req.body.phoneNo;
    const about = req.body.about;
    const email = req.body.email;
    const userId = req.body.userId;
    const userids = req.body.userids;
    const lat = req.body.latitude;
    const lng = req.body.longitude

     const donation=req.body.wantDonation
    // const files = req.files
// const userId=req.body.userId

  try {


const businessDb =  db.collection('BusinessLists').doc(uniqueId);
await businessDb.set({
 businessName:businessName,
 fullName: contactPerson,
 businessAddress: businessAddress,
 industry: industry,
 openingtime: openingtime,
 closingtime: closingtime,
 phoneNo: phoneNo,
 about: about,
 email: email,
 userid:userId,
timestamp: admin.firestore.FieldValue.serverTimestamp(),
// images:uploadedUrls,
latitude:lat,
longitude:lng,
 listingId:uniqueId,
donation:donation,

});

const userListings =  db.collection('Users').doc(userId).collection('BusinessLists').doc(uniqueId );
await  userListings.set({
 businessName:businessName,
 fullName: contactPerson,
 businessAddress: businessAddress,
 industry: industry,
 openingtime: openingtime,
 closingtime: closingtime,
 phoneNo: phoneNo,
 about: about,
 email: email,
 userid:userId,
//  images:uploadedUrls,
timestamp: admin.firestore.FieldValue.serverTimestamp(),
  latitude:lat,
 longitude:lng,
donation:donation,
  listingId:uniqueId,

});

const snapshot = await  db.collection('Users').doc(userId).collection('BusinessLists').get();
    // Extract data from the snapshot
    const businesses = [];
    snapshot.forEach(doc => {
      businesses.push({
      id: doc.id,
      data: doc.data()
});;


    });
// console.log(imageUrls)
  return res.status(200).json({ userId:userId,businesses,});

} catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }

});

// app.post('/addImages2', upload.array('images'), async (req, res) => {
//     const postid = req.body.postid;
//     const userUid = req.body.userUid;
//     console.log(userUid);
//     console.log(postid);
//     try {
//         const imageUrls = [];
//         const files = req.files;
//         for (const image of files) {
//             // Generate a unique file name for each image (you can customize this as needed)
//             const fileName = `images/${Date.now()}_${image.originalname}`;

//             // Upload the image to Firebase Storage
//             const file = bucket.file(fileName);
//             await file.save(image.buffer, {
//                 metadata: {
//                     contentType: image.mimetype,
//                 },
//             });

//             // Get the public URL of the uploaded image
//             const imageUrl = await file.getSignedUrl({ action: 'read', expires: '01-01-5000' });
//             imageUrls.push(imageUrl[0]);
//         }

//         // Update Firestore documents with image URLs
//         const businessDb = db.collection('BusinessLists').doc(uniqueId);
//         await businessDb.set({ Images: imageUrls }, { merge: true });

//         const businessDb2 = db.collection('Users').doc(userUid).collection('BusinessLists').doc(uniqueId);
//         await businessDb2.set({ Images: imageUrls }, { merge: true });

//         console.log('Images uploaded successfully');
//         res.json({ message: 'Images uploaded successfully', imageUrls });
//     } catch (error) {
//         console.error('Error uploading images to Firebase Storage:', error);
//         res.status(500).json({ error: 'Error uploading images to Firebase Storage' });
//     }
// });

// app.post('/addImages2', upload.array('images'), async (req, res) => {
//     const postid = req.body.postid;
//     const userUid = req.body.userUid;
//     console.log(userUid);
//     console.log(postid);
//     console.log(req.files)
//     try {
//         const imageUrls = [];
//         const files = req.files;
//         for (const image of files) {
//             const fileName = `images/${Date.now()}_${image.originalname}`;
//             const file = bucket.file(fileName);
//             await file.save(image.buffer, {
//                 metadata: {
//                     contentType: image.mimetype,
//                 },
//             });
//             const imageUrl = await file.getSignedUrl({ action: 'read', expires: '01-01-5000' });
//             imageUrls.push(imageUrl[0]);
//         }

//         const businessDb = db.collection('BusinessLists').doc(uniqueId);
//         await businessDb.set({ Images: imageUrls }, { merge: true });

//         const businessDb2 = db.collection('Users').doc(userUid).collection('BusinessLists').doc(uniqueId);
//         await businessDb2.set({ Images: imageUrls }, { merge: true });

//         console.log('Images uploaded successfully');
//         res.json({ message: 'Images uploaded successfully', imageUrls });
//     } catch (error) {
//         console.error('Error uploading images to Firebase Storage:', error);
//         res.status(500).json({ error: 'Error uploading images to Firebase Storage' });
//     }
// });
app.post('/addContact',async (req, res)=> {
    const name = req.body.name;
    const message = req.body.message;
     const subject = req.body.subject;
const email = req.body.email;

const businessDb =  db.collection('Messages');
await businessDb.add({
name:name,
message:message,
subject: subject,
email:email,

});
});
app.post('/NewsLetter',async (req, res)=> {

const email = req.body.email;

const businessDb =  db.collection('NewsLetter');
await businessDb.add({

email:email,

});
});

app.post('/register', async (req, res) => {
    const name = req.body.firstName;
    const phoneNo= req.body.phoneNo;
    const email = req.body.email;
    const password=req.body.password;

   const user={
   email:req.body.email,
   password:req.body.password,
}

  try {
    const userSnapshot = await
     db.collection('Users') // Replace 'users' with your collection name
      .where('email', '==', email)
      .where('password', '==', password)
      .limit(1)
      .get();

    if (!userSnapshot.empty) {
          return res.status(401).json({ error: 'User Exist, Login' });

 }
 else{
const userResponse = await admin.auth().createUser({
email:user.email,
password:user.password,
})

const businessDb =  db.collection('Users').doc(userResponse.uid);
await businessDb.set({
FullName:name,
phoneNo: phoneNo,
email:email,
password: password,
userid:userResponse.uid,

});
 return res.status(200).json({userId:userResponse.uid,userResponse});

    }
} catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/register2', async (req, res) => {

    const email = req.body.email;
    const password=req.body.password;

//     const user={
//    email:req.body.email,
//    password:req.body.password,
// }

  try {
    const userSnapshot = await
     db.collection('Users') // Replace 'users' with your collection name
      .where('email', '==', email)
      .where('password', '==', password)
      .limit(1)
      .get();

    if (!userSnapshot.empty) {
          return res.status(401).json({ error: 'User Exist, Login' });

 }

} catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password=req.body.password;
// Authenticate a user with Firebase Authentication
// admin.auth().signInWithEmailAndPassword(email, password)
//   .then(userCredential => {
//     // User is authenticated
//     const user = userCredential.user;
//     console.log(`User ${user.email} is authenticated`);
//   })
  try {
    const userSnapshot = await
     db.collection('Users') // Replace 'users' with your collection name
      .where('email', '==', email)
      .where('password', '==', password)
      .limit(1)
      .get();

    if (userSnapshot.empty) {
      return res.status(401).json({ error: 'User does not exist, Register' });
    }

    const userData = userSnapshot.docs[0].data();
    const userId = userData.userid;

const snapshot = await  db.collection('Users').doc(userId).collection('BusinessLists').get();

    // Extract data from the snapshot
    const businesses = [];
    snapshot.forEach(doc => {
      businesses.push({
      id: doc.id,
      data: doc.data()
});;


   });
   console.log(userId, businesses)
    return res.status(200).json({ userId,businesses});

  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }


});

app.get('/getMyListings', async (req, res) => {
    const userUid =req.query.userUid;

try {
    // Get businesses from Firestore where industry is equal to "restaurant"
    const snapshot = await  db.collection('Users').doc(userUid).collection('BusinessLists').get();

    // Extract data from the snapshot
     const businesses = [];
    snapshot.forEach(doc => {
      //  const userData = doc.data();
      // let imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F251659%2Fprofile&psig=AOvVaw3ku22wSMS48htbmTL7nJO6&ust=1710111591417000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjDzaak6IQDFQAAAAAdAAAAABAE';

      // if (userData.Images && userData.Images.length > 0) {
      //   imageUrl = userData.images[0];
      // }
      businesses.push({
      id: doc.id,
      data: doc.data(),
      coordinates:{latitude:doc.data().latitude,longitude:doc.data().longitude},

});;
    })

    // Send JSON response to the HTML frontend

    res.json(businesses );



  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getBusinesses', async (req, res) => {

    try {
    const snapshot = await db.collection('BusinessLists').limit(4).get();
    const businesses = [];
    snapshot.forEach(doc => {

      businesses.push({
      id: doc.id,
      data: doc.data() ,
      coordinates:{latitude:doc.data().latitude,longitude:doc.data().longitude},

});;

    })

    res.json( businesses );
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.post('/getDonations', async (req, res) => {
  const { listingId, ownerId } = req.body; // Destructure request body
  try {
    const snapshot = await db.collection('Users').doc(ownerId).collection('BusinessLists').doc(listingId).collection('Donations').get();
    const donations = [];
    snapshot.forEach(doc => {
      donations.push({
        amount: doc.data().amount, // Access 'amount' property from document data
      });
    });
    res.json(donations);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getBusinesses2', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get page number from query parameter, default to 1
    const perPage = 4; // Number of items per page
    const startAt = (page - 1) * perPage;

    // Fetch data from Firestore with pagination
    const snapshot = await db.collection('BusinessLists')
      .orderBy('timestamp') // Assuming you have a createdAt field for sorting
      .offset(startAt)
      .limit(perPage)
      .get();

      const businesses = [];
      snapshot.forEach(doc => {

      businesses.push({
      id: doc.id,
      data:doc.data(),
      coordinates:{latitude:doc.data().latitude,longitude:doc.data().longitude},

});;
    })

    res.json(businesses); // Send data as JSON response
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/review', async (req, res) => {
   const reviewer = req.body.data.reviewerName;
   const review = req.body.data.review;
   const businessId = req.body.data.listingId;
   const businessOwnerId = req.body.data.ownerId;
  // const listingId = req.body.data.listingId;

const reviews=  db.collection('BusinessLists').doc( businessId).collection('Reviews');
await reviews.add({
reviewer,

review,
date:new Date().toDateString()

});
const reviews2=  db.collection('Users').doc(businessOwnerId).collection('BusinessLists').doc( businessId).collection('Reviews');
await reviews2.add({
reviewer,
review,
date:new Date().toDateString()

});

});

app.post('/getReviews', async (req, res) => {
 const businessId = req.body.listingId;
   const businessOwnerId = req.body.ownerId;

try {
    // Get businesses from Firestore where industry is equal to "restaurant"
    const snapshot = await  db.collection('BusinessLists').doc(businessId).collection('Reviews').get();

    // Extract data from the snapshot
    const businesses = [];
    snapshot.forEach(doc => {
      businesses.push({
      id: doc.id,
      data: doc.data()
});;

    });

    // Send JSON response to the HTML frontend
console.log(businesses )
    res.json(businesses );



  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }


});

app.get('/getCoordinates', async (req, res) => {
  try {
    const usersSnapshot = await db.collection('BusinessLists').get();
    const businesses = [];
    usersSnapshot.forEach((doc) => {
      businesses.push({ id: doc.id, ...doc.data() });
    });
    res.json(businesses);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Unable to fetch users' });
  }
});

app.post('/getMyReviews', async (req, res) => {
    // const userUid =req.query.userUid;
 const businessId = req.body.listingId;
   const businessOwnerId = req.body.ownerId;
try {
    // Get businesses from Firestore where industry is equal to "restaurant"
    const snapshot = await  db.collection('Users').doc( businessOwnerId).collection('BusinessLists').doc(businessId).collection('Reviews').get();

    // Extract data from the snapshot
    const businesses = [];
    snapshot.forEach(doc => {
      businesses.push({
      id: doc.id,
      data: doc.data()
});;

    });

    // Send JSON response to the HTML frontend

    res.json(businesses );



  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/getMyDonations', async (req, res) => {
    // const userUid =req.query.userUid;
 const businessId = req.body.listingId;
   const businessOwnerId = req.body.ownerId;
try {
    // Get businesses from Firestore where industry is equal to "restaurant"
    const snapshot = await  db.collection('Users').doc( businessOwnerId).collection('BusinessLists').doc(businessId).collection('Donations').get();

    // Extract data from the snapshot
    const businesses = [];
    snapshot.forEach(doc => {
      businesses.push({
      id: doc.id,
      data: doc.data()
});;

    });

    // Send JSON response to the HTML frontend

    res.json(businesses );



  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/getSingleProfile', async (req, res) => {
    // const userUid =req.query.userUid;
 const businessId = req.body.listingId;
   const businessOwnerId = req.body.ownerId;
try {
    // Get businesses from Firestore where industry is equal to "restaurant"
    const snapshot = await  db.collection('Users').doc( businessOwnerId).collection('BusinessLists').doc(businessId).get();

    // Extract data from the snapshot
    const businesses = [];
    snapshot.forEach(doc => {
      businesses.push({
      id: doc.id,
      data: doc.data()
});;

    });

    // Send JSON response to the HTML frontend

    res.json(businesses );



  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.post('/api/getSingleProfile', async (req, res) => {
  const { listingId, businessOwnerId } = req.body;

  try {
    // Fetch user data from Firestore using listingId and businessOwnerId
    const userDoc = await db.collection('Users').doc(businessOwnerId)
                         .collection('BusinessLists').doc(listingId).get();

    if (!userDoc.exists) {
      console.log('User not found');
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = userDoc.data();
    console.log('User Data:', userData);

    // Send user data to the frontend
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/getSingleProfile2', async (req, res) => {
  const { listingId, businessOwnerId } = req.body;

  try {
    // Fetch user data from Firestore using listingId and businessOwnerId
    const userDoc = await db.collection('Users').doc(businessOwnerId)
                         .collection('BusinessLists').doc(listingId).get();

    if (!userDoc.exists) {
      console.log('User not found');
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = userDoc.data();
    console.log('User Data:', userData);

    // Send user data to the frontend
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/updateh2', async (req, res) => {
 const businessId = req.body.listingId;
   const businessOwnerId = req.body.ownerId;
const updateData= req.body.newValue;
// const userListingsId=req.body.listingId

const updates =  db.collection('BusinessLists').doc( businessId);
await updates.update({
businessName:updateData,
});


const updates2 =  db.collection('Users').doc(businessOwnerId ).collection('BusinessLists').doc( businessId);
await updates2.update({
businessName:updateData,
});

// Execute the query


});

app.post('/updateopen', async (req, res) => {
const userid = req.body.userUid;
// const documentId = req.body.selectedBusinessId;
const updateData= req.body.newValue;
 const businessId = req.body.listingId;
   const businessOwnerId = req.body.ownerId;

const userListingsId=req.body.listingId
const updates =  db.collection('BusinessLists').doc(businessId);
await updates.update({
openingtime:updateData,
});



const updates2 =  db.collection('Users').doc( businessOwnerId).collection('BusinessLists').doc( businessId);
await updates2.update({
openingtime:updateData,
});

});

app.post('/updateclose', async (req, res) => {
const userid = req.body.userUid;
const documentId = req.body.selectedBusinessId;
const updateData= req.body.newValue;
// const userListingsId=req.body.listingId
 const businessId = req.body.listingId;
   const businessOwnerId = req.body.ownerId;
const updates =  db.collection('BusinessLists').doc(businessId);
await updates.update({
closingtime:updateData,
});

const updates2 =  db.collection('Users').doc(businessOwnerId).collection('BusinessLists').doc(businessId);
await updates2.update({
closingtime:updateData,
});
});

app.post('/updateAddress', async (req, res) => {

const updateData= req.body.newValue;
const businessId = req.body.listingId;
const businessOwnerId = req.body.ownerId;
const updates =  db.collection('BusinessLists').doc(businessId);
await updates.update({
businessAddress:updateData,
});

const updates2 =  db.collection('Users').doc( businessOwnerId).collection('BusinessLists').doc(businessId);
await updates2.update({
businessAddress:updateData,
});
});

app.post('/updateNumber', async (req, res) => {
// const userid = req.body.userUid;
// const documentId = req.body.selectedBusinessId;
const updateData= req.body.newValue;
//const userListingsId=req.body.listingId
const businessId = req.body.listingId;
  const businessOwnerId = req.body.ownerId;
const updates =  db.collection('BusinessLists').doc( businessId);
await updates.update({
phoneNo:updateData,
});
const updates2 =  db.collection('Users').doc( businessOwnerId).collection('BusinessLists').doc(businessId);
await updates2.update({
phoneNo:updateData,
});

});

app.post('/updateEmail', async (req, res) => {
// const userid = req.body.userUid;
// const documentId = req.body.selectedBusinessId;
const updateData= req.body.newValue;
const userListingsId=req.body.listingId
const businessId = req.body.listingId;
  const businessOwnerId = req.body.ownerId;
const updates =  db.collection('BusinessLists').doc(businessId);
await updates.update({
email:updateData,
});
const updates2 =  db.collection('Users').doc(businessOwnerId).collection('BusinessLists').doc(businessId);
await updates2.update({
email:updateData,
});

});

app.post('/updateAbout', async (req, res) => {
const userid = req.body.userUid;
const documentId = req.body.selectedBusinessId;
const updateData= req.body.newValue;
const userListingsId=req.body.listingId
const businessId = req.body.listingId;
const businessOwnerId = req.body.ownerId;
const updates =  db.collection('BusinessLists').doc(businessId);
await updates.update({
about:updateData,
});

const updates2 =  db.collection('Users').doc(businessOwnerId).collection('BusinessLists').doc(businessId);
await updates2.update({
about:updateData,
});

});

app.post('/MostSearched', async (req, res) => {
let industry = req.body.industry

    try {

  const businessDb =  db.collection('MostSearchedIndustry');
await businessDb.add({
industry: industry,
 timestamp: admin.firestore.FieldValue.serverTimestamp(),

})



    } catch (error) {
        console.error('Error retrieving data from Firestore:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/mostFrequentIndustries', async (req, res) => {
    try {
        const mostFrequentIndustry = await getMostFrequentIndustry();
         console.log("Most frequent industries:", mostFrequentIndustry );
        const resultSnapshot =await db.collection('MostSearchedIndustry').where('industry', '==',mostFrequentIndustry).get();

    const documents = [];
    resultSnapshot.forEach(doc => {
      documents.push(doc.data());
    });

        res.json({mostSearched:mostFrequentIndustry,len:documents });

    } catch (error) {
        console.error("Error getting most frequent industry:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

async function getMostFrequentIndustry() {
    try {
        // Query Firestore collection "mostSearched"
        const snapshot = await db.collection('MostSearchedIndustry').get();

        // Count occurrences of each industry
        const industryCounts = {};
        snapshot.forEach(doc => {
            const industry = doc.data().industry;
            industryCounts[industry] = (industryCounts[industry] || 0) + 1;
        });

        // Find the most frequent industry
        let mostFrequentIndustry = null;
        let maxCount = 0;
        for (const [industry, count] of Object.entries(industryCounts)) {
            if (count > maxCount) {
                mostFrequentIndustry = industry;
                maxCount = count;
            }
        }

        return mostFrequentIndustry;

    } catch (error) {
        console.error("Error getting most frequent industry:", error);
        throw error;
    }
}
getMostFrequentIndustry()

app.get('/secondFrequentIndustry', async (req, res) => {
    try {
        const secondFrequentIndustry = await getSecondFrequentIndustry();
          const resultSnapshot =await db.collection('MostSearchedIndustry').where('industry', '==',secondFrequentIndustry).get();

    const documents = [];
    resultSnapshot.forEach(doc => {
      documents.push(doc.data());
    });

        res.json({secondmostSearched:secondFrequentIndustry,len:documents });


    } catch (error) {
        console.error("Error getting second frequent industry:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

async function getSecondFrequentIndustry() {
    try {
        // Query Firestore collection "mostSearched"
        const snapshot = await db.collection('MostSearchedIndustry').get();

        // Count occurrences of each industry
        const industryCounts = {};
        snapshot.forEach(doc => {
            const industry = doc.data().industry;
            industryCounts[industry] = (industryCounts[industry] || 0) + 1;
        });

        // Sort industry counts by count in descending order
        const sortedIndustries = Object.keys(industryCounts).sort((a, b) => industryCounts[b] - industryCounts[a]);

        // Find the second most frequent industry
        let secondFrequentIndustry = null;
        let count = 0;
        for (const industry of sortedIndustries) {
            count++;
            if (count === 2) {
                secondFrequentIndustry = industry;
                break;
            }
        }

        return secondFrequentIndustry;
    } catch (error) {
        console.error("Error getting second frequent industry:", error);
        throw error;
    }
}
 getSecondFrequentIndustry()

 app.get('/thirdFrequentIndustry', async (req, res) => {
    try {
        const thirdFrequentIndustry = await getThirdFrequentIndustry();
           const resultSnapshot =await db.collection('MostSearchedIndustry').where('industry', '==',thirdFrequentIndustry).get();

    const documents = [];
    resultSnapshot.forEach(doc => {
      documents.push(doc.data());
    });

        res.json({thirdmostSearched:thirdFrequentIndustry,len:documents });


    } catch (error) {
        console.error("Error getting third frequent industry:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

async function getThirdFrequentIndustry() {
    try {
        // Query Firestore collection "mostSearched"
        const snapshot = await db.collection('MostSearchedIndustry').get();

        // Count occurrences of each industry
        const industryCounts = {};
        snapshot.forEach(doc => {
            const industry = doc.data().industry;
            industryCounts[industry] = (industryCounts[industry] || 0) + 1;
        });

        // Sort industry counts by count in descending order
        const sortedIndustries = Object.keys(industryCounts).sort((a, b) => industryCounts[b] - industryCounts[a]);

        // Find the third most frequent industry
        let thirdFrequentIndustry = null;
        let count = 0;
        for (const industry of sortedIndustries) {
            count++;
            if (count === 3) {
                thirdFrequentIndustry = industry;
                break;
            }
        }

        return thirdFrequentIndustry;
    } catch (error) {
        console.error("Error getting third frequent industry:", error);
        throw error;
    }
}
getThirdFrequentIndustry()

// Endpoint to get the fourth most frequent industry
app.get('/fourthFrequentIndustry', async (req, res) => {
    try {
        const fourthFrequentIndustry = await getFourthFrequentIndustry();
           const resultSnapshot =await db.collection('MostSearchedIndustry').where('industry', '==',fourthFrequentIndustry).get();

    const documents = [];
    resultSnapshot.forEach(doc => {
      documents.push(doc.data());
    });

        res.json({fourthmostSearched:fourthFrequentIndustry,len:documents });


    } catch (error) {
        console.error("Error getting fourth frequent industry:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

async function getFourthFrequentIndustry() {
    try {
        // Query Firestore collection "mostSearched"
        const snapshot = await db.collection('MostSearchedIndustry').get();

        // Count occurrences of each industry
        const industryCounts = {};
        snapshot.forEach(doc => {
            const industry = doc.data().industry;
            industryCounts[industry] = (industryCounts[industry] || 0) + 1;
        });

        // Sort industry counts by count in descending order
        const sortedIndustries = Object.keys(industryCounts).sort((a, b) => industryCounts[b] - industryCounts[a]);

        // Find the fourth most frequent industry
        let fourthFrequentIndustry = null;
        let count = 0;
        for (const industry of sortedIndustries) {
            count++;
            if (count === 4) {
                fourthFrequentIndustry = industry;
                break;
            }
        }

        return fourthFrequentIndustry;
    } catch (error) {
        console.error("Error getting fourth frequent industry:", error);
        throw error;
    }
}
getFourthFrequentIndustry()

// Endpoint to get the fifth most frequent industry
app.get('/fifthFrequentIndustry', async (req, res) => {
    try {
        const fifthFrequentIndustry = await getFifthFrequentIndustry();
           const resultSnapshot =await db.collection('MostSearchedIndustry').where('industry', '==',fifthFrequentIndustry).get();

    const documents = [];
    resultSnapshot.forEach(doc => {
      documents.push(doc.data());
    });

        res.json({fifthmostSearched:fifthFrequentIndustry,len:documents });


    } catch (error) {
        console.error("Error getting fifth frequent industry:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

async function getFifthFrequentIndustry() {
    try {
        // Query Firestore collection "mostSearched"
        const snapshot = await db.collection('MostSearchedIndustry').get();

        // Count occurrences of each industry
        const industryCounts = {};
        snapshot.forEach(doc => {
            const industry = doc.data().industry;
            industryCounts[industry] = (industryCounts[industry] || 0) + 1;
        });

        // Sort industry counts by count in descending order
        const sortedIndustries = Object.keys(industryCounts).sort((a, b) => industryCounts[b] - industryCounts[a]);

        // Find the fifth most frequent industry
        let fifthFrequentIndustry = null;
        let count = 0;
        for (const industry of sortedIndustries) {
            count++;
            if (count === 5) {
                fifthFrequentIndustry = industry;
                break;
            }
        }

        return fifthFrequentIndustry;
    } catch (error) {
        console.error("Error getting fifth frequent industry:", error);
        throw error;
    }
}
 getFifthFrequentIndustry()


 app.get('/businessData', async (req, res) => {
 const businessId = req.query.storedUserId;

const userRef = db.collection('BusinessLists').doc(businessId);
// Fetch the user document
try {
  const doc = await userRef.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    let data=doc.data()
      res.json(data)
    console.log(data);
  }
} catch (error) {
  console.error('Error getting document:', error);
}
 })

 app.post('/businessSearch', async (req, res) => {
  try {

    const selectedIndustry = req.body.industry;
    const latitude = parseFloat(req.body.lat); // Convert latitude to float
    const longitude = parseFloat(req.body.lng); // Convert longitude to float

    // Query Firestore collection based on selected industry
    const querySnapshot = await db.collection('BusinessLists')
      .where('industry', '==', selectedIndustry)
      .get();

    // Initialize an array to store filtered data
    const businesses = [];

    // Iterate through query snapshot
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // let imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F251659%2Fprofile&psig=AOvVaw3ku22wSMS48htbmTL7nJO6&ust=1710111591417000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjDzaak6IQDFQAAAAAdAAAAABAE';

      // if ( data.images &&  data.images.length > 0) {
      //   imageUrl =  data.images[0];
      // }
      // // Filter data based on location (latitude and longitude)
      // Calculate distance between location and selected coordinates
      const distance = calculateDistance(latitude, longitude, data.latitude, data.longitude);

      // You can define your own distance threshold for filtering
      const maxDistance = 10; // Example: 10 kilometers

      // If distance is within the threshold, include the data
      if (distance <= maxDistance) {
       businesses.push({
      id: doc.id,
      data: doc.data(),
      coordinates:{latitude:doc.data().latitude,ongitude:doc.data().longitude},

});
      }
    });

    // Send filtered data as response
    res.json(businesses);
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}
// Function to convert degrees to radians
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

app.post('/businessSearch2', async (req, res) => {
  try {

    const selectedIndustry = req.body.industry;
   // Convert longitude to float

    // Query Firestore collection based on selected industry
    const querySnapshot = await db.collection('BusinessLists')
      .where('industry', '==', selectedIndustry)
      .get();

    // Initialize an array to store filtered data
    const businesses = [];

    // Iterate through query snapshot

  querySnapshot.forEach(doc => {
      // const userData = doc.data();
      // let imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F251659%2Fprofile&psig=AOvVaw3ku22wSMS48htbmTL7nJO6&ust=1710111591417000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjDzaak6IQDFQAAAAAdAAAAABAE';

      // if (userData.images && userData.images.length > 0) {
      //   imageUrl = userData.images[0];
      // }

      businesses.push({
      id: doc.id,
      data: doc.data(),
      // imageUrl :imageUrl
});

 })
 // Send filtered data as response
    res.json(businesses);
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

 app.post('/api/businessSearch3', async (req, res) => {
  try {

    const selectedIndustry = req.body.industry;
    const latitude = parseFloat(req.body.lat); // Convert latitude to float
    const longitude = parseFloat(req.body.lng); // Convert longitude to float

    // Query Firestore collection based on selected industry
    const querySnapshot = await db.collection('BusinessLists')
      .where('industry', '==', selectedIndustry)
      .get();

    // Initialize an array to store filtered data
    const businesses = [];

    // Iterate through query snapshot
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      // let imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F251659%2Fprofile&psig=AOvVaw3ku22wSMS48htbmTL7nJO6&ust=1710111591417000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjDzaak6IQDFQAAAAAdAAAAABAE';

      // if ( data.images &&  data.images.length > 0) {
      //   imageUrl =  data.images[0];
      // }
      // // Filter data based on location (latitude and longitude)
      // Calculate distance between location and selected coordinates
      const distance = calculateDistance(latitude, longitude, data.latitude, data.longitude);

      // You can define your own distance threshold for filtering
      const maxDistance = 10; // Example: 10 kilometers

      // If distance is within the threshold, include the data
      if (distance <= maxDistance) {
       businesses.push({
      id: doc.id,
      data: doc.data(),
      coordinates:{latitude:doc.data().latitude,ongitude:doc.data().longitude},

});
      }
    });

    // Send filtered data as response
    res.json(businesses);
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/addDonations',async (req, res)=> {


     const amount = req.body.amount;
const email = req.body.email;
     const ownerId = req.body.ownerId;
const documentId = req.body.documentId;

const businessDb =  db.collection('Users').doc(ownerId).collection('BusinessLists').doc(documentId ).collection('Donations');
await businessDb.add({
amount:amount,
email:email,
timestamp: admin.firestore.FieldValue.serverTimestamp()
});

const businessDb2 =  db.collection('BusinessLists').doc(documentId ).collection('Donations');
await businessDb2.add({
amount:amount,
email:email,
timestamp: admin.firestore.FieldValue.serverTimestamp()
});
});

app.post('/addDonations2',async (req, res)=> {
const amount = req.body.amount;
const email = req.body.email;
const ownerId = req.body.ownerId;
const documentId = req.body.documentId;

const businessDb =  db.collection('Users').doc(ownerId).collection('BusinessLists').doc(documentId ).collection('Donations');
await businessDb.add({
amount:amount,
email:email,
timestamp: admin.firestore.FieldValue.serverTimestamp()
});

const businessDb2 =  db.collection('BusinessLists').doc(documentId ).collection('Donations');
await businessDb2.add({
amount:amount,
email:email,
timestamp: admin.firestore.FieldValue.serverTimestamp()
});
});

app.post('/mostSearched',async (req, res)=> {
const amount = req.body.OtherAmount;
const email = req.body.email;
     const ownerId = req.body.ownerId;
const documentId = req.body.documentId;

const businessDb =  db.collection('Users').doc(ownerId).collection('BusinessLists').doc(documentId );
await businessDb.set({
amount:amount,
email:email,
timestamp: admin.firestore.FieldValue.serverTimestamp()
});

const businessDb2 =  db.collection('BusinessLists').doc(documentId );
await businessDb2.set({
amount:amount,
email:email,
timestamp: admin.firestore.FieldValue.serverTimestamp()
});
});

app.post('/api/removeFromArray', async (req, res) => {
  try {
    const { itemId,  userId,listingId } = req.body;

    // Update the array in Firestore
    const docRef = db.collection('Users').doc(userId).collection('BusinessLists').doc(listingId);
    await docRef.update({
      Images: admin.firestore.FieldValue.arrayRemove(itemId)
    });
    const docRef2 = db.collection('BusinessLists').doc(listingId);
    await docRef2.update({
      Images: admin.firestore.FieldValue.arrayRemove(itemId)
    });
    res.status(200).send('Item removed from array successfully');
  } catch (error) {
    console.error('Error removing item from array:', error);
    res.status(500).send('Internal server error');
  }
});


app.post('/addImages3', upload.array('images'), async (req, res) => {
    const { userId, listingId } = req.body;

    try {
        const imageUrls = [];
        const files = req.files;

        for (const image of files) {
            const fileName = `images/${Date.now()}_${image.originalname}`;
            const file = bucket.file(fileName);
            await file.save(image.buffer, {
                metadata: {
                    contentType: image.mimetype,
                },
            });
            const imageUrl = await file.getSignedUrl({ action: 'read', expires: '01-01-5000' });
            imageUrls.push(imageUrl[0]);
        }

        // Update the array in Firestore for both User and BusinessLists collections
        const userDocRef = db.collection('Users').doc(userId).collection('BusinessLists').doc(listingId);
        await userDocRef.update({
            Images: admin.firestore.FieldValue.arrayUnion(...imageUrls)
        });

        const businessDocRef = db.collection('BusinessLists').doc(listingId);
        await businessDocRef.update({
            Images: admin.firestore.FieldValue.arrayUnion(...imageUrls)
        });

        res.status(200).send('Item added to array successfully');
    } catch (error) {
      console.log(error)
        console.error('Error adding item to array:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(PORT, ()=> console.log('App is listening on url http://localhost:' + PORT))
