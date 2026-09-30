import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnrIP5Vy6oVYo4HjAPGrlBB7WSKE6dnzQ",
  authDomain: "popkidcontacts2026.firebaseapp.com",
  projectId: "popkidcontacts2026",
  storageBucket: "popkidcontacts2026.firebasestorage.app",
  messagingSenderId: "54520291773",
  appId: "1:54520291773:web:3d59aa793f17155b75b2d4",
  measurementId: "G-5LVDPMWWVJ",
  databaseURL: "INSERT_EXACT_DATABASE_URL_HERE" // copy from Firebase Console > Realtime Database
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export function toast(msg, type = "err") {
  const t = document.createElement("div");
  t.className = "toast " + type; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}
