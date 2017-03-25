function getTriangleArea(a, h) {
  var a,
    h,
    triangleArea;

    if (a > 0 && h > 0) {
      triangleArea = a*h/2;
      console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea),
      alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
    } else if (a <= 0 || h <= 0) {
      console.log('Nieprawidłowe dane'),
      alert('Nieprawidłowe dane');
    }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(8, 15);
var triangle2Area = getTriangleArea(4, 9);
var triangle3Area = getTriangleArea(12, 4);
