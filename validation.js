let fnameNode, ageNode, mobileNode, emailNode, passNode, c_passNode, unameNode, checkboxNode;
let errorNode1, errorNode2, errorNode3, errorNode4, errorNode5, errorNode6, errorNode7, regf;
$(function () {
    fnameNode = $("#fname");
    ageNode = $("#age");
    mobileNode = $("#contact");
    emailNode = $("#mail");
    passNode = $("#pass");
    c_passNode = $("#confirmpass");
    unameNode = $("#uname");
    errorNode1 = $("#error1");
    errorNode2 = $("#error2");
    errorNode3 = $("#error3");
    errorNode4 = $("#error4");
    errorNode5 = $("#error5");
    errorNode6 = $("#error6");
    errorNode7 = $("#error7");
    checkboxNode = $("#check");

    let array = [errorNode1, errorNode2, errorNode3, errorNode4, errorNode5, errorNode6, errorNode7];
    for (let node of array) {
        // node.css('color',"red");
        node.css({ color: "red" });
    }
    fnameNode.blur(() => validate1());
    ageNode.blur(() => validate2());
    mobileNode.blur(() => validate3());
    emailNode.blur(() => validate4());
    unameNode.blur(() => validate5());
    passNode.blur(() => validate6());
    c_passNode.blur(() => validate7());
    $("#regForm").submit(() => validateForm());
    checkboxNode.change(() => showPassword());
});


function validateForm() {
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    let v4 = validate4();
    let v5 = validate5();
    let v6 = validate6();
    let v7 = validate7();
    return (v1 && v2 && v3 && v4 && v5 && v6 && v7);
}

function validate1() {
    let fname = fnameNode.val();
    let regex = new RegExp("^[A-Za-z]*$");
    errorNode1.html("");
    if (fname === '') {
        errorNode1.html("<small>First name is required</small>");
        fnameNode.css({ border: "2px solid red" });
        return false;
    }
    else if (regex.test(fname) == false) {
        errorNode1.html("<small>First name must have only letters</small>");
        fnameNode.css({ border: "2px solid red" });
        return false;
    }
    else {
        fnameNode.css({ border: "2px solid green" });
        return true;
    }
}


function validate2() {
    let age = ageNode.val();
    errorNode2.html("");
    if (age === '') {
        errorNode2.html("<small>Age is required</small>");
        ageNode.css({ border: "2px solid red" });
        return false;
    }
    else {
        ageNode.css({ border: "2px solid green" });
        return true;
    }
}
function validate3() {
    let mobile = mobileNode.val();
    errorNode3.html("");
    let regex = new RegExp("^[0-9]{10}$");
    console.log(mobile);
    console.log(regex.test("mobile"));
    if (mobile === '') {
        errorNode3.html("<small>Mobile number is required</small>");
        mobileNode.css({ border: "2px solid red" });
        return false;
    }
    else if (regex.test(mobile) === false) {
        errorNode3.html("<small>Mobile number must be 10 digits number</small>");
        mobileNode.css({ border: "2px solid red" });
        return false;
    }
    else {
        mobileNode.css({ border: "2px solid green" });
        return true;
    }

}
function validate4() {
    let email = emailNode.val();
    errorNode4.html("");
    if (email === '') {
        errorNode4.html("<small>Email is required</small>");
        emailNode.css({ border: "2px solid red" });
        return false;
    }
    else if (!email.includes('@') || email.endsWith('@')) {
        errorNode4.html("<small>Please enter valid email</small>");
        emailNode.css({ border: "2px solid red" });
        return false;
    }
    else {
        emailNode.css({ border: "2px solid grren" });
        return true;
    }
}
function validate5() {
    let uname = unameNode.val();
    errorNode5.html("");
    if (uname === '') {
        errorNode5.html("<small>username is required</small>");
        unameNode.css({ border: "2px solid red" });
        return false;
    }
    else if (uname.length < 3 || uname.length > 10) {
        errorNode5.html("<small>username must be 3 to 10 characters long</small>");
        unameNode.css({ border: "2px solid red" });
        return false;
    }
    else {
        unameNode.css({ border: "2px solid green" });
        return true;
    }
}
function validate6() {
    let pass = passNode.val();
    errorNode6.html("");
    let regx = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if (pass === '') {
        errorNode6.html("<small>Password is required</small>");
        passNode.css({ border: "2px solid red" });
        return false;
    }
    else if (regx.test(pass) == false) {
        errorNode6.html("<small>Password should be 6 to 12 characters long Password should have atleast</small>");
        let ulNode = $('<ul>');
        errorNode6.append(ulNode);
        ulNode.css({ fontSize: "10px" });
        let ar = ['Capital Letter', 'Small Letter', 'Digit', 'Special Symbol'];
        for (let vallue of ar) {
            let liNode = $('<li>');
            liNode.text(vallue);
            ulNode.append(liNode);
        }
        passNode.css({ border: "2px solid red" });
        return false;
    }
    else {
        passNode.css({ border: "2px solid green" });
        return true;
    }
}
function validate7() {
    let cpass = c_passNode.val();
    let pass = passNode.val();
    errorNode7.html("");
    if (cpass === '') {
        errorNode7.html("<small>Password is required</small>");
        c_passNode.css({ border: "2px solid red" });
        return false;
    }
    else if (cpass != pass) {
        errorNode7.html("<small>Both passwords should match</small>");
        c_passNode.css({ border: "2px solid red" });
        return false;
    }
    else {
        c_passNode.css({ border: "2px solid green" });
        return true;
    }
}
function alert1() {
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    let v4 = validate4();
    let v5 = validate5();
    let v6 = validate6();
    let v7 = validate7();
    let result1 =  (v1 && v2 && v3 && v4 && v5 && v6 && v7);
    if (result1 = true) {
        alert("Sucessfully Submited");
    }
    else{
        alert("Submit The Form First");
    } 
}

function myfun() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function showPassword() {
    if (checkboxNode.prop('checked')) {
        passNode.attr({ type: "text" }); // {} : can add multiple key value pairs
    } else {
        passNode.attr('type', "password"); // short form to add single key value pair
    }
} 
