const lcase = document.querySelector("#tolowercase");
const ucase = document.querySelector("#touppercase");
const charcount = document.querySelector("#charactercount");
const reverse = document.querySelector("#reverse");
const wordcount = document.querySelector("#wordcount");
const input = document.querySelector("#input-text");
const clear = document.querySelector('#clear');
const copy = document.querySelector('#copy');

function changeButtonText() {
    setTimeout(() => {
        document.querySelector('#copy').value = 'Copy';
    }, 3000);
}
lcase.addEventListener('click',()=>{
    if(!input.value){
        alert('Enter the text');
    }
    document.querySelector("#output-text").value = input.value.toLowerCase();
   
});
ucase.addEventListener('click',()=>{
    if(!input.value){
        alert('Enter the text');
    }
    document.querySelector("#output-text").value = input.value.toUpperCase();
});
charcount.addEventListener('click',()=> {
    if(!input.value){
        alert('Enter the text');
    }
    document.querySelector("#output-text").value = parseInt(input.value.length);
});
reverse.addEventListener('click',()=> {
    if(!input.value){
        alert('Enter the text');
    }
    document.querySelector("#output-text").value = input.value.split("").reverse().join("");
});
wordcount.addEventListener('click',()=> {
    if(!input.value){
        alert('Enter the text');
    }
    document.querySelector("#output-text").value = parseInt(input.value.split(" ").length);
});
copy.addEventListener('click', () => {
    if(!document.querySelector('#output-text').value){
        alert('Result field is empty')
    }
    const copyText = document.querySelector('#output-text');
    copyText.select();
    document.execCommand('copy');
    document.querySelector('#copy').value = 'Copied';
    changeButtonText();
                    
});
clear.addEventListener('click', () => {
    document.querySelector("#input-text").value = '';
    document.querySelector("#output-text").value = '';
})