const travellingSnails = (n, heights, daySpeed, nightSpeed) => {
  const characterSheets = Array(n)
    .fill()
    .map((el, i) => (el = i + 1))
    .reduce((acc, cur, i) => {
      if (!acc[i]) {
        acc[i] = {
          name: cur,
          heights: heights[i],
          daySpeed: daySpeed[i],
          nightSpeed: nightSpeed[i],
          durationRace: 0,
          partCompleted: 0,
        };
      }
      return acc;
    }, []);

  characterSheets.forEach((character, i) => {
    while (character.partCompleted < character.heights) {
      character.durationRace++;
      character.partCompleted += character.daySpeed;
      if (character.partCompleted >= character.heights) break;
      character.partCompleted -= character.nightSpeed;
    }
  });

  return characterSheets.sort((a, b) => a.durationRace - b.durationRace).map((el) => el.name);
};
console.log(
  travellingSnails(7, [10, 5, 8, 3, 25, 7, 9], [2, 3, 2, 4, 5, 3, 2], [1, 2, 1, 3, 1, 2, 0]),
);
