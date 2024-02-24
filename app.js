// Chapter 05

// Q.1
// var num = 3 + 5;
// document.write(num);

// Q.2
// var number = 3 * 5;
// var number = 3 / 5;
// var number = 3 % 5;
// document.write(number);

// Q.3

// var sum;

// sum = 5;

// var cal = ++sum + sum-- - --sum + sum++ - sum +--sum;

// document.write(cal);

// Q.4

// var ticketPrice = 600;

// var totalCost = ticketPrice * 7;

// document.write("The cost of buying 7 movie tickets is: " + totalCost + " PKR");

// Q.5

// var number = +prompt("Enter table number..");

// document.write(
//     number +"x 1 =" +number * 1 +"<br>" +
//     number +"x 2 =" +number * 2 +"<br>" +
//     number +"x 3 =" +number * 3 +"<br>" +
//     number +"x 4 =" +number * 4 +"<br>" +
//     number +"x 5 =" +number * 5 +"<br>" +
//     number +"x 6 =" +number * 6 +"<br>" +
//     number +"x 7 =" +number * 7 +"<br>" +
//     number +"x 8 =" +number * 8 +"<br>" +
//     number +"x 9 =" +number * 9 +"<br>" +
//     number +"x 10 =" +number * 10 +"<br>"
// );

// Q.6

// document.write("25<sup>0</sup> is 77<sup>0</sup>F");

// document.write("70<sup>0</sup>F is 21.11111111111111<sup>0</sup>C");

// Q.7

// var priceItem1 = parseFloat(prompt("Enter the price of item 1:"));
// var quantityItem1 = parseInt(prompt("Enter the quantity of item 1:"));

// var priceItem2 = parseFloat(prompt("Enter the price of item 2:"));
// var quantityItem2 = parseInt(prompt("Enter the quantity of item 2:"));

// var shippingCharges = parseFloat(prompt("Enter the shipping charges:"));

// if (
//   !isNaN(priceItem1) &&
//   !isNaN(quantityItem1) &&
//   !isNaN(priceItem2) &&
//   !isNaN(quantityItem2) &&
//   !isNaN(shippingCharges)
// ) {
//   var totalCost =
//     priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

//   document.write("<h2>Receipt</h2>");
//   document.write("<p>Price of Item 1 is: " + priceItem1 + " PKR</p>");
//   document.write("<p>Quantity of Item 1 is: " + quantityItem1 + "</p>");
//   document.write("<p>Price of Item 2 is: " + priceItem2 + " PKR</p>");
//   document.write("<p>Quantity of Item 2 is: " + quantityItem2 + "</p>");
//   document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
//   document.write("<p>Total Cost of Your Order is: " + totalCost + " PKR</p>");
// } else {
//   alert(
//     "Please enter valid numbers for prices, quantities, and shipping charges."
//   );
// }

// Q.8

// var totalMarks = parseFloat(prompt("Enter the total marks:"));
// var marksObtained = parseFloat(prompt("Enter the marks obtained:"));

// if (!isNaN(totalMarks) && !isNaN(marksObtained)) {
//   var percentage = (marksObtained / totalMarks) * 100;

//   document.write("<h2>Marks sheet</h2>");
//   document.write("<p>Total Marks: " + totalMarks + "</p>");
//   document.write("<p>Marks Obtained: " + marksObtained + "</p>");
//   document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// } else {
//   alert("Please enter valid numbers for total marks and marks obtained.");
// }

// Q.9

// var usDoller = +prompt("Enter Amount");

// var exchangeRateUSD = 279.72;

// var totalAmountPKR = usDoller * exchangeRateUSD;

// document.write("<h2>Currency in PKR</h2>");
// document.write("Total Currency is: " + totalAmountPKR);

// Q.10

// var initialNumber = 5;

// var result = ((initialNumber + 5) * 10) / 2;

// document.write("<h2>Arithmetic Operations</h2>");
// document.write("<p>Initial Number: " + initialNumber + "</p>");
// document.write("<p>Result after operations: " + result + "</p>");

// Q.11

// var currentYear = new Date().getFullYear();

// var birthYear = 1997;

// var age1 = currentYear - birthYear;

// document.write("<h2>Age Calculator</h2>");
// document.write("<p>Current Year: " + currentYear + "</p>");
// document.write("<p>Birth Year: " + birthYear + "</p>");
// document.write("<p>Your age is : " + age1 + "</p>");

// Q.12

// var radius = 5;

// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * Math.pow(radius, 2);

// document.write("<h2>Geometrizer</h2>");
// document.write("<p>Radius of the Circle: " + radius + "</p>");
// document.write("<p>Circumference of the Circle: " + circumference.toFixed(2) + "</p>");
// document.write("<p>Area of the Circle: " + area.toFixed(2) + "</p>");

// Q.13

// var favoriteSnack = "chocolate bars";

// var currentAge = 25;

// var maximumAge = 80;

// var amountPerDay = 2;

// var yearsRemaining = maximumAge - currentAge;
// var totalAmountNeeded = yearsRemaining * 365 * amountPerDay;

// document.write("<h2>Lifetime Supply Calculator</h2>");
// document.write("<p>Your favorite snack: " + favoriteSnack + "</p>");
// document.write("<p>Your current age: " + currentAge + "</p>");
// document.write("<p>Estimated maximum age: " + maximumAge + "</p>");
// document.write("<p>Estimated amount per day: " + amountPerDay + "</p>");
// document.write("<p>You will need " + totalAmountNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".</p>");

// Chapter 06

// Q.1

// var a = 2,
//   b = 1;
// var result = --a - --b + ++b + b--;

// document.write(result);

// Q.2

// var userName = prompt("Enter your name:");

// // Display a personalized greeting
// if (userName !== null && userName !== "") {
//     document.write("<h2>Greeting Program</h2>");
//     document.write("<p>Hello, " + userName + "! Welcome to our website.</p>");
// } else {
//     // Display an error message if the user doesn't enter a name
//     alert("Please enter a valid name.");
// }

// Q.3

// var userInput = prompt("Enter a number for the multiplication table:");

// var number = userInput ? parseInt(userInput) : 5;

// document.write("<h2>Multiplication Table</h2>");
// document.write("<p>Displaying the multiplication table for: " + number + "</p>");

// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// Q.4

// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// var totalMarks = 100;

// var obtainedMarks1 = parseFloat(prompt("Enter the obtained marks for " + subject1 + ":"));

// var obtainedMarks2 = parseFloat(prompt("Enter the obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseFloat(prompt("Enter the obtained marks for " + subject3 + ":"));

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<h2>Subject Results</h2>");
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td colspan='2'>Total Obtained Marks</td><td>" + totalObtainedMarks + "</td></tr>");
// document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");

// Chapter 06

// Q.1


