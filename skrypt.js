// tło
function losKolor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.body.style.background = losKolor();


// filmy
const filmy = [
    ["Inception", "Film o podróżach w snach i manipulowaniu rzeczywistością. Bohater podejmuje się niebezpiecznej misji w ludzkim umyśle."],
    ["Matrix", "Historia człowieka odkrywającego prawdę o symulowanym świecie. Film porusza temat wolności i kontroli."],
    ["Titanic", "Romantyczna historia na tle katastrofy statku. Opowieść o miłości i tragedii."],
    ["Avatar", "Akcja dzieje się na planecie Pandora pełnej niezwykłych istot. Film pokazuje konflikt ludzi z naturą."],
    ["Joker", "Psychologiczny portret człowieka odrzuconego przez społeczeństwo. Pokazuje jego przemianę w złoczyńcę."],
    ["Interstellar", "Podróż przez kosmos w poszukiwaniu nowego domu dla ludzkości. Film łączy naukę z emocjonalną historią rodziny."],
    ["Gladiator", "Opowieść o rzymskim generale zdradzonym przez cesarza. Walczy o honor i zemstę na arenie."],
    ["Dune", "Historia walki o kontrolę nad pustynną planetą Arrakis. Film opowiada o polityce i przeznaczeniu."],
    ["Forrest Gump", "Niezwykła podróż przez życie prostego człowieka. Bohater staje się świadkiem wielkich wydarzeń historycznych."],
    ["The Dark Knight", "Batman mierzy się z chaotycznym Jokerem. Film pokazuje walkę dobra ze złem w Gotham."]
];

const lista = document.getElementById("lista");

function pokaz(listaFilmy) {
    lista.innerHTML = "";
    listaFilmy.forEach(f => {
        const div = document.createElement("div");
        div.innerHTML = `<b>${f[0]}</b><br>${f[1]}`;
        lista.appendChild(div);
    });
}

pokaz(filmy);


// szukanie
document.getElementById("szuk").addEventListener("input", e => {
    const txt = e.target.value.toLowerCase();
    const wynik = filmy.filter(f => f[0].toLowerCase().includes(txt));
    pokaz(wynik);
});


// logowanie
const okno = document.getElementById("okno");

document.getElementById("log").onclick = () => {
    okno.classList.toggle("ukryj");
};

document.getElementById("ok").onclick = () => {
    const imie = document.getElementById("imie").value.trim();
    const msg = document.getElementById("msg");

    if (imie === "") {
        msg.textContent = "Podaj login!";
    } else {
        document.getElementById("wit").textContent = "Witaj " + imie + "!";
        okno.classList.add("ukryj");
    }
};


// cytaty
const cytaty = [
    "Dobry film potrafi przenieść nas w zupełnie inny świat.",
    "Kino to miejsce, gdzie emocje spotykają się z wyobraźnią.",
    "Każda historia na ekranie może zostawić ślad na długo.",
    "Filmy przypominają nam, jak różnorodny jest świat.",
    "Czasem jeden film potrafi zmienić sposób patrzenia na życie.",
    "Najlepsze historie to te, które czujemy sercem.",
    "Seans filmowy to chwila odpoczynku od codzienności."
];

document.getElementById("cyt").textContent =
    cytaty[Math.floor(Math.random() * cytaty.length)];

