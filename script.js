const cuteFortunes = [
    "You will have a purrfect day!",
    "Something pawsome is coming your way!",
    "You will meet a new cute friend soon!",
    "A little bit of magic will brighten your day!",
    "Expect lots of cuddles and joy today!",
    "A surprise gift is waiting for you!"
  ];

  function generateCuteFortune() {
    const randomIndex = Math.floor(Math.random() * cuteFortunes.length);
    document.getElementById('cuteFortune').innerText = cuteFortunes[randomIndex];
    triggerConfetti();
  }

  function triggerConfetti() {
    const confettiCount = 100;
    const confettiContainer = document.createDocumentFragment();

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDelay = Math.random() * 2 + 's';
      confettiContainer.appendChild(confetti);
    }

    document.body.appendChild(confettiContainer);

    setTimeout(() => {
      document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
    }, 3000);
  }