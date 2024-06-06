const blogItemsData = [
    {
        id: '1',
        title: 'How to create the right brief?',
        description: '',
        hashtag: '#TIPS',
    },
    {
        id: '2',
        title: 'New custom model: Grace',
        description: 'If you feel like you need something special, we might have the right option for you. Our new custom model called Grace will suit...',
        hashtag: '#NEWS',
        image: 'img/blog/blog-item-2.png'
    },
    {
        id: '3',
        title: 'Top 5 cottage decor ideas',
        description: 'What makes a home feel like home? Most often it\'s home decor. If you have no idea how to design your existing or future...',
        hashtag: '#IDEAS',
        image: 'img/blog/blog-item-3.png'
    },
];

function renderBlogItems(blogItems) {
    let blogItemHtml = '';
    for (const blogItem of blogItems) {
        blogItemHtml += `<div class="blog__item">
            <img class="blog__item-img" src="${blogItem.image}" alt="${blogItem.title}">
            <div class="blog__item-hashtag">${blogItem.hashtag}</div>
            <h3 class="blog__item-title">${blogItem.title}</h3>
            <p class="blog__item-text">${blogItem.description}</p>
            <p class="blog__item-time"><time datetime="2022-06-02">June 02, 2022</time> | Sam Smith</p>
            <a class="blog__item-button"  href="#blog">Read more <img class="blog__item-button-arrow" src="img/blog/blog-arrow.svg" alt="Arrow"></a>
        </div>`;
    }
    const blogItemsContainer = document.querySelector('.blog__items');
    blogItemsContainer.innerHTML = blogItemHtml;
}

function removeImgFromFirst() {
    var firstImage = document.querySelector('.blog__item-img');
    if (firstImage) {
        firstImage.remove("img");
    }
}

renderBlogItems(blogItemsData);
removeImgFromFirst();