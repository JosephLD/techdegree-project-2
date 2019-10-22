//Treehouse Techdegree Project 2

//Here I create my global variables
//The constant that stores the list ietms
const listItems = document.getElementsByClassName("student-item cf");
//The constant that determines the number of items per page, in this case 10
const itemsPerPage = 10;

//Here is the function for how many items are shown on each page
 const showPage = (list, page) => {
   //These constants dynamilcaly control which item is the first and last on the displayed list
    const startIndex = (page * itemsPerPage) - itemsPerPage;
    const endIndex = (page * itemsPerPage) - 1 ;
    //Looping through all the list items
    for (let i = 0; i < list.length; i++) {
      //If the list items are between the start and end index they are displayed
       if (i >= startIndex && i <= endIndex) {
         list[i].style.display = '';
         //Otherwise their display is set to none
       } else {
         list[i].style.display = 'none'
       }
    }
 }



//Function to create, append, and add function to the page buttons
const appendPageLinks = () => {
  //This constant determines the number of buttons
  const numberOfPages = listItems.length / itemsPerPage;
  //Create a Div element for the buttons to append to
  const paginationDiv = document.createElement('div');
  //Fetching the page div element to append the paginationDiv to
  const pageDiv = document.querySelector('div.page');
  //Creating a UL element to hold the buttons
  const ul = document.createElement('ul');
  //Setting the new div element's class
  paginationDiv.className = 'pagination';
  //Appending the new div to the pageDiv
  pageDiv.appendChild(paginationDiv);
  //appending the Ul element to the paginationDiv
  paginationDiv.appendChild(ul);
  for (let i = 1; i < numberOfPages + 1; i++) {
    //creating the list elements that will house the button links
    const li = document.createElement('li');
    //creating the anchor tag that will act as the button
    const a = document.createElement('a');
    ul.appendChild(li)
    li.appendChild(a)
    a.textContent = i;
    //Adding functionality to the pagination links
    a.addEventListener('click', () => {
      //calling the show page function to display the proper list of names
      showPage(listItems, i);
      //looping through the links
      for (let i = 0; i < numberOfPages + 1; i++){
        //Selecting anchor elements to manipulate the active class
        const aActive = document.querySelectorAll('a');
        //setting anchor class to empty
        aActive[i].className = ''
        //only active anchor recieves the class of active
        event.target.className = 'active'
      }
    })
  }
}

appendPageLinks();
//calling show page function so that only the first 10 names show up when the page is loaded
showPage(listItems, 1);
