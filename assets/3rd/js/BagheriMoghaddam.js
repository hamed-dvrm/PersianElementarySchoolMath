
function $(id){ return document.getElementById(id);}
var answerPack1 = ['547','546','537','536','6','7','6','7','3','4','246','247','6','7'];
var answerPack1FA=['۵۴۷','۵۴۶','۵۳۷','۵۳۶','۶','۷','۶','۷','۳','۴','۲۴۶','۲۴۷','۶','۷'];
var answerPack2 =['890','895','897','490','495','497','۸۹۰','۸۹۵','۸۹۷','۴۹۰','۴۹۵','۴۹۷'];
var answerPack3=['12','11'];
var answerPack3FA=['۱۲','۱۱'];
var answerPack4=['107','7','10','10'];
var answerPack4FA=['۱۰۷','۷','۱۰','۱۰'];
var answerPack5=['9'];
var answerPack5FA=['۹'];
var answerPack6=['10'];
var answerPack6FA=['۱۰'];

function test1_26(index,id) {
    var obj = $(id);
    if (obj.value === answerPack1[index]||obj.value===answerPack1FA[index]) {
        obj.style.backgroundColor = "#67b56f";
        window.alert("صد آفرین برو بعدی!");
    } else {
        obj.style.backgroundColor = "#db3a2e";
        window.alert("غلطه !");
    }
}

function test2_26(id){
    var obj=$(id)
    if(answerPack2.includes(obj.value)){
        obj.style.backgroundColor = "#67b56f";
        window.alert("احسنت!");
    }
    else {
    obj.style.backgroundColor = "#db3a2e";
        window.alert("غلط  بود!");
    }
}

function test3_26(index,id){
    var obj = $(id);
    if (obj.value === answerPack3[index]||obj.value===answerPack3FA[index]) {
        window.alert("باریک الله!");
        obj.style.backgroundColor = "#67b56f";
    } else {
        obj.style.backgroundColor = "#db3a2e";
        window.alert("بیشتر فکر کن!");
    }
}

function test1_27(index,id){
    var obj = $(id);
    if (obj.value === answerPack5[index] || obj.value===answerPack5FA[index]) {
        window.alert("فوقع العاده بود!");
        obj.style.backgroundColor = "#67b56f";
    } else {
        obj.style.backgroundColor = "#db3a2e";
        window.alert("غلط کردی !");
    }
}

function test2_27(index,id){
    var obj = $(id);
    if (obj.value === answerPack5[index] || obj.value===answerPack5FA[index]) {
        window.alert("درست بود!");
        obj.style.backgroundColor = "#67b56f";
    } else {
        obj.style.backgroundColor = "#db3a2e";
        window.alert("دوباره تلاش کن!");
    }
}


function test3_27(index,id){
    var obj = $(id);
    if (obj.value === answerPack6[index] || obj.value===answerPack6FA[index]) {
        window.alert("خیلی عالی بود!");
        obj.style.backgroundColor = "#67b56f";
    } else {
        obj.style.backgroundColor = "#db3a2e";
        window.alert("بی دقتی کردی!");
    }
}