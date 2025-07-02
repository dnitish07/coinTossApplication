function onClickLikeButton() {
  const image = document.getElementById("image");
  const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

  image.style.transition = 'transform 0.6s ease';
  image.style.transform = 'rotateY(180deg)';

  setTimeout(function() {
    if (result === "Heads") {
      image.src = "https://media.geeksforgeeks.org/wp-content/uploads/20240108115006/heads.png";
      image.alt = "Heads";
    } else {
      image.src = "https://media.geeksforgeeks.org/wp-content/uploads/20240108115006/tails.png";
      image.alt = "Tails";
    }

    image.style.transform = 'rotateY(0deg)';
  }, 300); 
  setTimeout(function() {
  document.getElementById('result').innerText = `Result: ${result}`;
  },600);
}