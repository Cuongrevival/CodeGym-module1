let browser=prompt("Enter browser name:");
switch(browser) {
    case "Edge":
        alert("You got the Edge");
        break;
    case "Firefox":
    case "Chrome":
    case "Safari":
    case"Opera":
        alert("Ok we support these browser too");
        break;
    default:
        alert("We hope this page looks ok!")
        break;
}

