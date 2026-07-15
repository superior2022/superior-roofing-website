// Superior Roofing & Waterproofing — shared JS
(function(){
  // Mobile nav toggle
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', function(){ links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ links.classList.remove('open'); });
    });
  }

  // Scroll reveal
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // Contact form (front-end demo — no backend)
  var form = document.getElementById('quoteForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var ok = document.getElementById('formSuccess');
      if(ok){ ok.style.display='block'; }
      form.reset();
      if(ok){ ok.scrollIntoView({behavior:'smooth',block:'center'}); }
    });
  }

  // Footer year
  var y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();
