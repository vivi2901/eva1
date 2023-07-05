// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage,ref, uploadBytes, getDownloadURL, uploadString} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyBi26_664sB8uIzBzTBUWmosL3Ll8mvL58",
  authDomain: "evafinal-99b70.firebaseapp.com",
  projectId: "evafinal-99b70",
  storageBucket: "evafinal-99b70.appspot.com",
  messagingSenderId: "1033775678007",
  appId: "1:1033775678007:web:d91a2e4ba8361b23d075b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file) {
  const storageRef=ref(storage,uuidv4())
  await uploadBytes(storageRef,file)
  const url = await getDownloadURL(storageRef)
  return url
}

export async function uploadFile64(file) {
  const storageRef = ref(storage, uuidv4());

  // Sube la imagen en base64 a Firebase Storage
  await uploadString(storageRef, file, 'data_url');

  // Obtiene la URL de descarga de la imagen
  const url = await getDownloadURL(storageRef);

  return url;
}