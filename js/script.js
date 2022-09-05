/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//Defined function to display a page of 9 students
let studentList = document.querySelector(".student-list");

function showPage(list, page) {
   console.log(list);
    
   let startIndex = (page * 9) - 9; //(page parameter * items per page) - items per page
   let endIndex = page * 9; // page parameter * items per page

   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = "";

   for(let i = 0 ; i<list.length; i++){
      if( i>= startIndex && i <endIndex){
         studentList.innerHTML += `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.medium}">
           <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li>
     
         `
      }

   }
}
    // loop over the length of the `list` parameter
   //for(list.length) {
      
   
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  // create a variable to calculate the number of   pages needed
  let numOfPages = list.length / 9;
  // select the element with a class of `link-list`   and assign it to a variable
  let linkList = document.querySelector(".link-list");

  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = "";

  // loop over the number of pages needed
  for(let i = 0; i < numOfPages; i++){
    // create the elements needed to display the pagination button
    linkList.insertAdjacentHTML('beforeend', `
    <li>
      <button type="button">${[i + 1]}</button>
    </li>
    `
    )
  }
  linkList.firstElementChild.firstElementChild.className = 'active';

  // Now create an event listener on linkList that will be called when there is a click event.
  linkList.addEventListener("click", (e) => {
    if(e.target.localName == "button"){
      document.querySelector('.active').className = "";
      e.target.className = "active";
      console.log(e.target.textContent);
      showPage(list, e.target.textContent)
    }
  })

}


  // give the first pagination button a class of "active"
 
   // Call functions

   showPage(data, 1); 
addPagination(data)