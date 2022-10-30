//bài 1:
// Sơ đồ 3 khối

/**
 * INPUT: Nhập 3 số nguyên
 *
 * PROCESS:
 *      1. So sánh các số với nhau.
 *      2. In kết quả
 * OUTPUT: sắp xếp theo thứ tự tăng dần
 */
var a = 20;
var b = 17;
var c = 15;

if (a < b && b < c) {
  console.log("" + a, "" + b, "" + c);
} else if (a < c && c < b) {
  console.log("" + a, "" + c, "" + b);
} else if (b < a && a < c) {
  console.log("" + b, "" + a, "" + c);
} else if (b < c && c < a) {
  console.log("" + b, "" + c, "" + a);
} else if (c < a && a < b) {
  console.log("" + c, "" + a, "" + b);
} else if (c < b && b < a) {
  console.log("" + c, "" + b, "" + a);
}

//bài 2:
// Sơ đồ 3 khối

/**
 * INPUT: tên Bố (B), Mẹ (M), Anh trai (A), Em gái (E)
 *
 * PROCESS:
 *      1. Nhập vào tên người dùng
 *      2. So sánh nếu tên trùng với thành viên trong gia đình
 *      3. In kết quả "Chào"
 *
 * OUTPUT: Chào "tên người trong gia đình"
 */

var Dad = "B";
var Mom = "M";
var Brother = "A";
var Sister = "E";
var x = "E";

if (x == "B") {
  console.log("chào Bố!");
} else if (x == "M") {
  console.log("chào Mẹ!");
} else if (x == "A") {
  console.log("chào Anh trai!");
} else {
  console.log("chào Em gái!");
}

//bài 3:
// Sơ đồ 3 khối

/**
 * INPUT: 3 số nguyên
 *
 * PROCESS:
 *      1. Nhập vào 3 số nguyên
 *      2. So sánh từng số theo các trường hợp:
 *          2.1. Cả 3 là số chẵn
 *          2.2. Cả 3 là số lẻ
 *          2.3. Có 2 số chẵn, 1 số lẻ
 *          2.4. Có 2 số lẻ, 1 số chẵn
 *      Nếu chia hết cho 2 là số chẵn, không chia hết cho 2 là số lẻ
 *      3. In kết quả
 * OUTPUT: Có bao nhiêu số chẵn, bao nhiêu số lẻ
 */
var a = 2;
var b = 3;
var c = 7;

if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
  console.log("có 3 số chẵn");
} else if (a % 2 != 0 && b % 2 != 0 && c % 2 != 0) {
  console.log("có 3 số lẻ");
} else if (
  (a % 2 == 0 && b % 2 == 0 && c % 2 != 0) ||
  (a % 2 == 0 && b % 2 != 0 && c % 2 == 0) ||
  (a % 2 != 0 && b % 2 == 0 && c % 2 == 0)
) {
  console.log("có 2 số chẵn và 1 số lẻ");
} else if (
  (a % 2 == 0 && b % 2 == 0 && c % 2 != 0) ||
  (a % 2 == 0 && b % 2 != 0 && c % 2 == 0) ||
  (a % 2 != 0 && b % 2 == 0 && c % 2 == 0)
) {
  console.log("có 2 số chẵn và 1 số lẻ");
} else {
  console.log("có 1 số chẵn và 2 số lẻ");
}

//bài 4:
// Sơ đồ 3 khối

/**
 * INPUT: 3 cạnh tam giác
 *
 * PROCESS:
 *      1. Nhập 3 cạnh tam giác
 *      2. Nếu 3 cạnh bằng nhau là tam giác đều
 *      3. Nếu có 2 cạnh bằng nhau là tam giác cân
 *      4. Nếu bình phương 1 cạnh bằng tổng của bình phương 2 cạnh còn lại là tam giác vuông
 *      5. Nếu ko thuộc 3 trường hợp trên là tam giác thường.
 *      6. In kết quả
 * OUTPUT: Xuất ra kiểu tam giác.
 */

var a = 3;
var b = 4;
var c = 5;

