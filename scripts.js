const links = document.querySelectorAll('a');
const images = document.querySelectorAll('img');
const parragraphs = document.querySelectorAll('p');
const articles = document.querySelectorAll('article')

console.log(images);
//1
for (let i = 0; i < links.length; i++) {
    links[i].href = '#'
};


//2.1
for (let i = 0; i < images.length; i++) {

    images[i].addEventListener('click', () => {
        images[i].src = './assets/magic-1.gif';
    });
};

//2.2

for (let i = 0; i < parragraphs.length; i++) {

    parragraphs[i].addEventListener('click', () => {

        parragraphs[i].classList = 'all-p'
    });
};

//2.3

for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener('click', () => {
        articles[i].classList = 'all-articles'
    })
}

//3.1

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', () => {
        images[i].src = './assets/abracadabra.gif'
    })
}

//3.2

for (let i = 0; i < parragraphs.length; i++) {
    parragraphs[i].addEventListener('mouseover', () => {
        parragraphs[i].classList = 'mouseover-p'
    })
}

//3.3

for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener('mouseover', () => {
        articles[i].classList = 'mouseover-articles'
    })
}



