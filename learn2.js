// JavaScipt Operator
var a = 10;
var b = 2;
var c = 0;

// operator aritmatika
document.write("Operator Aritmatika");
c = a + b;
document.write(`${a} + ${b} = ${c}<br\>`);
c = a - b;
document.write(`${a} - ${b} = ${c}<br\>`);
c = a * b;
document.write(`${a} * ${b} = ${c}<br\>`);
c = a ** b;
document.write(`${a} ** ${b} = ${c}<br\>`);
c = a / b;
document.write(`${a} / ${b} = ${c}<br\>`);
c = a % b;
document.write(`${a} % ${b} = ${c}<br\>`);

// operator penugasan
var score = 20;
document.write("Operator penugasan" + "<br>");
document.write("Nilai awal score : " + score + "<br>");
score += 5;
document.write("score += 5 = " + score + "<br>");
score -= 3;
document.write("score -= 3 = " + score + "<br>");
score *= 2;
document.write("score *= 2 = " + score + "<br>");
score /= 2;
document.write("score /= 2 = " + score + "<br>");
score **= 3;
document.write("score **= 3 = " + score + "<br>");
score %= 3;
document.write("score %= 3 = " + score + "<br>");

// operator perbandingan
var a = 2;
var b = 5;
var typeDataString = "2";
document.write("Operator perbandingan")
var c = a == b;
document.write(`${a} == ${b} = ${c}<br\>`);
var c = a > b;
document.write(`${a} > ${b} = ${c}<br\>`);
var c = a >= b;
document.write(`${a} >= ${b} = ${c}<br\>`);
var c = a < b;
document.write(`${a} < ${b} = ${c}<br\>`);
var c = a <= b;
document.write(`${a} <= ${b} = ${c}<br\>`);
var c = a != b;
document.write(`${a} != ${b} = ${c}<br\>`);
var c = a === typeDataString;
document.write(`${a} === ${typeDataString} = ${c}<br\>`);

// operator logika
var me = 20;
var you = 19;
var itsTrue = me > you;
var itsFalse = me < you;

document.write("Operator logika");
var resutl = itsTrue && itsFalse;
document.write(`${itsTrue} && ${itsFalse} = ${resutl}<br\>`);
var resutl = itsTrue || itsFalse;
document.write(`${itsTrue} || ${itsFalse} = ${resutl}<br\>`);
var resutl = !itsTrue;
document.write(`!${itsTrue} = ${resutl}<br\>`);

// operator bitwise
var x = 4;
var y = 3;
document.write("Operator bitwise")
// bitwaise and
var resutl = x & y;
document.write(`${x} & ${y} = ${resutl}<br\>`);
// bitwise or
var resutl = x | y;
document.write(`${x} | ${y} = ${resutl}<br\>`);
// operator xor
var resutl = x ^ y;
document.write(`${x} ^ ${y} = ${resutl}<br\>`);
// operator negasi
var resutl = ~x;
document.write(`~${x} = ${resutl}<br\>`);
// right shift
var resutl = x >> y;
document.write(`${x} >> ${y} = ${resutl}<br\>`);
// left shift
var resutl = x << y;
document.write(`${x} << ${y} = ${resutl}<br\>`);
// right shift unsigned
var resutl = x >>> y;
document.write(`${x} >>> ${y} = ${resutl}<br\>`);

// operator ternary
var ask = confirm("Apakah anda 18 tahun ?");
var resutl = ask ? "Selamat datang" : "kamu tidak boleh disini";
document.write("Operator ternary<br>");
document.write(resutl);