if ((a == b) == c) {
  console.log("Tam giác đều");
} else if (a == b || a == c || b == c) {
  console.log("Tam giác cân");
} else if (
  a * a + b * b == c * c ||
  a * a + c * c == b * b ||
  b * b + c * c == a * a
) {
  console.log("Tam giác vuông");
} else {
  console.log("Tam giác thường");
}

//bài 5: Nhập vào ngày tháng năm, tính ngày tháng năm tiếp theo và trước đó
// Sơ đồ 3 khối

/**
 * INPUT: Ngày tháng năm
 *
 * PROCESS:
 *      1. Nhập vào ngày tháng năm
 *      2. Kiểm tra năm có phải là năm nhuận hay ko.
 *      3. Nếu là năm nhuận, tháng 2 có 29 ngày. Ko phải năm nhuận tháng 2 có 28 ngày
 *      4. Các tháng 1,3,5,7,8,10,12 có 31 ngày. Các tháng còn lại 30 ngày.
 *      5. Tính ngày tiếp theo: Tạo các biến cho ngày tháng năm tiếp theo
 *      6. Nếu tháng nhập vào không phải tháng 12 và số ngày bằng số ngày tối đa của tháng thì ta tăng tháng lên 1 và ngày = 1
 *         Nếu ngày nhỏ hơn số ngày tối đa của tháng thì ta tăng ngày thêm 1
 *         Nếu tháng nhập vào là tháng 12 và số ngày bằng số ngày tối đa của tháng thì ngày tiếp theo là 1, tháng tiếp theo là 1 và năm tăng thêm 1.
 *      7. Nếu tháng nhập vào là tháng 2 và năm nhuận thì ngày tối đa sẽ là 29.
           Nếu nhập vào ngày 29 thì ta tăng tháng lên 1 và ngày bằng 1
           Ngược lại nếu tháng 2 và không phải năm nhuận thì tháng 2 có 28 ngày. Nếu người dùng nhập vào ngày 28 thì tăng tháng lên 1 và ngày bằng 1    
        8. Tính ngày trước đó: Tạo các biến cho ngày tháng năm trước đó
 *      9. Nếu tháng nhập vào thỏa (0<D<13)và số ngày khác 1 thì ta giảm ngày đi 1
 *         Nếu ngày=1 và thuộc các tháng 5,7,8,10,12 thì ngày trước đó bằng 30 và tháng trừ đi 1
 *         Nếu ngày=1 và thuộc tháng 3 thì:
 *                  + nếu là năm nhuận thì ngày trước đó bằng 29, tháng giảm đi 1.
 *                  + nếu ko là năm nhuận thì ngày trước đó bằng 28, tháng giảm đi 1.
 *         Nếu ngày=1 và thuộc các tháng 2,6,9,11 thì ngày trước đó bằng 31 và tháng giảm đi 1
 *         Nếu là ngày=1 tháng1 thì ngày trước đó là 31 tháng 12 và năm giảm đi 1.
 *      6. In kết quả
 * OUTPUT: Xuất ra ngày tháng năm trước đó và ngày tháng năm tiếp theo.
 */

var D = 1;
var M = 5;
var Y = 2000;
console.log("" + D, "/" + M, "/" + Y);

var dayInMonth;

if ((Y % 4 == 0 && Y % 100 != 0) || Y % 400 == 0) {
  var leapYear = Y;
  //   console.log("là năm nhuận");
  // } else {
  //   console.log("ko là năm nhuận");
}

switch (M) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12: {
    dayInMonth = 31;
    break;
  }
  case 2: {
    if (leapYear) {
      dayInMonth = 29;
      break;
    } else {
      dayInMonth = 28;
      break;
    }
  }
  case 4:
  case 6:
  case 9:
  case 11: {
    dayInMonth = 30;
    break;
  }
}

