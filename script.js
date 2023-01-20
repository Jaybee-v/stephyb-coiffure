const hamburger = document.getElementById('hamburger');
const facebook = document.getElementById('facebook');
const insta = document.getElementById('instagram');

hamburger.addEventListener('click', () => {
  console.log('ok');
});

insta.addEventListener('click', () => {
  window.open('https://www.instagram.com/stephy.bcoiffure/');
});

facebook.addEventListener('click', () => {
  window.open('https://www.facebook.com/profile.php?id=100063607032505');
});
