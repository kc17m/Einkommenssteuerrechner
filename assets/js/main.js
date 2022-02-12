//erste Abfrage: Splitting oder GT?
//zweite Abfrage: Input - wie hoch? 
//if case1: siehe formel
//if case2: siehe formel
//if case3: siehe formel
//if case4: siehe formel
//if case5: siehe formel
// if splitting: res * 2

let calc_basis = document.querySelector("#basis_c");
console.log(calc_basis.value);

let input = document.querySelector("#input");
console.log(input);
let input_splitp1 = document.querySelector("#input_p1");
console.log(input_p1);
let input_splitp2 = document.querySelector("#input_p2");
console.log(input_p2);

let output_basis = document.querySelector("#output_basis");
let output_tax = document.querySelector("#output_tax");
console.log(output_tax);

let split_show = document.querySelector(".split_displayNone");
console.log(split_show);
let noSplit_show = document.querySelector(".noSplit_displayNone");

let input_sum = document.querySelector("#input_sum");
console.log(input_sum);




let basis = () => {
    console.log("test_onchange");
    if (calc_basis.value == 1) {
        output_basis.innerHTML = `Grundtarif`;
        split_show.classList.add("split_displayNone");
        noSplit_show.classList.remove("noSplit_displayNone");


    }
    else {
        output_basis.innerHTML = `Splittingtarif`;
        split_show.classList.remove("split_displayNone");
        noSplit_show.classList.add("noSplit_displayNone");
    }
}

let calc = () => {
    let input_num;
    let y, z, tax;
    console.log("test");
    let total_income;

    if (calc_basis.value == 2) {
        input_num = (Number(input_splitp1.value) + Number(input_splitp2.value)) / 2;
        input_sum.innerHTML = `Gemitteltes versteuerbares Einkommen: ${input_num}€`;
    }

    else {
        input_num = Number(input.value);
    }
    console.log(input_num);


    if (input_num <= 9744) {
        output_tax.innerHTML = "Fall 1, keine Besteuerung: 0€";

    }
    else if (input_num > 9744 && input_num <= 14753) {
        y = (input_num - 9744) / 10000;
        tax = (995.21 * y + 1400) * y;
        console.log("fall2");
        if (calc_basis.value == 2) {
            tax *= 2;
            console.log(tax);
        }
        output_tax.innerHTML = `Fall 2: ${Math.floor(tax)}€`;
    }



    else if (input_num > 14753 && input_num <= 57918) {
        z = (input_num - 14753) / 10000;
        tax = (208.85 * z + 2397) * z + 950.96;
        if (calc_basis.value == 2) {
            tax *= 2;
            console.log(tax);
        }
        output_tax.innerHTML = `Fall 3: ${Math.floor(tax)}€`;

    }
    else if (input_num > 57918 && input_num <= 274612) {
        tax = 0.42 * input_num - 9136.63;
        if (calc_basis.value == 2) {
            tax *= 2;
            console.log(tax);
        }
        output_tax.innerHTML = `Fall 4: ${Math.floor(tax)}€`;

    }
    else {
        tax = 0.45 * input_num - 17374.99;
        if (calc_basis.value == 2) {
            tax *= 2;
            console.log(tax);
        }
        output_tax.innerHTML = `Fall 5: ${Math.floor(tax)}€ (Reichensteuer)`;
    }


}

