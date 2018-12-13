var items = [
    "Go to the market", 
    "Clean the room", 
    "Clean the laptop", 
    "Buy books",
    "go to....",
];
 function AttachItems(items){
   var ul=  document.querySelector(".item-list");
   for (var i=0;i<items.length;i++){
       var li=makeItems(items[i]);
       ul.appendChild(li);

   }
 }

 function makeItems(text){
     var li = document.createElement("li");
     var textnode=document.createTextNode(text);
     li.appendChild(textnode);
     return li;
 }
 AttachItems(items);