const button = document.getElementById("scrollToBottom"); 
button.addEventListener("click", function() { 
  window.scrollTo(0, document.body.scrollHeight); 
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#ffac09';
    btn.style.boxShadow = '0 0 40px #ffac09';
    btn.style.transition = '.5s ease';
    const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#ffac09';
    btn.style.boxShadow = '0 0 40px #ffac09';
    btn.style.transition = '.5s ease';
});
});
}); 