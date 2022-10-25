var config = {
 add_lv1:{
   title : "足し算（たしざん）【➕】レベル１",
   array_func:function(){
      var ret=[];
  
  for (let i = 0; i < 10 ; i++) {
    for (let j = i; j>=0; j--) {
      ret.push([i+1-j, j]);
    }
  }

     // 10 + 0 は不要なので消す
     ret.pop();
  
     return ret;
   },
   style_mainArea:{
       backgroundColor:"#aff",
       color:"blue"
   },
   //strOperator:"＋",
   setFormula:function(){
      setFormula("＋");
   }
 }
};

config.add_lv1a={
   title : "足し算（たしざん）【➕】 レベル1.5 (A)",
   array_func:function(){
      var ret=[];
  
      for (let i = 0; i < 10 ; i++) {
        for (let j = i; j>=0; j--) {
          ret.push([i+1-j, j]);
        }
      }
  
     return ret;
   },
   style_mainArea:{
       backgroundColor:"turquoise",
       color:"blue"
   },
   //strOperator:"＋",
   setFormula:function(){
      putDest.innerHTML=mkFormula2A("＋");
  infoArea.innerHTML="のこり<font color=red>" + aryAll.length + "</font>問（もん）";
   }
 };

config.add_lv1B = {
   title : "足し算（たしざん）【➕】 レベル1.5 (B)",
   array_func:function(){
      var ret=[];
  
      for (let i = 0; i < 10 ; i++) {
        for (let j = i; j>=0; j--) {
          ret.push([i+1-j, j]);
        }
      }
  
     return ret;
   },
   style_mainArea:{
       backgroundColor:"cornflowerblue",
       color:"blue"
   },
   //strOperator:"＋",
   setFormula:function(){
      putDest.innerHTML=mkFormula2B("＋");
  infoArea.innerHTML="のこり<font color=red>" + aryAll.length + "</font>問（もん）";
   }
 };

config.add_lv2 = {
   title : "足し算（たしざん）【➕】レベル2",
   array_func:function(){
      var ret=[];
  
  for (let i = 2; i < 10 ; i++) {
    for (let j = 2; j<10; j++) {
      if(i+j<11){continue;}
      ret.push([i, j]);
    }
  }  
     return ret;
   },
   style_mainArea:{
       backgroundColor:"#afa",
       color:"teal"
   },
   //strOperator:"＋",
   setFormula:function(){
      setFormula("＋");
   }
};

config.subt_lv1={
   title : "引き算（ひきざん）【➖】",
   array_func:function(){
      var ret=[];

       for (let i = 0; i < 10 ; i++) {
         for (let j = i+1; j>=0; j--) {
            ret.push([i+1, j]);
         }
       }
  
       return ret;
   },
   style_mainArea:{
       backgroundColor:"#fad",
       color:"#f07"
   },
 //  strOperator:"－",
   setFormula:function(){
      setFormula("－");
   }
 };
