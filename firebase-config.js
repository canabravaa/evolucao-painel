// Configuração pública do app web do Firebase (Console → Configurações do projeto → Seus apps → Web).
// Estes valores não são senhas: quem protege os dados são as regras do Firestore (firestore.rules).
export const firebaseConfig = {
  apiKey: "PREENCHER",
  authDomain: "PREENCHER.firebaseapp.com",
  projectId: "PREENCHER",
  storageBucket: "PREENCHER.appspot.com",
  messagingSenderId: "PREENCHER",
  appId: "PREENCHER",
};

// Único e-mail autorizado a entrar no painel.
export const OWNER_EMAIL = "alancanabravaia@gmail.com";
