const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = '#4a4e4d';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr");
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");


var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


  menuLinks.forEach(function(menuLink){
      const aEl = document.createElement('a');
      aEl.setAttribute('href', 'menuLink.href');
      aEl.textContent = menuLink.text;
      topMenuEl.appendChild(aEl);
  });

  
  
