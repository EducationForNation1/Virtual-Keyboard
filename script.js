const keyboardContainer = document.getElementById("keyboard");
const textInput = document.getElementById("text-input");

const keys = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L", "⌫",
    "Z", "X", "C", "V", "B", "N", "M", "Shift", "Space", "Enter"
];

let isShiftActive = false;

function createKeyboard() {
    keys.forEach(key => {
        const keyElement = document.createElement("div");
        keyElement.classList.add("key");
        keyElement.textContent = key;

        if (key === "⌫" || key === "Shift" || key === "Space" || key === "Enter") {
            keyElement.classList.add("special");
        }

        keyElement.addEventListener("click", () => handleKeyPress(key, keyElement));
        keyboardContainer.appendChild(keyElement);
    });
}

function handleKeyPress(key, keyElement) {
    keyElement.classList.add("pressed");
    setTimeout(() => keyElement.classList.remove("pressed"), 100);

    if (key === "⌫") {
        textInput.value = textInput.value.slice(0, -1);
    } else if (key === "Space") {
        textInput.value += " ";
    } else if (key === "Enter") {
        alert("You entered: " + textInput.value);
    } else if (key === "Shift") {
        isShiftActive = !isShiftActive;
        toggleShift();
    } else {
        textInput.value += isShiftActive ? key.toUpperCase() : key.toLowerCase();
    }
}

function toggleShift() {
    document.querySelectorAll(".key").forEach(keyElement => {
        if (!keyElement.classList.contains("special")) {
            keyElement.textContent = isShiftActive ? keyElement.textContent.toUpperCase() : keyElement.textContent.toLowerCase();
        }
    });
}

createKeyboard();
