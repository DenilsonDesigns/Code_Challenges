var findComplement = function (num) {
  const dec2bin = (dec) => {
    return (dec >>> 0).toString(2);
  };

  const reverseBits = (bitString) => {
    return bitString
      .split("")
      .map((x) => (x === "0" ? "1" : "0"))
      .join("");
  };

  const originalNumToBits = dec2bin(num);
  const complementString = reverseBits(originalNumToBits);

  return parseInt(complementString, 2);
};

// 191. Number of 1 Bits
var hammingWeight = function (n) {
  const dec2bin = (dec) => {
    return (dec >>> 0).toString(2);
  };

  return dec2bin(n)
    .split("")
    .filter((x) => x === "1").length;
};

// 190. Reverse Bits
var reverseBits = function (n) {
  let binaryString = n.toString(2).padStart(32, "0");

  let reversedString = binaryString.split("").reverse().join("");

  return parseInt(reversedString, 2);
};

// 461. Hamming Distance
var hammingDistance = function (x, y) {
  let xor = x ^ y;
  let count = 0;

  while (xor > 0) {
    count += xor & 1;
    xor >>= 1;
  }

  return count;
};

console.log(
  // ***********************
  hammingDistance(1, 4)
  // ***********************
);
