let login = prompt("Enter message:");
let message = (login === "Employee") ?
     "Hello" :
    (login === "Director") ?
         "Greeting" :
        (login === " ") ?
            'No login':
            '';
alert(message);