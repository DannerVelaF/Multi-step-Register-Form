function showNextCard(step) {
  const cards = document.querySelectorAll(".card_container");
  cards.forEach((card) => {
    card.classList.remove("visible");
  });

  const nextSection = document.getElementById(`card${step}`);
  nextSection.classList.add("visible");
}
