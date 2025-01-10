const good=document.getElementById("good");
const fast=document.getElementById("fast");
const cheap=document.getElementById("cheap");
function Rule(change) {
    if (good.checked && fast.checked && cheap.checked) {
        if (change === good) {
            fast.checked = false;
        } else if (change === fast) {
            cheap.checked = false;
        } else if (change === cheap) {
            good.checked = false;
        }
    }
}
    good.addEventListener("change",() =>Rule(good));
    fast.addEventListener("change",() => Rule(fast));
    cheap.addEventListener("change",() => Rule(cheap));
