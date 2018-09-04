function pairElement(str) {
    return str.split("").map(function (el) {
     if (el === "A") {
       return ["A", "T"];
     } else  if (el === "T") {
       return ["T", "A"];
     } else if (el === "C") {
       return ["C", "G"];
     } else {
       return ["G", "C"];
     }
   });
 }
 
 pairElement("GCG");