//  Banner Auto Change
var i = 1;
var bannerelm = document.querySelector('.banner-wrapper');
var Banner = [
    {
        url: 'assets/images/la.jpg',
        text_heading: 'Los Angeles',
        text_desc: 'We had the best time playing at Venice Beach!',
    },

    {
        url: 'assets/images/ny.jpg',
        text_heading: 'New York',
        text_desc: 'The atmosphere in New York is lorem ipsum.'
    },

    {
        url: 'assets/images/chicago.jpg',
        text_heading: 'Chicago',
        text_desc: 'Thank you, Chicago - A night we won\'t forget.',
    },

];
function changeBanner() {
    urlCurrent = Banner[i];
    console.log(i);
    bannerelm.innerHTML = `
            <div class="banner" style="background-image: url('${urlCurrent.url}')">
            <div class="text-content">
                <h1 class="text-heading">${urlCurrent.text_heading}</h1>
                <p class="text-description">${urlCurrent.text_desc}</p>
            </div>
            `;
    if (i == 2) {
        i = -1;
    }
    i++;
}
setInterval(changeBanner, 3000);