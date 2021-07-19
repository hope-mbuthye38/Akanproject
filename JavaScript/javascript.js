let daysoftheweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let malenames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femalenames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama",]

function validateform() {
    let year = document.getElementById("YearField").value;
    let month = document.getElementById("MonthField").value;
    let day = document.getElementById("DateField").value;

    if (year == "" || month == "" || day == "") {
        console.log()
        alert("Please fill in all deatils")
        return false;
    } else {
        getuserdetails()   }
}
var getuserdetails = function () {
    let Inputyear = document.getElementById("YearField").value;
    let intyear = parseInt(Inputyear)

    let Inputmonth = document.getElementById("MonthField").value;
    let intmonth = parseInt(Inputmonth)

    let Inputdate = document.getElementById("DateField").value;
    let intdate = parseInt(Inputdate)

    let Inputgender = document.getElementById("gender").value
    let akanName;


    if (intyear > 2021) {
        console.log()
        alert("Input valid year")
        return false;
    }
    if (intdate <= 0 || intdate > 31) {
        console.log()
        alert("Input correct date")
        return false;
    }
    if (intmonth <= 0 || intmonth > 12) {
        console.log()
        alert("Input valid month")
        return false;
    }
}
