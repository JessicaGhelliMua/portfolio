import Translator from "./translator.js";

var translator = new Translator({
    persist: false,
    languages: ["en", "it"],
    defaultLanguage: "it",
    detectLanguage: true,
    filesLocation: "i18n"
});

translator.load();

document.querySelector("form").addEventListener("click", function (evt) {
    if (evt.target.tagName === "BUTTON") {
        translator.load(evt.target.value);
    }
});