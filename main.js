let marks = prompt("enter the marks ");
if (marks >= 90 && marks <= 100) {
    alert("your marks are " + " " + marks + " " + "your grade is A+")
} else if (marks >= 80 && marks <= 100) {
    alert("your marks are " + " " + marks + " " + "your grade is A")
} else if (marks >= 70 && marks <= 100) {
    alert("your marks are " + " " + marks + " " + "your grade is B")
} else if (marks >= 60 && marks <= 100) {
    alert("your marks are " + " " + marks + " " + "your grade is C")
} else if (marks >= 50 && marks <= 100) {
    alert("your marks are " + " " + marks + " " + "your grade is D")
} else if (marks <= 40 && marks <= 100) {
    alert("your marks are " + " " + marks + " " + "your are fail")
} else if (marks > 100) {
    alert("the number put is greater than kindly put below than 100")
}