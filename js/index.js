


// search
// delete
// update
// clean data


let arName = document.getElementById('ar-name');
let enName = document.getElementById('en-name');
let workNumber = document.getElementById('number-work');
let number = document.getElementById('number');
let nationality = document.getElementById('nationality');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let date = document.getElementById('date');
let work = document.getElementById('work');
let dapart = document.getElementById('dapart');
let salary = document.getElementById('salary');
let statue = document.getElementById('status');
let gender = document.getElementById('gender');
let maritalStatus = document.getElementById('marital-status');
let submit = document.getElementById('submit');
let images = document.getElementById('img');
let imagePreview = document.getElementById('image-preview');
let image = document.querySelector('.image');


images.addEventListener('change', () => {
    let file = images.files[0];
    let reader = new FileReader();
    reader.onload = () => {
        imagePreview.src = reader.result;
    };
    reader.readAsDataURL(file);

    if (imagePreview.value== reader) {
        image.style.display = "block";
        imagePreview.style.display = "none";
    } else {
        imagePreview.style.cssText= "display:block; width:150px;";
        image.style.display = "none";
    }
});

// create employee
let dataPro;
if (localStorage.emp != null) {
    dataPro = JSON.parse(localStorage.emp);
} else {
    dataPro = [];
}

submit.onclick = function () {
    let newPro = {
        imagePreview: imagePreview.src,
        arName: arName.value,
        enName: enName.value,
        workNumber: workNumber.value,
        number: number.value,
        nationality: nationality.value,
        email: email.value,
        phone: phone.value,
        date: date.value,
        work: work.value,
        dapart: dapart.value,
        salary: salary.value,
        statue: statue.value,
        gender: gender.value,
        maritalStatus: maritalStatus.value,
    }
    dataPro.push(newPro);
    // save local storge
    localStorage.setItem('emp', JSON.stringify(dataPro));
    clearData();
    showData();
}
// clear input
function clearData() {
    arName.value = '';
    enName.value = '';
    workNumber.value = '';
    number.value = '';
    nationality.value = '';
    email.value = '';
    phone.value = '';
    date.value = '';
    work.value = '';
    dapart.value = '';
    salary.value = '';
    statue.value = '';
    gender.value = '';
    maritalStatus.value = '';
}
// read
function showData() {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += ` 
        <tr class="text-center">
        <td>${i}</td>
        <td><img class="ms-2" src="${dataPro[i].imagePreview}" alt="">${dataPro[i].arName}</td>
        <td>${dataPro[i].date}</td>
        <td> ${dataPro[i].work}</td>
        <td> ${dataPro[i].dapart}</td>
        <td>${dataPro[i].salary}</td>
        <td><label for="">${dataPro[i].statue}</label></td>
        <td><button class="btn btn-outline-dark">المزيد</button></td>
    </tr>
    `
    }
    document.getElementById('tbody').innerHTML = table;
} showData();