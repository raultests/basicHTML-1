function ageCalc() {
    yearOfBirth = document.getElementById('yearOfBirth').value
    currentAge = (new Date()).getFullYear() - yearOfBirth
    document.getElementById('yearDisplay').innerHTML = "YOU ARE " + currentAge + " YEARS OLD!";
}
function clearAll() {
    yearOfBirth = document.getElementById('yearOfBirth').value = '';
    document.getElementById('yearDisplay'). innerHTML = '';
}
