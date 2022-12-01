var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->


console.log('hello')



function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;


    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let tmHeader = document.getElementById('tm-header')
    tmHeader.textContent = customerName;
    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->

    let introHeader = document.getElementById('introheader');
    introHeader.textContent = 'Alliance';

};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let tmWhites = document.querySelectorAll('.tm-white-rect')
    tmWhites.forEach((tmWhite) => {
        tmWhite.className = 'tm-blue-rect d-inline-block'
        // tmWhite.remove('.tm-white-rect')
    })

};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    let tmSocial = document.getElementById('social-links')
    tmSocial.remove()


};

function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let introPara1 = document.getElementById('intropara1')
    introPara1.textContent = 'Alliance was founded in 1931 by Albert Daniels.'

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let introPara2 = document.getElementById('intropara2')
    introPara2.textContent =  'The company is a leader in P.C. Manufacturing'
    //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
    let aboutPara1 = document.getElementById('aboutpara1');
    aboutPara1.textContent = 'We deliver the best service this side of creation';
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
        let aboutPara2 = document.getElementById('aboutpara2');
    aboutPara2.textContent = 'Our motto is satisfaction guaranteed';

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
        let addressPara = document.getElementById('addresspara');
        addressPara.textContent = '1-800-565-5656';
};


addCustomerName()
hideElement()
// toggleColors()
addText()
