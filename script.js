const API_URL =
"https://script.google.com/macros/s/AKfycbwqumGdFeA38PV2uRTRPbmtWwfGB8u9B43QdAYrZlX_oxVYAYxTvSzRvxIWRl2QOcTQ1Q/exec";

async function checkResult(){

const adm =
document.getElementById("adm").value.trim();

const dob =
document.getElementById("dob").value;

const resultDiv =
document.getElementById("result");

resultDiv.innerHTML="Loading...";

try{

const res =
await fetch(API_URL);

const data =
await res.json();

const student =
data.find(item =>

item.admissionNo === adm &&
item.dob === dob

);

if(!student){

resultDiv.innerHTML=
"<h3>Result Not Found</h3>";

return;
}

resultDiv.innerHTML=`

<img
src="${student.photo}"
class="student-photo">

<h2>${student.studentName}</h2>

<table>

<tr>
<th>Admission No</th>
<td>${student.admissionNo}</td>
</tr>

<tr>
<th>Class</th>
<td>${student.className}</td>
</tr>

<tr>
<th>English</th>
<td>${student.english}</td>
</tr>

<tr>
<th>Maths</th>
<td>${student.maths}</td>
</tr>

<tr>
<th>Science</th>
<td>${student.science}</td>
</tr>

<tr>
<th>Social</th>
<td>${student.social}</td>
</tr>

<tr>
<th>Total</th>
<td>${student.total}</td>
</tr>

<tr>
<th>Grade</th>
<td>${student.grade}</td>
</tr>

</table>

<button
class="printBtn"
onclick="window.print()">
Print Result
</button>

`;

}catch(error){

resultDiv.innerHTML=
"Error Loading Result";

console.error(error);

}

}
