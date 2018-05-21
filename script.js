/* JavaScript code here */
//task 1

console.log("External JS")
   
 //task 2
 
 function sumArray(arr)
 {
     var sum = 0;
     arr.forEach(function(value,index)
     {
         sum += value;
         
     });
     return sum;
 }
 console.log(sumArray([1,2,3,4,5]));
 
 //task 3
 
 function checkEmail(emailstring)
 {
     var emailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var match = emailFormat.test(emailstring);
     return match;
 }
 
 console.log(checkEmail("salman@iub.com"));
 console.log(checkEmail("salman.com"));
 
 
 
 //task 4
 
 var library = [ 
 {
 author: 'Bill Gates',
 title: 'The Road Ahead',
 readingStatus: true
 },
 {
 author: 'Steve Jobs',
 title: 'Walter Isaacson',
 readingStatus: true
 },
 {
 author: 'Suzanne Collins',
 title:  'Mockingjay: The Final Book of The Hunger Games', 
 readingStatus: false
 git }];


 
 
 function getReadingStatus(index)
 {
     return library[index].readingStatus;
     
     
 }
 console.log(getReadingStatus(1));
 
 
 
 