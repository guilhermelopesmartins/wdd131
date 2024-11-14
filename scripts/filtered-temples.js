const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
  ];

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const dateElement = document.getElementById("last-modification");
const templeSection = document.getElementById("temple-section");
const home = document.getElementById("home");
const news = document.getElementById("new");
const old = document.getElementById("old");
const large = document.getElementById("large");
const small = document.getElementById("small");


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

generateCards('h')

home.addEventListener('click', () => {
    generateCards('h')
});
news.addEventListener('click', () => {
    generateCards('n')
});
old.addEventListener('click', () => {
    generateCards('o')
});
large.addEventListener('click', () => {
    generateCards('l')
});
small.addEventListener('click', () => {
    generateCards('s')
});


function generateCards (filter) {
    templeSection.innerHTML = '';
    temples.forEach(t => {
        if (filter == 'n' && parseInt(t.dedicated.split(',')[0]) <= 2000)
            return;
        if (filter == 'o' && parseInt(t.dedicated.split(',')[0]) >= 1900)
            return;
        if (filter == 'l' && t.area < 90000)
            return; 
        if (filter == 's' && t.area > 10000)
            return;
        createCard(t);
    });
}

function createCard(t) {
    let figure = document.createElement("figure");
    let title = document.createElement("h1");
    title.textContent = t.templeName;
    let img = document.createElement("img");
    img.src = t.imageUrl;
    img.width = 300;
    img.height = 200;
    img.alt= t.templeName;
    let ul = document.createElement("ul");
    let liLocation = document.createElement("li");
    let liDedicated = document.createElement("li");
    let liSize = document.createElement("li");
    liLocation.textContent = "Location: " + t.location;
    liDedicated.textContent = "Dedicated: " + t.dedicated;
    liSize.textContent = "Size: " + t.area + " sq ft";
    ul.appendChild(liLocation);
    ul.appendChild(liDedicated);
    ul.appendChild(liSize);
    figure.appendChild(title);
    figure.appendChild(ul);
    figure.appendChild(img);
    templeSection.appendChild(figure);
}

dateElement.innerHTML = document.lastModified


