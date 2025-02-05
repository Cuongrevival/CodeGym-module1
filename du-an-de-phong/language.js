class Translator {
    constructor() {
        this.fromText = document.querySelector(".from-text");
        this.toText = document.querySelector(".to-text");
        this.selectTag = document.querySelectorAll("select");
        this.translateBtn = document.querySelector("button");
        this.icons = document.querySelectorAll(".row i");
        this.exchangeIcon = document.querySelector(".exchange");
        this.apiBase = "https://api.mymemory.translated.net/get";
        this.init();
    }

    init() {
        this.populateLanguageOptions();
        this.setupEventListeners();
    }

    populateLanguageOptions() {
        this.selectTag.forEach((tag, id) => {
            for (const country_code in countries) {
                let selected;
                if (id === 0 && country_code === "en-GB") {
                    selected = "selected";
                } else if(id === 1 && country_code === "en-US") {
                    selected = "selected";
                }
                let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
                tag.insertAdjacentHTML("beforeend", option);
            }
        });
    }

    setupEventListeners() {
        this.icons.forEach(icon => {
            icon.addEventListener("click", (event) => this.handleIconClick(event));
        });

        this.exchangeIcon.addEventListener("click", () => this.exchangeLanguages());

        this.translateBtn.addEventListener("click", () => this.translateText());
    }

    handleIconClick(event) {
        const target = event.target;
        if (target.classList.contains("fa-copy")) {
            this.copyToClipboard(target.id);
        } else {
            this.speakText(target.id);
        }
    }

    copyToClipboard(id) {
        if (id === "from"){
        navigator.clipboard.writeText(this.fromText.value);
        } else if (id === "to"){
            navigator.clipboard.writeText(this.toText.value);
        }
        }

    speakText(id) {
        let utterance;
        if (id === 'from1'){
            utterance = new SpeechSynthesisUtterance(this.fromText.value);
            utterance.lang = this.selectTag[0].value;
        } else if (id === 'to1'){
            utterance = new SpeechSynthesisUtterance(this.toText.value);
            utterance.lang = this.selectTag[1].value;
        }
        window.speechSynthesis.speak(utterance);
    }

    exchangeLanguages() {
        [this.fromText.value, this.toText.value] = [this.toText.value, this.fromText.value];
        [this.selectTag[0].value, this.selectTag[1].value] = [this.selectTag[1].value, this.selectTag[0].value];
    }

    translateText() {
        let text = this.fromText.value;
        if (!text) return;

        this.toText.setAttribute("placeholder", "Translating...");
        let translateFrom = this.selectTag[0].value;
        let translateTo = this.selectTag[1].value;

        let apiURL = `${this.apiBase}?q=${text}&langpair=${translateFrom}|${translateTo}`;
        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                this.toText.value = data.responseData.translatedText;
                this.toText.setAttribute("placeholder", "Translation");
            });
    }
}

// Khởi tạo lớp Translator khi DOM được tải
document.addEventListener("DOMContentLoaded", () => new Translator());
