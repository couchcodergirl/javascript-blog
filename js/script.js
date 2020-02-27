
const titleClickHandler = function(event) {
    event.preventDefault();

    const clickedElement = this;
    console.log(clickedElement);

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(const activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

    /* [DONE]add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE]remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(const activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
};

const links = document.querySelectorAll('.titles a');

for(const link of links) {
    link.addEventListener('click', titleClickHandler);
}

//TITLE LIST
const opt = {
    articleSelector: '.post',
    articleTagsSelector: '.post-tags .list',
    articleAuthorSelector: '.post-author',
    titleSelector: '.post-title',
    titleListSelector: '.titles',
    tagsListSelector: '.tags.list',
    cloudClassCount: 5,
    cloudClassPrefix: 'tag-size-',
    authorsListSelector: '.authors.list'
  }
//z kodilli
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* DONE remove contents of titleList */
  const titleList = document.querySelector(opt.titleListSelector);

    titleList.innerHTML = '';

  /* for each article */
  for (let article of articles) {
      /*[DONE] get the article id */
  const articleId = article.getAttribute('id');

    /* get the article id */
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* find the title element */
  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  console.log(linkHTML)
    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */
    }
}

generateTitleLinks();