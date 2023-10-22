//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', async function () {
    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    if (!text || isNaN(delay)) {
      outputDiv.innerText = 'Please enter valid text and delay.';
      return;
    }

    outputDiv.innerText = 'Waiting...';

    // Use a promise to simulate the delay
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Display the message after the delay
    outputDiv.innerText = text;
  });
});