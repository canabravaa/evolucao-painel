// Configuração pública do app web do Firebase (Console → Configurações do projeto → Seus apps → Web).
// Estes valores não são senhas: quem protege os dados são as regras do Firestore (firestore.rules).
export const firebaseConfig = {
  apiKey: "AIzaSyCkwLZowbEVHJgrpP21b4nP8GOhdYVArgU",
  authDomain: "evolucao-alan.firebaseapp.com",
  projectId: "evolucao-alan",
  storageBucket: "evolucao-alan.firebasestorage.app",
  messagingSenderId: "43051378099",
  appId: "1:43051378099:web:aece73dab1a1a60d7c57c6",
};

// Único e-mail autorizado a entrar no painel.
export const OWNER_EMAIL = "alancanabravaia@gmail.com";
