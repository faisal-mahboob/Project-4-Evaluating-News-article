import { ValidURL } from "./nameChecker";

//const pro= document.getElementById('submit').document.addEventListener('click',function(){
function handleSubmit(e) {
    e.preventDefault()

let data=document.getElementById('user').value;
console.log(data);

//let projectData={};

//postData('http://localhost:8081/getdata', data);

//let formText = document.getElementById('user').value
    /*Client.checkForName()*/
if(ValidURL(data)){
fetch('http://localhost:8081/getdata',{
method:'POST',
credentials:'same-origin',
headers:{
    'Content-type':'application/json'
},
body: JSON.stringify({data})
})
.then(res=>res.json())
.then(function(cData){
    console.log('this is the data');
    console.log(cData);
    document.getElementById("mod").innerHTML=cData.model;
    document.getElementById("sc").innerHTML=cData.score_tag;
    document.getElementById("agre").innerHTML=cData.agreement;
    document.getElementById("subj").innerHTML=cData.subjectivity;
    document.getElementById("text").innerHTML=cData.confidence;
    document.getElementById("iron").innerHTML=cData.irony;

})


}
else{
alert('Enter a valid URL');
}
}
//const postData = async(url='', gdata='')=>{

/* const response = await fetch('http://localhost:8081/getdata', {
    method:'POST',
    credentials:'same-origin',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(gdata)
    });
 */

export{handleSubmit}
