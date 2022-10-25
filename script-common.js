//

function arrayShuffle(array) {
  for(var i = (array.length - 1); 0 < i; i--){

    // 0〜(i+1)の範囲で値を取得
    var r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

function showRemain(){
  var ret="";
  return ret;
}

function  setFormula(strOperator){
  putDest.innerHTML=mkFormula(strOperator);
  infoArea.innerHTML="のこり<font color=red>" + aryAll.length + "</font>問（もん）";
}

function  mkFormula(strOperator){
 var ret="";

  var aryElem = aryAll[aryAll.length-1];

  ret += aryElem[0];
  ret += " ";
  ret += strOperator; // " + ";
  ret += " ";
  ret += aryElem[1];

  return ret +" = ❓";

 // return JSON.stringify(aryAll) + " / " + JSON.stringify(dustbox) ;
}

function  mkFormula2A(strOperator){
 var ret="";

  var aryElem = aryAll[aryAll.length-1];

  ret += aryElem[0];
  ret += " ";
  ret += strOperator; // " + ";
  ret += ' ❓';

  return ret +" = " + (aryElem[0]+aryElem[1]);

 // return JSON.stringify(aryAll) + " / " + JSON.stringify(dustbox) ;
}

function  mkFormula2B(strOperator){
 var ret="";

  var aryElem = aryAll[aryAll.length-1];

  ret += ' ❓';
  ret += " ";
  ret += strOperator; // " + ";
  ret += aryElem[1];

  return ret +" = " + (aryElem[0]+aryElem[1]);

 // return JSON.stringify(aryAll) + " / " + JSON.stringify(dustbox) ;
}
