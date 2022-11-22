import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_Api_Key,
  authDomain: process.env.REACT_APP_Api_KeyAuth_Domain,
  projectId: process.env.REACT_APP_Api_KeyProject_Id,
  storageBucket: process.env.REACT_APP_Api_KeyStorage_Bucket,
  messagingSenderId: process.env.REACT_APP_Api_KeyMessaging_SenderId,
  appId: process.env.REACT_APP_Api_KeyApp_Id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
