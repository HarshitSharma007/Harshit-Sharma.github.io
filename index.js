
 const sbtn=document.getElementById("submit1");



sbtn.addEventListener("click",(e)=>{
    e.preventDefault();
   

const name1 =document.getElementById("fullname").value;
const message =document.getElementById("message").value;
const useremail =document.getElementById("email").value;
    console.log(name1);
console.log("dddd");
console.log(message);
console.log(useremail);
Email.send({
    Host : "smtp.mailtrap.io",
    Username : "7ab76cac40c621",
    Password : "09d8ac7f78d76f",
    To : 'harshittheone008.com',
    From :`${useremail}`,
    Subject : "This is the subject",
    Body : message
}).then(
  message => alert("message sent")
)
});


