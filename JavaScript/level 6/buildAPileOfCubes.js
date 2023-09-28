// Your task is to create a function called findNb (or variations) that calculates the number of cubes, represented by n, needed to construct a building in the form of a pile of cubes with specified volumes. The volumes of the cubes start from 1^3 and go up to n^3.

// The volume of each cube is given by the sum of cubes from 1^3 to n^3, which can be expressed as:

// 1^3 + 2^3 + 3^3 + ... + n^3 = m

// You need to find the value of n that satisfies this equation, or return -1 if there is no such n.

// For example, if given a total volume m, you want to find the number of cubes (n) such that the sum of cubes from 1 to n is equal to m.

function findNb(n) {
  let m = 1;
  let sum = 0;

  while (sum < n) {
    sum += Math.pow(m, 3);
    m++;
  }

  return sum === n ? m - 1 : -1;
}
