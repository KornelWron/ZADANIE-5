//ZADANIE 1
let a = Number(prompt("Podaj a:"));
let b = Number(prompt("Podaj b:"));
 
if (b == 0) {
    document.write("Nie można dzielić przez zero.<br>");
} else {
    let x = a / b;
    document.write("Wynik: " + x + "</br>");
}

//ZADANIE 2
let a2 = Number(prompt("Podaj a:"));
let b2 = Number(prompt("Podaj b:"));
let c = Number(prompt("Podaj c:"));
let d = Number(prompt("Podaj d:"));
 
if (b2 == 0 || d == 0) {
    document.write("Nie można dzielić przez zero.<br>");
} else {
    let x2 = a2 / b2 + c / d;
    document.write("Wynik: " + x2 + "<br>");
}

//ZADANIE 3
let a3 = Number(prompt("Podaj a:"));
let b3 = Number(prompt("Podaj b:"));
 
if (b3 - 4 == 0) {
    document.write("Nie można dzielić przez zero.<br>");
} else {
    let x3 = (a3 + 6) / (b3 - 4);
    document.write("Wynik: " + x3 + "<br>");
}

//ZADANIE 4
let liczba = Number(prompt("Podaj liczbę:"));
 
if (liczba % 2 == 0) {
    document.write("Liczba jest parzysta.<br>");
} else {
    document.write("Liczba jest nieparzysta.<br>");
}

//ZADANIE 5


//ZADANIE 6
let liczba2 = Number(prompt("Podaj liczbę:"));
 
if (liczba2 > 0) {
    document.write("Liczba jest dodatnia.<br>");
} else if (liczba2 < 0) {
    document.write("Liczba jest ujemna.<br>");
} else {
    document.write("Liczba jest równa 0.<br>");
}
//ZADANIE 7
let a4 = Number(prompt("Podaj pierwszą liczbę:"));
let b4 = Number(prompt("Podaj drugą liczbę:"));
let c2 = Number(prompt("Podaj trzecią liczbę:"));
 
let najwieksza = a;
 
if (b4 > najwieksza) {
    najwieksza = b4;
}
 
if (c2 > najwieksza) {
    najwieksza = c2;
}

//ZADANIE 8
let a5 = Number(prompt("Podaj pierwszą liczbę:"));
let b5 = Number(prompt("Podaj drugą liczbę:"));
let c3 = Number(prompt("Podaj trzecią liczbę:"));
 
let liczby = [a5, b5, c3];
 
liczby.sort(function(x, y) {
    return x - y;
});
 
document.write("Kolejność rosnąca: " + liczby.join(", ") + "<br>");