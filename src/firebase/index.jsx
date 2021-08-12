// Importacion de los servicios de firebase
import firebase from "firebase/app";
import '@firebase/firestore';

// Definir y crear la conexion con Firebase (lo otorga Firebase)
const app = firebase.initializeApp({
  apiKey: "AIzaSyC2y0B3_HGLXgN-Ly9z7biLOJpjvfgiAYs",
  authDomain: "planeta-deli.firebaseapp.com",
  projectId: "planeta-deli",
  storageBucket: "planeta-deli.appspot.com",
  messagingSenderId: "62603223899",
  appId: "1:62603223899:web:750cd05b824456031d307e"
});

export const getFirebase = () => {
  return app;
};

// Crea la conexion con el servicio de Firestore
// Entra a firebase, utilizaremos Firestore, y lo utilizaremos desde APP
export const getFirestore = () => {
  return firebase.firestore(app);
};
