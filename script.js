const API_URL =
"https://script.google.com/macros/s/AKfycbwqumGdFeA38PV2uRTRPbmtWwfGB8u9B43QdAYrZlX_oxVYAYxTvSzRvxIWRl2QOcTQ1Q/exec";

async function checkResult() {

    const admissionNo =
    document.getElementById("admissionNo").value;

    const resultDiv =
    document.getElementById("result");

    resultDiv.innerHTML = "Loading...";

    try {

        const response =
        await fetch(API_URL);

        const data =
        await response.json();

        const student =
        data.find(
            s => s.admissionNo.toString() === admissionNo
        );

        if(!student){
            resultDiv.innerHTML =
            "<h3>Result Not Found</h3>";
            return;
        }

        resultDiv.innerHTML = `
        <h2>${student.studentName}</h2>

        <table>
            <tr>
                <th>Class</th>
                <td>${student.class}</td>
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
                <th>Total</th>
                <td>${student.total}</td>
            </tr>

            <tr>
                <th>Grade</th>
                <td>${student.grade}</td>
            </tr>
        </table>
        `;

    } catch(error){

        resultDiv.innerHTML =
        "<h3>Error Loading Result</h3>";

        console.error(error);
    }
}