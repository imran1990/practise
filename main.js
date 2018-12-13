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
     
     var a=document.createElement("a"); //for creat anchor tag
     a.href="#"; // used # as showing the link
     a.innerHTML="X"; // to show cross
     a.onclick = function(){
         deleteitem(this);
     }

     var textnode=document.createTextNode(text);

     li.appendChild(a);
     li.appendChild(textnode);
     return li;
 }

 function deleteitem(anchor){
    console.log(anchor.parentNode.lastChild.textContent);
    
    var item = anchor.parentNode.lastChild.textContent;// to know the last child of li
    var index = items.indexOf(item); // to know the index of array
    if(index!== -1){
        items.splice(index, 1);
        clearUL();
        AttachItems(items);
     
    }

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
    AttachItems(items);
   inputvalue.value=""; // to clear after clicking the button
   document.querySelector(".msg").innerHTML=""; //to clear "no items found msg after adding new input"
}
    
    else
      document.querySelector(".msg").innerHTML="No items found";
 }


  document.querySelector("#Add-Item").addEventListener("click",handleEventclick); //this is for when i click the button
 
  AttachItems(items);