// biến nY, nM, nD là ngày tháng năm tiếp theo
var nextY;
var nextM;
var nextD;
// biến pY, pM, pD là ngày tháng năm trước đó
var preY;
var preM;
var preD;
//nếu ngày tháng năm thỏa mãn điều kiện
if (Y > 0 && M > 0 && M < 13 && D > 0 && D <= dayInMonth) {
  nextD = D + 1;
  nextM = M;
  nextY = Y;

  //nếu tháng nhập vào không phải tháng 12 và số ngày bằng số ngày tối đa của tháng thì ta tăng tháng lên 1 và ngày = 1
  if (M != 12 && D == dayInMonth) {
    nextD = 1;
    nextM = M + 1;
    nextY = Y;
  }

  //nếu tháng nhập vào là tháng 12 và số ngày bằng số ngày bằng 31 thì ta tăng tháng, năm lên 1 và ngày sẽ bằng 1
  else if (M == 12 && D == dayInMonth) {
    nextD = 1;
    nextY = Y + 1;
    nextM = 1;
  } else if (M == 2) {
    //nếu tháng nhập vào là tháng 2 và năm nhuận thì ngày tối đa sẽ là 29
    if (leapYear) {
      //nếu người dùng nhập vào ngày 29 thì ta tăng tháng lên 1 và ngày bằng 1
      if (D == 29) {
        nextD = 1;
        nextM = M + 1;
        nextY = Y;
      }
    }
  }
  //ngược lại nếu tháng 2 và không phải năm nhuận thì tháng 2 có 28 ngày
  else {
    //nếu người dùng nhập vào ngày 28 thì tăng tháng lên 1 và ngày bằng 1
    if (D == 28) {
      nextD = 1;
      nextM = M + 1;
      nextY = Y;
    }
  }
}
if (Y > 0 && M >= 1 && M < 13 && D > 1 && D <= dayInMonth) {
  preD = D - 1;
  preM = M;
  preY = Y;
} else if (D == 1) {
  if (M == 1) {
    preD = 31;
    preM = 12;
    preY = Y - 1;
  } else if (M == 5 || M == 7 || M == 8 || M == 10 || M == 12) {
    preD = 30;
    preM = M - 1;
    preY = Y;
  } else if (M == 3) {
    if (leapYear) {
      preD = 29;
      preM = M - 1;
      preY = Y;
    } else {
      preD = 28;
      preM = M - 1;
      preY = Y;
    }
  } else {
    preD = 31;
    preM = M - 1;
    preY = Y;
  }
}

console.log("" + nextD, "/" + nextM, "/" + nextY);
console.log("" + preD, "/" + preM, "/" + preY);

//bài 6:
// Sơ đồ 3 khối

/**
 * INPUT: tháng, năm
 *
 * PROCESS:
 *      1. Nhập tháng và năm
 *      2. Nếu là tháng 1,3,5,7,8,10,12 thì có 31 ngày
 *      3. Nếu là tháng 4,6,9,11 có 30 ngày
 *      4. Năm nhuận là năm chia hết cho 4 nhưng ko chia hết cho 100 hoặc chia hết cho 400
 *      5. Năm nhuận tháng 2 có 29 ngày, ko phải năm nhuận tháng 2 có 28 ngày.
 *      6. In kết quả
 * OUTPUT: Xuất ra số ngày trong tháng của năm bất kì.
 */

var month = 2;
var year = 2021;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Có 31 ngày");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Có 30 ngày");
    break;
  case 2:
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log("Có 29 ngày");
    } else {
      console.log("Có 28 ngày");
    }
    break;
}

//bài 7:
// Sơ đồ 3 khối

/**
 * INPUT: Số có 3 chữ số
 *
 * PROCESS:
 *      1. Nhập số có 3 chữ số : n
 *      2. Đặt biến cho hàng trăm, hàng chục, hàng đơn vị.
 *      3. Hàng trăm bằng n chia lấy nguyên cho 100
 *      4. Hàng chục bằng n chia lấy nguyên cho 10, sau đó chia lấy dư cho 10
 *      5. Hàng đơn vị bằng n chia lấy dư cho 10.
 *      6. Dùng switch-case để đọc theo hàng trăm, chục và đơn vị.
 *      7. Nếu hàng chục bằng 0 thì đọc là lẻ.
 *      8. In ra kết quả
 * OUTPUT: Xuất ra cách đọc số có 3 chữ số
 */

