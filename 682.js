function handleC(sum, numStack) {
  const last = numStack.pop()
  sum -=last;
  return sum;
}

function handleD(sum, numStack) {
  const length = numStack.length;
  const last = 2 * numStack[length-1];
  numStack.push(last);
  sum += last;
  return sum;
}

function handlePlus(sum, numStack) {
  const length = numStack.length;
  const last = numStack[length-1] + numStack[length-2];
  numStack.push(last);
  sum += last;
  return sum;
}

const handlerMap = {
  C: handleC,
  D: handleD,
  '+': handlePlus,
}

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const numStack = [];
  let sum = 0;

  for(let i = 0; i < ops.length; ++i) {
    if (handlerMap[ops[i]]) {
      sum = handlerMap[ops[i]](sum, numStack);
    } else {
      numStack.push(+ops[i]);
      sum += numStack[numStack.length - 1];
    }

  }
  return sum;
};

console.log(calPoints(["8373","C","9034","-17523","D","1492","7558","-5022","C","C","+","+","-16000","C","+","-18694","C","C","C","-19377","D","-25250","20356","C","-1769","-8303","C","-25332","29884","C","+","C","-29875","-15374","C","+","14584","13773","+","17037","-28248","+","16822","D","+","+","-19357","-26593","-8548","4776","D","-8244","378","+","-19269","-25447","18922","-16782","2886","C","-17788","D","-22256","C","308","-9185","-19074","1528","28424","D","8658","C","7221","-13704","8995","-21650","22567","-29560","D","-9807","25632","6817","28654","D","-18574","C","D","20103","7875","C","9911","23951","C","D","C","+","18219","-20922","D","-24923"]))
