// for frontend

document.getElementById('name').addEventListener("input", () => { checkError("name") });
document.getElementById('Uname').addEventListener("input", () => { checkError("Uname") });
document.getElementById('Password').addEventListener("input", () => { checkError("Password") });
document.getElementById('Cpassword').addEventListener("input", () => { checkError("Cpassword") });
document.getElementById('number').addEventListener("input", () => { checkError("number") });
document.getElementById('email').addEventListener("input", () => { checkError("email") });

// main
function checkError(input) {
    let ele1 = document.getElementById('name').value;
    let ele2 = document.getElementById('Uname').value;
    let ele3 = document.getElementById('Password').value;
    let ele4 = document.getElementById('Cpassword').value;
    let num = document.getElementById('number').value;
    let em = document.getElementById("email").value;
    let iCheck = document.getElementsByClassName('fa-check-circle');
    let iEcal = document.getElementsByClassName('fa-exclamation');
    let err = document.getElementsByClassName('errorM');
    // let submit = false;
    switch (input) {
        case "name":
            if (ele1.length < 6) {
                iCheck[0].classList.remove('success');
                err[0].classList.add('error');
                iEcal[0].classList.add('error');
                // submit = false;
            } else {
                iCheck[0].classList.add('success');
                err[0].classList.remove('error');
                iEcal[0].classList.remove('error');
                // submit = true;
            }
            break;
        case "Uname":
            if (ele2.length < 4) {

                err[1].classList.add('error');
                iEcal[1].classList.add('error');
                iCheck[1].classList.remove('success');
                // submit = false;

            } else {

                err[1].classList.remove('error');
                iEcal[1].classList.remove('error');
                iCheck[1].classList.add('success');
                // submit = true;
            }
            break;
        case "email":
            if (em.length < 7 || em.indexOf("@") == -1 || em.indexOf(".") == -1 || !((em.indexOf("in") == -1) ^ (em.indexOf("com") == -1))) {
                iCheck[2].classList.remove('success');
                err[2].classList.add('error');
                iEcal[2].classList.add('error');
                // submit = false;
            } else {

                iCheck[2].classList.add('success');
                err[2].classList.remove('error');
                iEcal[2].classList.remove('error');
                // submit = true;
            }
            break;
        case "number":
            if (num.length != 10) {

                err[3].classList.add('error');
                iEcal[3].classList.add('error');
                iCheck[3].classList.remove('success');
                // submit = false;

            } else {

                err[3].classList.remove('error');
                iEcal[3].classList.remove('error');
                iCheck[3].classList.add('success');
                // submit = true;
            }
            break;
        case "Password":
            if (ele3.length < 8 || !((ele3.indexOf('@') == -1) ^ (ele3.indexOf('#') == -1) ^ (ele3.indexOf('&') == -1) ^ (ele3.indexOf('$') == -1))) {
                err[4].classList.add('error');
                iEcal[4].classList.add('error');
                iCheck[4].classList.remove('success');
                // submit = false;

            } else {

                err[4].classList.remove('error');
                iEcal[4].classList.remove('error');
                iCheck[4].classList.add('success');
                // submit = true;
            }
            break;
        case "Cpassword":
            if (ele4 != ele3) {

                err[5].classList.add('error');
                iEcal[5].classList.add('error');
                iCheck[5].classList.remove('success');
                // submit = false;

            } else {

                err[5].classList.remove('error');
                iEcal[5].classList.remove('error');
                iCheck[5].classList.add('success');
                // submit = true;
            }
            break;
    }
}