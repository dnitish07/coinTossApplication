function onClickLikeButton() {
  const image = document.getElementById("image");
  const result = Math.random() < 0.5 ? 'HEADS' : 'TAILS';

  image.style.transition = 'transform 0.6s ease';
  image.style.transform = 'rotateY(180deg)';

  setTimeout(function() {
    if (result === "HEADS") {
      image.src = "https://media.geeksforgeeks.org/wp-content/uploads/20240108115006/heads.png";
      image.alt = "HEADS";
    } else {
      image.src = "https://media.geeksforgeeks.org/wp-content/uploads/20240108115006/tails.png";
      image.alt = "TAILS";
    }

    image.style.transform = 'rotateY(0deg)';
  }, 300); 
  setTimeout(function() {
  document.getElementById('result').innerText = `Result: ${result}`;
  },600);
}