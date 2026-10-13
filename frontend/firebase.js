import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_KMGd70b4xPMY70XDd0ZhHd-Ae9EVhLI",
  authDomain: "foody-serverless.firebaseapp.com",
  projectId: "foody-serverless",
  storageBucket: "foody-serverless.firebasestorage.app",
  messagingSenderId: "318757226850",
  appId: "1:318757226850:web:055d2db7870d0d7fd5043b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
