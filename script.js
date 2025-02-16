function showAlert(){
    Alert('hello! the button is clicked,this is javascript alert.');
}
function changeText(){
    document.getElementById('text').innerHTML = 'text changed!';
}
function handleClick(){
    document.getElementById('clickMessage').innerHTML = 'Button Clicked';
}
function validateForm(){
    let name = document.getElementById('name').value;
    if(name == ''){
        alert('Please enter your name.');
        return false;
    }
    return true;
}
function checkNumber(){
    let num = parseInt(document.getElementById('numberInput').value);
    let result = num > 10 ? 'greater than 10': '10 or less';
    document.getElementById('numberResult').innerHTML = result;
}
function checkAge(){
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >= 18){
        document.getElementById('ageResult').innerHTML = 'you are an adult';
    }
    else{
        document.getElementById('ageResult').innerHTML = 'you are a minor';

    }
}
function displayArrayItem(){
    let items = ['apple','cherry','banana','date','mango'];
    let index = parseInt(document.getElementById('arrayIndex').value);
    let result = items[index]||'invalid index';
    document.getElementById('arrayResult').innerHTML = result;
}