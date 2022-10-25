//var bFirst=true ;
var bFinish=true ;
const putDest = document.getElementById("formula");
const btnStart = document.getElementById("startButton");
const btnPrev = document.getElementById("prevButton");
const btnNext = document.getElementById("nextButton");
const btnOpenDlg = document.getElementById("dlg-open");
const infoArea = document.getElementById("info");
putDest.style.margin ="0 10px 0 10px";

let dialog = document.querySelector('dialog#dlgModeSel'); // dialog（モーダルダイアログ）の宣言
//const selList = document.getElementById("selectList");
//const btnSelMode = document.getElementsByClassName("dlg-close");
//var loopIdx=0;
//for(const elem of btnSelMode)
//{
  //elem.style.fontSize ="18pt";
  //elem.style.marginBottom ="10px";
  //elem.innerHTML = config[Object.keys(config)[loopIdx]].title;
//  loopIdx++;
//}
const btnSelMode = document.getElementById("mode-selecter");
//alert(Object.keys(config).length);
btnSelMode.style.fontSize ="18pt";
for(var loopIdx=0; loopIdx<Object.keys(config).length; loopIdx++)
{
  //alert(config[Object.keys(config)[loopIdx]].title);
  let opt=document.createElement('option');
  opt.value = loopIdx;
  opt.textContent = config[Object.keys(config)[loopIdx]].title;
  btnSelMode.appendChild(opt);
};

    let emojiAry=["x1f5ff","x1f5fd","x1F3EF","x1F3f0"
                               ,"x1F3dd","x1F30b","x1F305","x1F5fe"
                                ,"x1F386","x1F30c","x1F303","x1F306","x1F307"
                                ,"x1F382","x1F36d","x1F379","x1F37b","x1F367"
                                ,"x1F363","x1F35f","x1F357","x1F336"
    ];

var aryAll = [];
var dustbox = [];
var cfg =null;

btnPrev.style.display ="none";
btnNext.style.display ="none";
btnStart.style.display ="none";

//init(config.add_lv1);
//init(config.subt_lv1);

dialog.showModal();

var shuffleFlag =true;
var modeSelectNum = -1;
document.getElementById('dlgBtnKakutei').disabled = true;

function init(cfg_arg){
bFinish=true ;

cfg=cfg_arg;
aryAll.length = 0;
dustbox.length = 0;

const mainCaption = document.getElementById("mainCaption");
mainCaption.innerHTML = cfg.title;
//mainCaption.innerHTML =
      "足し算（たしざん）【&#x2795;】";
infoArea.innerHTML= ""; //"くり上がり無し";
btnStart.innerHTML ="スタート &#x1F449;";
btnPrev.innerHTML ="&#x23EA;もどる";
btnNext.innerHTML ="つぎへ &#x23E9;";

btnPrev.style.display ="none";
btnNext.style.display ="none";
btnStart.style.display ="inline-block";

putDest.innerHTML="";
putDest.style.border ="0";
}

function changeShuffle()
{
    shuffleFlag=!shuffleFlag;
}

function changeModeSel(obj)
{
    let elem = document.getElementById('dlgBtnKakutei');
    modeSelectNum=obj.options[obj.selectedIndex].value;
    if(modeSelectNum<0 && !elem.disabled){
       elem.disabled = true;
    }
    else
    {
       elem.disabled = false;
    }
}


function onBtnStart(){
   btnPrev.style.display ="inline-block";
   btnNext.style.display ="inline-block";
   btnStart.style.display ="none";
    btnPrev.disabled = true;
    btnOpenDlg.style.display = "inline-block "; 

   putDest.style.border ="1px solid gray ";
   putDest.style.backgroundColor = cfg.style_mainArea.backgroundColor; //"#aff";
   putDest.style.color = cfg.style_mainArea.color; //"blue";

   dustbox.length = 0;
   aryAll = cfg.array_func(); //mkArray();
   aryAll.sort(function(a,b){return (a[0]-b[0]);});

   if(shuffleFlag){
     arrayShuffle(aryAll);
   }

   btnStart.innerHTML ="リスタート &#x1F501;";
   cfg.setFormula();
  }

function onBtnPrev(){
  if(dustbox.length>0){
    aryAll.push(dustbox[0]);
    dustbox.shift();
  }

  if(dustbox.length===0)
  {
     btnPrev.disabled = true;
     btnOpenDlg.style.display = "inline-block"; 
     btnStart.style.display = "none"; 
  }

  cfg.setFormula();
}

function  onBtnNext(){
 
 //if(bFirst){
     // bFirst=false;
 //}
//else 
if(bFinish){
   bFinish=false;
//   btnNext.innerHTML ="次へ（つぎへ）";
}

{
  dustbox.unshift(aryAll[aryAll.length-1]);
  aryAll.pop();
}

 if(dustbox.length>0){
   btnPrev.disabled = false;
   btnOpenDlg.style.display = "none"; 
   btnStart.style.display = "inline-block ";  
 }
 
 if(aryAll.length<1){
    putDest.innerHTML="おわり &#"+arrayShuffle(emojiAry)[0] +";";
    infoArea.innerHTML="おつかれさまでした &#x1F600; &#x1F44D;";

//&#x1F600; // => 😀
//&#x1F44D; // => 👍

    bFinish =true;
    btnStart.style.display ="inline-block";
    btnPrev.style.display ="none";
    btnNext.style.display ="none";
    btnOpenDlg.style.display = "inline-block"; 
    aryAll = Array.from(dustbox);
    dustbox.length = 0;
    return;
 }

  cfg.setFormula();
  //infoArea.innerHTML+="  &#"+arrayShuffle(emojiAry)[0] +";";
}


//function  mkArray(){
// var ret=[];
//
////  var count=0;
////  for (let step = 0; step < 10; step++) {
////    count += step+1;
////  }
//  
//  for (let i = 0; i < 10 ; i++) {
//    for (let j = i; j>=0; j--) {
//      ret.push([i+1-j, j]);
//    }
//  }
//
//  // 10 + 0 は不要なので消す
//  ret.pop();
//  
// return ret;
//}

function onDlgClose(){
  init(config[Object.keys(config)[modeSelectNum]]); 
  dialog.close();
  onBtnStart();
}
