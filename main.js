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
 function clearUL(){
    var ul=  document.querySelector(".item-list"); // the value inside the itemlist
    ul.innerHTML="";
 }
 function handleEventclick(){
    var inputvalue =document.querySelector("#new-item");//to get input field value
    var value = inputvalue.value; // to set the value of input field value;
   if (value) { // to check is value empty?
       clearUL();  // to remove previous array items list.
    items.push(value); 
    AttachItems(items); }
 }
  document.querySelector("#Add-Item").addEventListener("click",handleEventclick); //this is for when i click the button
 AttachItems(items);