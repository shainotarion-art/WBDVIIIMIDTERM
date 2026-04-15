let step=0,data={};

function startWizard(){step=0;show();}

function show(){
let w=document.getElementById("wizard");

if(step==0)
 w.innerHTML=`<h3>Choose Date</h3><input type=date id=date><button onclick=next()>Next</button>`;

else if(step==1){
 data.date=date.value;
 w.innerHTML=`<h3>Select Specialty</h3>
 <select id=s>
 <option>Cardiology</option>
 <option>Pediatrics</option>
 <option>Dermatology</option>
 </select><button onclick=next()>Next</button>`;
}

else if(step==2){
 data.spec=s.value;
 let docs={Cardiology:["Dr. John Smith"],Pediatrics:["Dr. Maria Cruz"],Dermatology:["Dr. Kevin Lee"]};
 w.innerHTML=`<h3>Select Doctor</h3><select id=d>${docs[data.spec].map(x=>`<option>${x}</option>`)}</select><button onclick=next()>Next</button>`;
}

else if(step==3){
 data.doc=d.value;
 w.innerHTML=`<h3>Select Nurse</h3>
 <select id=n>
 <option>Nurse Angela Reyes</option>
 <option>Nurse Carlo Santos</option>
 <option>Nurse Mia Fernandez</option>
 </select><button onclick=next()>Next</button>`;
}

else if(step==4){
 data.nurse=n.value;
 w.innerHTML=`<h3>Select Time</h3><input type=time id=t><button onclick=next()>Confirm</button>`;
}

else{
 data.time=t.value;
 let a=JSON.parse(localStorage.getItem("appointments"))||[];
 let rec=`${data.date} | ${data.spec} - ${data.doc} with ${data.nurse} at ${data.time}`;
 a.push(rec);
 localStorage.setItem("appointments",JSON.stringify(a));
 notify("Appointment Confirmed ✔");
 w.innerHTML="<h3>Confirmed ✔</h3>";
}
}

function next(){step++;show();}

let step=0,data={};

const doctors={
  Cardiology:"Dr. John Smith",
  Pediatrics:"Dr. Maria Cruz",
  Dermatology:"Dr. Kevin Lee"
};

const nurses=["Nurse Angela Reyes","Nurse Carlo Santos","Nurse Mia Fernandez"];

function startWizard(){step=0;show();}

function show(){
let w=document.getElementById("wizard");

if(step==0){
  w.innerHTML=`<h3>Select Specialty</h3>
  <button onclick="pickSpec('Cardiology')">Cardiology</button>
  <button onclick="pickSpec('Pediatrics')">Pediatrics</button>
  <button onclick="pickSpec('Dermatology')">Dermatology</button>`;
}

else if(step==1){
  w.innerHTML=`<h3>Select Doctor</h3>
  <div class='grid'>
  <div class='card selectable' onclick="pickDoc()">${doctors[data.spec]}</div>
  </div>
  `;
}

else if(step==2){
  w.innerHTML=`<h3>Select Nurse</h3>
  <div class='grid'>
  ${nurses.map(n=>`<div class='card selectable' onclick="pickNurse('${n}')">${n}</div>`).join('')}
  </div>`;
}

else if(step==3){
  w.innerHTML=`<h3>Select Time</h3><input type=time id=t><button onclick=next()>Confirm</button>`;
}

else{
  data.time=t.value;
  let a=JSON.parse(localStorage.getItem("appointments"))||[];
  a.push(`${data.spec} - ${data.doc} with ${data.nurse} at ${data.time}`);
  localStorage.setItem("appointments",JSON.stringify(a));
  notify("Appointment Confirmed ✔");
  w.innerHTML="<h3>Done ✔</h3>";
}
}

function pickSpec(s){data.spec=s;step=1;show();}
function pickDoc(){data.doc=doctors[data.spec];step=2;show();}
function pickNurse(n){data.nurse=n;step=3;show();}
function next(){step++;show();}
