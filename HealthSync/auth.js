function notify(msg){
  let n=document.createElement("div");
  n.innerText=msg;
  n.style.position="fixed";
  n.style.bottom="20px";
  n.style.right="20px";
  n.style.background="#2563eb";
  n.style.color="white";
  n.style.padding="12px";
  n.style.borderRadius="10px";
  document.body.appendChild(n);
  setTimeout(()=>n.remove(),3000);
}

function login(){
  let u=user.value,p=pass.value;
  localStorage.setItem("currentUser",u);
  notify("Logging in...");
  setTimeout(()=>{
    if(u=="admin"&&p=="admin") location="admin-dashboard.html";
    else if(u=="staff"&&p=="staff") location="staff-dashboard.html";
    else location="user-dashboard.html";
  },800);
}

function logout(){
  localStorage.clear();
  location="login.html";
}

function go(p){location=p}

window.onload=()=>{
  let a=JSON.parse(localStorage.getItem("appointments"))||[];
  if(typeof appointments!="undefined") appointments.innerHTML=a.map(x=>`<li>${x}</li>`).join("");
  if(typeof historyList!="undefined") historyList.innerHTML=a.map(x=>`<li>${x}</li>`).join("");
}

function notify(msg){
  let n=document.createElement("div");
  n.innerText=msg;
  n.style.position="fixed";
  n.style.bottom="20px";
  n.style.right="20px";
  n.style.background="#2563eb";
  n.style.color="white";
  n.style.padding="12px";
  n.style.borderRadius="10px";
  document.body.appendChild(n);
  setTimeout(()=>n.remove(),2500);
}

function login(){
  let u=user.value,p=pass.value;
  localStorage.setItem("currentUser",u);
  notify("Login successful");

  if(u=="admin"&&p=="admin") location="admin-dashboard.html";
  else if(u=="staff"&&p=="staff") location="staff-dashboard.html";
  else location="user-dashboard.html";
}

function logout(){
  localStorage.clear();
  location="login.html";
}

function go(p){location=p}

window.onload=()=>{
  let a=JSON.parse(localStorage.getItem("appointments"))||[];
  if(typeof appointments!="undefined") appointments.innerHTML=a.map(x=>`<li>${x}</li>`).join("");
  if(typeof historyList!="undefined") historyList.innerHTML=a.map(x=>`<li>${x}</li>`).join("");
};