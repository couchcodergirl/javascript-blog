const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('clickedElement (with plus): ' + clickedElement);
    
  /* [DONE]remove class 'active' from all article links  */
   const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
    
    /*for (let activeLink of activeLinks) {
if(clickedElement !== activeLink) activeLink.classList.remove('active');

//clickedElement.classList.toggle('active');*/
}

  /* [IN PROGESS]add class 'active' to the clicked link */
    clickedElement.classList.add('active');

  /* [DONE]remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.articles a.active');

    for(let activeArticle of activeArticles){
    activeLink.classList.remove('active');
    }

  /* [IN PROGESS] get 'href' attribute from the clicked link */

  /* [IN PROGESS] find the correct article using the selector (value of 'href' attribute) */

  /* [IN PROGESS] add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);

titleClickHandler(); /*jak wywołać funkcję?*/
