lineL = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']; 
lineN = ['8th' , '6th', 'Union Square', '3rd', '1st'] 
lineS =['Grand Central', '33rd',  '28th' , '23rd' , 'Union Square' , 'Astor Place']



// step 2
var userLine = prompt("Please input line selection: L or N or S");
console.log("your selected is: " + userLine + " line.");


// Line L
if (userLine === 'L') {
  var selectedL = prompt("Please write your start point: 8th , 6th , Union Square, 3rd , 1st");
      if (selectedL === '8th' || selectedL === '6th' || selectedL === 'Union Square' || selectedL === '3rd' || selectedL === '1st') {
          console.log(" - The path of stations in this line is: " + lineL + ". \n - " + lineL.length + " stations in total." );
          //console.log("Thank you.");
      } else {
          console.log("(L) line does not reach " + selectedL +" you should Change at Union Square to other Line." + "\n check other two lines stations:\n - LineS: " + lineS + "\n - LineN: " + lineN);
          //console.log("Thank you.");
      }


// Line N
} else if (userLine === 'N') {
  var selectedN = prompt("Please write your start point: Times Square, 34th, 28th, 23rd, Union Square, 8th");
      if (selectedN === 'Times Square' || selectedN === '34th' || selectedN === '28th' || selectedN === '23rd' || selectedN === 'Union Square' || selectedN ==='8th') {
          console.log("- The path of stations in this line is: " + lineN + ".\n - " + lineN.length + " stations in total." );
  } else {
          console.log("(N) line does not reach " + selectedN + " you should Change at Union Square to other Line."+ "\n check other two lines stations:\n - LineL: " + lineL + "\n - LineS: " + lineS);
      }


// Line S
} else if (userLine === 'S') { 
  var selectedS = prompt("Please Write your start point: Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place.");
      if (selectedS === 'Grand Central' || selectedS === '33rd' || selectedS === '28th' || selectedS === '23rd' || selectedS === 'Union Square' || selectedS === 'Astor Place')  {
          console.log("- The path of stations in this line is: " + lineS + ".\n - " + lineS.length + " stations in total." );
      } else {
          console.log("(S) line does not reach " + selectedS + " you should Change at Union Square to other Line." + "\n check other two lines stations: - LineL: " + lineL + "\n - LineN: " + lineN);
      }
  alert("Thank you.");
}