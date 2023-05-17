function createStarRating(rating) {
  const fullStar = '<span class="star on"></span>';
  const halfStar ='<span class="star half"></span>';
  const emptyStar ='<span class="star"></span>';

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 === 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starHTML = fullStar.repeat(fullStars) +
    (hasHalfStar ? halfStar : '') +
    emptyStar.repeat(emptyStars);

  return starHTML;
}