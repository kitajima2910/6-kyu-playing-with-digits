/*

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

*/

function digPow(n, p) {
  // Tách các chữ số đưa vào mảng
  let nums = (n + '').split('').map((e) => +e);

  // Sử dụng loop tăng dần p -> length
  let sum = 0;
  let start = p;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] ** start;
    start++;
  }

  if (sum % n == 0) {
    return sum / n;
  }

  return -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));
