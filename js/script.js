
const titleClickHandler = function(event) {
    event.preventDefault();
    
    const templates = {
  articleLink: Handlebars.compile(
    document.querySelector('#template-article-link').innerHTML
  ),

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
console.log(links);

for(const link of links) {
    link.addEventListener('click', titleClickHandler);
}

//TITLE LIST
const opt = {
    articleSelector: '.post',
    titleSelector: '.post-title',
    titleListSelector: '.titles',
  }
/*
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';


  /* DONE remove contents of titleList */
  const titleList = document.querySelector(opt.titleListSelector);

    titleList.innerHTML = '';
    
    let html = '';
    
  /* [DONE]for each article */
    for (let article of articles) {
      /*[DONE] get the article id */
      const articleId = article.getAttribute('id');

        /* find the title element */
      const articleTitle = article.querySelector(opt.titleSelector).innerHTML;

       /*[DONE] create HTML of the link */
      // const linkHTML = `<li><a href='#${articleId}'><span>${articleTitle}</span></a></li>`;
      const linkHTMLData = { id: articleId, title: articleTitle };
      const linkHTML = templates.articleLink(linkHTMLData);

    /* [DONE]insert link into titleList */
     html = html + linkHTML;
     console.log(html);
     
    const links = document.querySelectorAll('.titles a');
    console.log(links);

    for(const link of links) {
        link.addEventListener('click', titleClickHandler);
    }

  }
  titleList.innerHTML = html;
}

generateTitleLinks();