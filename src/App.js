import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
initializeApp({
  apiKey: "AIzaSyDzxhN6dTqNwnNyto5FX8RxZj7xkI7xFhI",
  authDomain: "robotics-website-5f6b4.firebaseapp.com",
  projectId: "robotics-website-5f6b4",
  storageBucket: "robotics-website-5f6b4.appspot.com",
  messagingSenderId: "520942584204",
  appId: "1:520942584204:web:73727b1e37b928ef98d6a9", // config
});

function App() {
  return (
    <div>
      <h1>Home test</h1>
    </div>
  );
}

export default App;
