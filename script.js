const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');


const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');


let subhanAllahInitial = 0;
let alhamdulillahInitial = 0;
let allahAkberInitial = 0;

//
subhanAllahIncrimentBtn.addEventListener('click',function(){
    if (subhanAllahInitial === 33) {
        return alert ('Please fill another one')
    }
    subhanAllahInitial += 1;
    subhanAllahDisplay.innerText = subhanAllahInitial
})
subhanAllahDecrimentBtn.addEventListener('click',function(){
    if (subhanAllahInitial === 0) {
       return alert('negative')
    }
    subhanAllahInitial -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitial;
})

//
alhamdulillahIncrimentBtn.addEventListener('click',function(){
    if (alhamdulillahInitial === 33) {
        return alert ('Please fill another one')
    }
    alhamdulillahInitial += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitial
})
alhamdulillahDecrimentBtn.addEventListener('click',function(){
    alhamdulillahInitial -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitial;
    if (alhamdulillahInitial < 0) {
      return alert('negative')
    }
})

//
allahAkberIncrimentBtn.addEventListener('click',function(){
    if (allahAkberInitial === 33) {
        return alert ('Please fill another one')
    }
    allahAkberInitial += 1;
    allahAkberDisplay.innerText = allahAkberInitial
})
allahAkberDecrimentBtn.addEventListener('click',function(){
    allahAkberInitial -= 1;
    allahAkberDisplay.innerText = allahAkberInitial;
    if (allahAkberInitial < 0) {
       return alert('negative')
    }
})


resetBtn.addEventListener('click',function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;
})