var n = 563;
var a = n % 10;
var b = Math.floor((n / 10) % 10);
var c = Math.floor(n / 100);

switch (c) {
  case 1:
    c = "một trăm";
    break;
  case 2:
    c = "hai trăm";
    break;
  case 3:
    c = "ba trăm";
    break;
  case 4:
    c = "bốn trăm";
    break;
  case 5:
    c = "năm trăm";
    break;
  case 6:
    c = "sáu trăm";
    break;
  case 7:
    c = "bảy trăm";
    break;
  case 8:
    c = "tám trăm";
    break;
  case 9:
    c = "chín trăm";
    break;
}

if (b == 0 && a != 0) {
  b = "lẻ";
} else
  switch (b) {
    case 1:
      b = "mười";
      break;
    case 2:
      b = "hai mươi";
      break;
    case 3:
      b = "ba mươi";
      break;
    case 4:
      b = "bốn mươi";
      break;
    case 5:
      b = "năm mươi";
      break;
    case 6:
      b = "sáu mươi";
      break;
    case 7:
      b = "bảy mươi";
      break;
    case 8:
      b = "tám mươi";
      break;
    case 9:
      b = "chín mươi";
      break;
  }
switch (a) {
  case 1:
    a = "một";
    break;
  case 2:
    a = "hai";
    break;
  case 3:
    a = "ba";
    break;
  case 4:
    a = "bốn";
    break;
  case 5:
    a = "năm";
    break;
  case 6:
    a = "sáu";
    break;
  case 7:
    a = "bảy";
    break;
  case 8:
    a = "tám";
    break;
  case 9:
    a = "chín";
    break;
}
if (b == 0 && a == 0) {
  console.log("" + c);
} else {
  console.log("" + c, "" + b, "" + a);
}

//bài 8:
// Sơ đồ 3 khối

/**
 * INPUT: Tên và tọa độ nhà của 3 học sinh + tọa độ trường học
 *
 * PROCESS:
 *      1. Nhập Tên và tọa độ nhà của 3 học sinh và tọa độ trường học
 *      2. Công thức tính khoảng cách từ nhà tới trường
 *      3. So sánh khoảng cách nhà của từng học sinh bằng lệnh if-else
 *      4. In ra kết quả
 * OUTPUT: Xuất ra tên của học sinh xa trường nhất
 */

var student01 = "A";
var x1 = 20;
var y1 = 50;

var student02 = "B";
var x2 = 10;
var y2 = 75;

var student03 = "C";
var x3 = 30;
var y3 = 85;

var School = "CyberSoft";
var x = 0;
var y = 0;

var distance1 = Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - x));
// console.log("khoảng cách từ nhà học sinh A tới trường: " +distance1);

var distance2 = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - x));
// console.log("khoảng cách từ nhà học sinh A tới trường: " +distance2);

var distance3 = Math.sqrt((x3 - x) * (x3 - x) + (y3 - y) * (y3 - x));
// console.log("khoảng cách từ nhà học sinh A tới trường: " +distance3);

if (distance1 > distance2 && distance1 > distance3) {
  console.log("Nhà học sinh A xa nhất");
} else if (distance2 > distance1 && distance2 > distance3) {
  console.log("Nhà học sinh B xa nhất");
} else if (distance3 > distance1 && distance3 > distance2) {
  console.log("Nhà học sinh C xa nhất");
} else if ((distance1 = distance2 = distance3)) {
  console.log("Nhà 3 học sinh xa bằng nhau");
} else if ((distance1 = distance2 > distance3)) {
  console.log("Nhà học sinh A và B xa nhất");
} else if ((distance1 = distance3 > distance2)) {
  console.log("Nhà học sinh A và C xa nhất");
} else if ((distance2 = distance3 > distance1)) {
  console.log("Nhà học sinh B và C xa nhất");
}
