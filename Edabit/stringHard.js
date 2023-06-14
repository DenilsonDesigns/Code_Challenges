function uncensor(str, vowels) {
  let currStarIdx = -1;

  let strArr = str.split("");

  return strArr
    .map((el) => {
      if (el === "*") {
        currStarIdx++;
        return vowels[currStarIdx];
      } else {
        return el;
      }
    })
    .join("");

  // *** Probably objectively better:
  // for (let i=0;i<vowels.length; i++){
  // 	str = str.replace('*', vowels[i])
  // }
  // return str
  // ***
}

console.log(
  // ***
  uncensor("*PP*RC*S*", "UEAE")
  // ***
);
