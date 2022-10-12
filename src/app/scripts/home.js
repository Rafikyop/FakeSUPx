const userRaw = localStorage.getItem("user");
console.log("Aiuda esto no quiere dar");
let user;

const URLconver = "https://chatappdata-production.up.railway.app/msn";
const URLusers = "https://chatappdata-production.up.railway.app/users";

console.log(URLconver);
console.log(URLusers);

const validationSession = () => {
  if (!userRaw) {
    location.href = "http://127.0.0.1:5502/src/home.html";
  } else {
    user = JSON.parse(userRaw);
  }
};
validationSession();

const handleCloseSession = () => {
  localStorage.clear();
  location.href = "http://127.0.0.1:5502/src/index.html";
};

const btnCloseSession = document.getElementById("btnCloseSession");

btnCloseSession.addEventListener("click", handleCloseSession);

const textUserName = document.getElementById("nameUser");

textUserName.innerHTML += ` ${user.name}`;

document.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault();
  const query = formid[0].value;
  console.log(query);
  const URLuser = `${URLusers}?id=${query}`;
  console.log(URLuser);
  const userLogged = await getData(URLuser);
  console.log(userLogged);
  const conversaciones = await getConversations(URLconvers, query);
  console.log(conversaciones);
  //   const urlConversationRecibida=`${URLconvers}?idUser2=${query}&idUser1?`
  //   const conversacionesRecibidas= await getConversations(urlConversationRecibida);
  //   console.log(conversacionesRecibidas);
  //   const urlConversationIniciada=`${URLconvers}?idUser1=${query}&idUser2?`
  //   const conversacionsIniciadas = await getConversations(urlConversationIniciada);
  //   console.log(conversacionsIniciadas);
});
