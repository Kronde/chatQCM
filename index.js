let divChat = document.getElementById("chat");
let divReponse_01 = document.getElementById("reponse-01");
divReponse_01.style.display = "none";

let divReponse_02 = document.getElementById("reponse-02");
divReponse_02.style.display = "none";

// MESSAGE 01
let msg_01_01 = "Hello";
let msg_01_02 = "How are you ?";
let arrayMessage_01 = [msg_01_01, msg_01_02];

let btn_01_01 = document.getElementById("btn-01-01");
let btn_01_02 = document.getElementById("btn-01-02");

// MESSAGE 02
let phase02Start = false;
let msg_02_01 = "I'm fine !";
let msg_02_02 = "What's up ?";
let arrayMessage_02 = [msg_02_01, msg_02_02];

let intervalID_02;

let btn_02_01 = document.getElementById("btn-02-01");
let btn_02_02 = document.getElementById("btn-02-02");

let index = 0;

const intervalID_01 = setInterval(displayMessage_01, 1000);

function updateScroll() {
    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight;
}

function addMessage(message, className) {
    let newMessage = document.createElement("p");
    newMessage.classList.add(className);
    newMessage.textContent = message;
    divChat.appendChild(newMessage);
    updateScroll();
}

function displayMessage_01() {
    if (index < arrayMessage_01.length) {
        addMessage(arrayMessage_01[index], "msg-contact");
        index++;
    }
    if (index === arrayMessage_01.length) {
        clearInterval(intervalID_01);
        divReponse_01.style.display = "block";
    }
}

btn_01_01.addEventListener("click", function () {
    phase02Start = true;
    divReponse_01.style.display = "none";
    addMessage(btn_01_01.value, "msg-me");
    startPhase02();
    updateScroll();
});

btn_01_02.addEventListener("click", function () {
    phase02Start = true;
    divReponse_01.style.display = "none";
    addMessage(btn_01_02.value, "msg-me");
    startPhase02();
    updateScroll();
});

function startPhase02() {
    if (phase02Start === true) {
        index = 0;
        intervalID_02 = setInterval(displayMessage_02, 1000);
    }
}

function displayMessage_02() {
    if (index < arrayMessage_02.length) {
        addMessage(arrayMessage_02[index], "msg-contact");
        index++;
    }
    if (index === arrayMessage_02.length) {
        clearInterval(intervalID_02);
        divReponse_02.style.display = "block";
    }
}

btn_02_01.addEventListener("click", function () {
    phase03Start = true;
    // divReponse_02.style.display = "none";
    addMessage(btn_02_01.value, "msg-me");
    updateScroll();
});

btn_02_02.addEventListener("click", function () {
    phase03Start = true;
    // divReponse_02.style.display = "none";
    addMessage(btn_02_02.value, "msg-me");
    updateScroll();
});
