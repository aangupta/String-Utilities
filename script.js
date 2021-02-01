const lcase = document.querySelector("#tolowercase");
const ucase = document.querySelector("#touppercase");
const charcount = document.querySelector("#charactercount");
const reverse = document.querySelector("#reverse");
const wordcount = document.querySelector("#wordcount");
const input = document.querySelector("#inputstring");

lcase.addEventListener('click',()=>{
    document.querySelector("#outputstring").value = input.value.toLowerCase();
});
ucase.addEventListener('click',()=>{
    document.querySelector("#outputstring").value = input.value.toUpperCase();
});
charcount.addEventListener('click',()=> {
    document.querySelector("#outputstring").value = parseInt(input.value.length);
});
reverse.addEventListener('click',()=> {
    document.querySelector("#outputstring").value = input.value.split("").reverse().join("");
});
wordcount.addEventListener('click',()=> {
    document.querySelector("#outputstring").value = parseInt(input.value.split(" ").length);
});