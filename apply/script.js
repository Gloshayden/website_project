var message = document.getElementById("after");
var form = document.getElementById("form");
message.style.classList.toggle("after")
function apply(event) {
    event.preventDefault();
    var result = confirm("Are you sure this information is correct?");
    if (result == true) {
        alert("your application has ben noted and we will be in touch via email")
        window.location.href = "../index.html"
    } else {
        alert("Please finish your form")
    }
}