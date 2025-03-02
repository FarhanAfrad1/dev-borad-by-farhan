function getValueByUsingId(id){
    return parseInt(document.getElementById(id).innerText);
}
function updateInnerText(id,value){
    document.getElementById(id).innerText = value;
} 