('use strict');

/*const templates = {
  articleLink: Handlebars.compile(
    document.querySelector('#template-article-link').innerHTML
  ),
  tagLink: Handlebars.compile(
    document.querySelector('#template-tag-link').innerHTML
  ),
  authorLink: Handlebars.compile(
    document.querySelector('#template-author-link').innerHTML
  ),
  tagCloudLink: Handlebars.compile(
    document.querySelector('#template-tag-cloud-link').innerHTML
  ),
  authorCloudLink: Handlebars.compile(
    document.querySelector('#template-author-cloud-link').innerHTML
  ),
};*/

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
  };
    
  const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;

    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      if (clickedElement !== activeLink) activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.toggle('active');

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article');

    for (let activeArticle of activeArticles) {
      if (
        articleSelector === '#' + activeArticle.id &&
        clickedElement.classList.contains('active')
      )
        activeArticle.classList.add('active');
      else activeArticle.classList.remove('active');
    }
  };

  function generateTitleLinks(customSelector = '') {
      const articles = document.querySelectorAll(optArticleSelector + customSelector);
      opt.articleSelector + customSelector
  };
    let html = '';

    /*[DONE] Remove contents of titleList */

    const titleList = document.querySelector(opt.titleListSelector);

    titleList.innerHTML = '';

    /*[DONE] for each article */

    for (let article of articles) {
      /*[DONE] get the article id */
      const articleId = article.getAttribute('id');

      /*[DONE] find the title element */
      const articleTitle = article.querySelector(opt.titleSelector).innerHTML;

      /*[DONE] create HTML of the link */
      // const linkHTML = `<li><a href='#${articleId}'><span>${articleTitle}</span></a></li>`;
      const linkHTMLData = { id: articleId, title: articleTitle };
      const linkHTML = templates.articleLink(linkHTMLData);

      /*[DONE] insert link into titleList  */
      html = html + linkHTML;
    }
    //  titleList.innerHTML = titleList.insertAdjacentHTML('beforebegin', linkHTML) + linkHTML
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  
  function generateTags() {      
  /* find all articles */
    const articles = document.querySelectorAll(opt.articleSelector);

  /* START LOOP: for every article: */
    for (let article of articles) {

    /* find tags wrapper */
    const tagsWrapper = article.querySelector(opt.articleTagsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
        
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){     
    
    /* generate HTML of the link */
     //nie wiem
        const linkHTMLData = { id: tag, title: tag };
        const linkHTML = templates.tagLink(linkHTMLData); 
    

      /* add generated code to html variable */
        html = html + linkHTML;

    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
        tagsWrapper.innerHTML = html;

  /* END LOOP: for every article: */
  }
}

generateTags();



function tagClickHandler(event){
  /* prevent default action for this event */
    event.preventDefault();
    
  /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    
  /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAtribute('href');
    
  /* make a new constant "tag" and extract tag from the "href" constant */
    const tag =  href.replace('#tag-', '');

  /* find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active');//?

  /* START LOOP: for each active tag link */
    for(let activeTagLink of activeTagLinks){

    /* remove class active */
    activeTagLink.classlist.remove('active');
        
  /* END LOOP: for each active tag link */
    }

  /* find all tag links with "href" attribute equal to the "href" constant */
    const equalTags = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */
    for(equalTag of equalTags){

    /* add class active */
        equalTag.classlist.add('active');

  /* END LOOP: for each found tag link */
    }
  /* execute function "generateTitleLinks" with article selector as argument */
     generateTitleLinks('[data-tags~="' + tag + '"]');
}


function addClickListenersToTags(){
  /* find all links to tags */
    const equalTags = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */
    for(equalTag of equalTags){

    /* add tagClickHandler as event listener for that link */
        equalTag.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors() {
      const allAuthors = {};
    /* Find all articles */
    const articles = document.querySelectorAll(opt.articleSelector);

     for (let article of articles) {
      const authorWrapper = article.querySelector(opt.articleAuthorSelector);
      let html = '';

      const articleAuthor = article.getAttribute('data-author');

      // const linkHTML = `<a href='#author-${articleAuthor}'>${articleAuthor}</a>`;
      const linkHTMLData = { id: articleAuthor, title: articleAuthor };
      const linkHTML = templates.authorLink(linkHTMLData);

      html = html + linkHTML;

      if (!allAuthors[articleAuthor]) {
        allAuthors[articleAuthor] = 1;
      } else {
        allAuthors[articleAuthor]++;
      }

      authorWrapper.innerHTML = html;
    }
}