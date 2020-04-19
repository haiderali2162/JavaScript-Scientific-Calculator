let x = document.getElementById("result");


$("#btnEqual").click(function (e) { 
    e.preventDefault();
    
    

    let answer = document.getElementById("final-answer");

    answer.value = expressionEvaluator(x.value);
 

});


$("#btnDel").click(function(){
    x.value = x.value.substring(0, x.value.length - 1);
})


$("#btnMod").click(function (e) { 
    e.preventDefault();

    x.value += "%";

});


$("#btnPlus").click(function (e) { 
    e.preventDefault();

    x.value += "+";

});



$("#btnMinus").click(function (e) { 
    e.preventDefault();

    x.value += "-";

});

$("#btnSq").click(function (e) { 
    e.preventDefault();

    x.value += "^";

});



$("#btnMul").click(function (e) { 
    e.preventDefault();

    x.value += "*";

});


$("#btnDiv").click(function (e) { 
    e.preventDefault();

    x.value += "/";

});





$("#btnC").click(function (e) { 
    e.preventDefault();
    x.value = "";
});



$("#btnOne").click(function (e) { 
    e.preventDefault();
    x.value += 1;
});


$("#btnTwo").click(function (e) { 
    e.preventDefault();
    x.value += 2;
});


$("#btnThree").click(function (e) { 
    e.preventDefault();
    x.value += 3;
});


$("#btnFour").click(function (e) { 
    e.preventDefault();
    x.value += 4;
});


$("#btnFive").click(function (e) { 
    e.preventDefault();
    x.value += 5;
});



$("#btnSix").click(function (e) { 
    e.preventDefault();
    x.value += 6;
});



$("#btnSeven").click(function (e) { 
    e.preventDefault();
    x.value += 7;
});



$("#btnEight").click(function (e) { 
    e.preventDefault();
    x.value += 8;
});


$("#btnNine").click(function (e) { 
    e.preventDefault();
    x.value += 9;
});


$("#btnZero").click(function (e) { 
    e.preventDefault();
    x.value += 0;
});

