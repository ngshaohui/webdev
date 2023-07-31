document.addEventListener('DOMContentLoaded', function () {
    let counter = 0;
    let numClicks = 0;
    const minusBtn = document.querySelector("#minus");
    const plusBtn = document.querySelector("#plus");
    const counterSpan = document.querySelector("#counter");
    const clicksSpan = document.querySelector("#clicks");

    // decrement counter when - is clicked
    minusBtn.addEventListener('click', function () {
        counter--;
        counterSpan.textContent = counter.toString();
    })
    // increment counter when + is clicked
    plusBtn.addEventListener('click', function () {
        counter++;
        counterSpan.textContent = counter.toString();
    })
    // increment numClicks on page click
    document.addEventListener('click', function () {
        numClicks++;
        clicksSpan.textContent = numClicks.toString();
    })
});