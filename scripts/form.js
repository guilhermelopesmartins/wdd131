const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productSelect = document.getElementById('product_select');
products.forEach(p => {
    const option = document.createElement('option');
    option.id = p.id;
    option.textContent = p.name
    productSelect.appendChild(option);
});

const postReview = () => {
    debugger
    const radios = document.getElementsByName('rating');
    const stars = [...radios].find(r => r.checked === true).value;
    const installationDate = document.getElementById('installation_date').value;
    const checkboxes = document.getElementsByName('checkbox');
    const features = [...checkboxes].filter(c => c.checked === true).map(c => c.value);
    const reviewText = document.getElementById('review_text').value;
    const name = document.getElementById('name').value;

    const review = {
        stars: stars,
        installationDate: installationDate,
        features: features,
        reviewText: reviewText,
        name: name
    };
    
    let currentReviews = JSON.parse(window.localStorage.getItem('review')) ?? [];
    currentReviews.push(review);
    window.localStorage.setItem('review', JSON.stringify(currentReviews));
};

const form = document.getElementById("form");
form.addEventListener('submit', postReview);
const dateElement = document.getElementById("last-modification");
dateElement.innerHTML = document.lastModified;

