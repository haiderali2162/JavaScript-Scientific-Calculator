

const expressionEvaluator = (expression) => {

    let expr = expression;

    let operators = ["^","%","/", "*", "+", "-"];


    for(let i = 0; i < operators.length; ++i){

        let operatorCount = operatorCounter(expr, operators[i]);

        if(operatorCount > 0){


            for(let j = 0; j < operatorCount; ++j){

                expr = calculat(expr, operators[i]);

            }//end of nested for loop

        }//end of if statement

    }
    console.log(`expressionEvaluator: expr = ${expr}`);
    return expr;

}


const operatorCounter = (expr, s) => {
    
    let counter = 0;

    for(let i = 0; i < expr.length; ++i){

        if(expr.charAt(i) == s){
            ++counter;
            //console.log(`operatorCounter: counter value ${counter}`);
        }//end of if
    }//end of for

    

    return counter;
}




const calculat = (expression, s) => {

    

        //let operatorIndex = expression.indexOf(s);
        let operatorIndex;

        if(s.length > 1){
            console.log("Operator if is executed");
            operatorIndex = expression.indexOf(s.search(/\+|\-/));
        }else{
            operatorIndex = expression.indexOf(s);
        }

        let extracted = extractOperands(expression, operatorIndex);

        let result = mathOp(Number(extracted.num), Number(extracted.denomi), s);

        let updatedExpr = updateExpr(expression, result, extracted.fdi, extracted.ldi);


    console.log(`Calculate: updated expressions ${updatedExpr}`);

    return updatedExpr;

}


const updateExpr = (expression, result, firstDigitIndex, lastDigitIndex) => {

    console.log(`updateExpr: expr->${expression}, result->${result},
    FDI->${firstDigitIndex}, LDI->${lastDigitIndex}`);

    

    if(firstDigitIndex == 0){

        let expr3 = expression.length - 1 == lastDigitIndex? "": expression.substring(lastDigitIndex+1);

        return result + expr3;

    }else{

        let expr1 = expression.substring( 0, firstDigitIndex  );

        console.log(`expr1-> ${expr1}`);

        let expr2 = expression.length -1 == lastDigitIndex? "":
        expression.substring(lastDigitIndex, expression.length+1);

        console.log(`expr2-> ${expr2}`);
        
        return expr1 + result + expr2;
    }

}



const extractOperands = (expression, index) => {

    //console.log("extractOperands is called");

    const {numerator,firstDigitIndex} = getNumerator(index, expression);
    const {denominator, lastDigitIndex} = getDenominator(index, expression);

    // console.log(`extractOperands: Num->${numerator} FDI->${firstDigitIndex}
    //  Denom->${denominator} LDI->${lastDigitIndex}`);

    // console.log("extractOperands is ending");

    return {num: numerator, denomi: denominator, fdi: firstDigitIndex, ldi: lastDigitIndex};
}




const getNumerator = (index, v) =>{

    //console.log(`getNumerator has values index = ${index} v = ${v}`);

    // console.log("Get numerator is called");

    let i = index - 1;
    while( !(/[\/|\*|\+|\-|\^]/.test(v.charAt(i))) && i != 0 ){
        --i;
        //console.log(`I in getNumerator = ${i}`);
    }


    //digit index (di)
    let di = ( (i == 0? i: i + 1) )

    // console.log(`getNumerator: Numerator-> ${v.substring( di, index )} & FDI-> ${di}`);

    return {numerator: v.substring( di, index ), firstDigitIndex: di};

}//end of getNumerator

const getDenominator = (index, v) =>{

    //console.log(`getDenomerator has values index = ${index} v = ${v}`);

    // console.log("Get denominator is called");

    let i = index + 1;
    while( !(/[\/|\*|\+|\-|\^]/.test(v.charAt(i))) && i < v.length ){
        ++i;
        //console.log(`I in getDenomerator = ${i}`);
    }

    // console.log(`getDenominator: Denominator-> ${v.substring(index + 1, i)} & LDI-> ${i-1}`);

    return {denominator: v.substring(index + 1, i), lastDigitIndex: (i-1)};

}



const mathOp = (op1, op2, s) => {

    if(s == "^"){
        return op1 ** op2;
    }
    else if(s == "/"){
        return op1 / op2;
    }
    else if(s == "*"){
        return op1 * op2;
    }
    else if(s == "+"){
        return op1 + op2;
    }
    else if(s == "-"){
        return op1 - op2;
    }
    else if( s == "%"){
        return op1 % op2;
    }

}









