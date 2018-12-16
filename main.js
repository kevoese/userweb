
const signup = document.querySelector(".my-form");
const login = document.querySelector(".signin");
const loginbar = document.getElementById('login');
const registerbar = document.getElementById('register');
const loginWrapper = document.querySelector(".signin");
const signupWrapper = document.querySelector(".my-form");
const mydatabase = [];


const getSignupInfo = () =>{
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value.trim();
    let username = document.getElementById("username").value.trim();
    let gender = document.getElementById("gender").value;
    let obj = {};
    obj = {username, email, password, gender};
    return obj;
}
// const clear = (field) => {
//     document.getElementById(field).value = '';
// }

const getLoginInfo = () =>{
    let password = document.getElementById('loginpassword').value;
    let username = document.getElementById("loginusername").value.trim();
    let obj = {};
    obj = {username, password};
    return obj;
}

const itExists = (DBdata, userdata) => {
    for (element of mydatabase)
        if(element[DBdata] === userdata)
            return true;
    return false;
}

loginbar.addEventListener("click", () => {
    loginWrapper.style.display = "inline-block";
    signupWrapper.style.display = "none";
})

registerbar.addEventListener("click", () => {
    loginWrapper.style.display = "none";
    signupWrapper.style.display = "inline-block";
})

signup.addEventListener("submit", (event) => {
    event.preventDefault();
    const details = getSignupInfo();
    let out  = (itExists("username", details.username)) | (itExists("email", details.email));
    // (out) && (alert("USERNAME OR EMAIL ALREADY EXISTS"));
    signup.reset();
    if((mydatabase.length === 0) || (!out))
         mydatabase.push(details);
    console.log(mydatabase);   
})

// const loginMatch = (username, password) =>{
//     for(i of mydatabase){
//         if(i.username === username)
//             return (i.password === password)
//     }
// }

login.addEventListener("submit", (event) => {
    event.preventDefault();
    let out = false;
    const details = getLoginInfo();
    login.reset();
    for(i of mydatabase){
        if(i.username === details.username)
            out = (i.password === details.password)
    }
    
    // loginMatch(details.username, details.password);
    
})