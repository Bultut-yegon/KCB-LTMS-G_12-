const firebaseConfig = {
  apiKey: "AIzaSyBbMbTOH3NHv6fp4jAT3HA3vA6-Ur23In4",
  authDomain: "group-12-kcb-lms.firebaseapp.com",
  projectId: "group-12-kcb-lms",
  storageBucket: "group-12-kcb-lms.appspot.com",
  messagingSenderId: "15476877993",
  appId: "1:15476877993:web:1c45be65570b120d48d7b8"
};



// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

// Get the download URL for the PDF
const pdfRef = ref(storage, 'path_to_your_pdf_file.pdf');
getDownloadURL(pdfRef)
  .then((url) => {
    // `url` is the download URL for the PDF
    // This can be used to set the href attribute of the download button
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.href = url;
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });