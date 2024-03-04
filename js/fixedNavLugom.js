window.onload = () => {
    const navHTML = '<style>@keyframes animationFixedNav{from{opacity:0}to{opacity:1}}#fixedNavLugom{position:fixed;bottom:1rem;right:1rem;z-index:999}' +
        '#fixedNavLugom label{display:flex;justify-content:right;align-items:center;gap:12px;width:290px;height:4rem;border:2px solid #ffd400;' +
        'border-radius:1rem;cursor:pointer;transition:all .4s;background-color:#000}#fixedNavLugom label:hover{border-color:#fff}' +
        '#fixedNavLugom label>img{height:100%;width:auto;border-radius:1rem}#fixedNavLugom label nav img{width:24px;height:auto;margin-bottom:-3px}' +
        '#fixedNavLugom label nav ul{list-style:none;display:flex;flex-direction:row;gap:.8rem;align-items:center}' +
        '#fixedNavLugom label nav ul li a{display:block;opacity:0;padding:8px;border-radius:8px;text-decoration:none;transition:background-color .3s}' +
        '#fixedNavLugom label nav ul li a:hover{background-color:#332a00}#fixedNavLugom label nav ul li:nth-child(1) a{animation:animationFixedNav .4s ease .4s forwards}' +
        '#fixedNavLugom label nav ul li:nth-child(2) a{animation:animationFixedNav .4s ease .3s forwards}#fixedNavLugom label nav ul li:nth-child(3) a{animation:animationFixedNav .4s ease .2s forwards}' +
        '#fixedNavLugom label nav ul li:nth-child(4) a{animation:animationFixedNav .4s ease .1s forwards}#fixedNavLugom #fixedNavLugomCheckbox:checked+label{width:4rem}' +
        '#fixedNavLugom #fixedNavLugomCheckbox,#fixedNavLugom #fixedNavLugomCheckbox:checked+label nav{display:none}</style>' +
        '<div id=fixedNavLugom><input checked id=fixedNavLugomCheckbox type=checkbox> <label for=fixedNavLugomCheckbox><nav><ul><li>' +
        '<a href=/ title=Home><img alt="Icone de casa amarela"src=https://lugom.io/assets/images/home-icon.png></a><li><a href=/blog title=Blog>' +
        '<img alt="Icone de folha amarela representando um blog"src=https://lugom.io/assets/images/blog-icon.png></a><li><a href=/projects title=Projetos><img alt="Icone de engrenagem amarela"src=https://lugom.io/assets/images/projects-icon.png></a>' +
        '<li><a href=/contact title=Contato><img alt="Icone de caderno de contato amarelo"src=https://lugom.io/assets/images/contact-icon.png></a></ul></nav>' +
        '<img alt="icone lugomio"src=https://lugom.io/assets/images/favicon.png></label></div>';

    const navPosition = document.getElementById("fixedNavLugomJs");
    navPosition.insertAdjacentHTML('afterend', navHTML);
}