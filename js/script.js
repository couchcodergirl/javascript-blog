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

  /* [DONE]add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

  /* [DONE]remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article');
   
    for(let activeArticle of activeArticles){
    activeLink.classList.remove('active');
    }

  /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = document.getElementById('href');//?
    console.log('Link was clicked', articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector('href');
    console.log('Link was clicked', targetArticle);

  /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
    console.log('clickedElement:', clickedElement);
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);

titleClickHandler(); /*jak wywołać funkcję?*/