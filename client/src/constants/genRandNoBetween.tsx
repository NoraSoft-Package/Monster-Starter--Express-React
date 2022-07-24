const genRandNoBetween = (min: number, max: number, exclude: number): any => {
  const rndNo = Math.floor(Math.random() * (max - min) + min);

  if (rndNo === exclude) {
    return genRandNoBetween(min, max, exclude);
  } else {
    return rndNo;
  }
};

export default genRandNoBetween;
