// In this challenge, you'll create a ticking clock in the document body.
// The index.html file contains a div with an ID of clock.
// Using callback functions and DOM manipulation, output a ticking digital clock which displays the current hours, minutes, and seconds.

// 1.create clock function
function clock() {
  // lets grab clock dom node
  const clockNode = document.querySelector("#clock");
  // to get the clock to update every second we can use "setinterval" and pass 1000 millisecond as 2nd argument
  //   1st agrumnt -> callback function(create new date and & turn it to locale time string)
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    // set clock dom node text content
    clockNode.textContent = tick;
  }, 1000);
}
clock();
