//erste Abfrage: Splitting oder GT?
//zweite Abfrage: Input - wie hoch? 
//if case1: siehe formel
//if case2: siehe formel
//if case3: siehe formel
//if case4: siehe formel
//if case5: siehe formel
// if splitting: res * 2

let calc_basis = document.querySelector("#basis_c");
console.log("calcBasisValue :",calc_basis.value);

let input = document.querySelector("#input");
let input_splitp1 = document.querySelector("#input_p1");
let input_splitp2 = document.querySelector("#input_p2");

let output_basis = document.querySelector("#output_basis");
let output_tax = document.querySelector("#output_tax");

let split_show = document.querySelector(".split_displayNone");
let noSplit_show = document.querySelector(".noSplit_displayNone");

let input_sum = document.querySelector("#input_sum");

let invalid = document.querySelector(".invalid_number")
console.log(invalid)
let correct = document.querySelector(".correct_entry")
console.log(correct)



let basis = () => {
    if (calc_basis.value == 1) {
        output_basis.innerHTML = `Grundtarif`;
        split_show.classList.add("split_displayNone");
        noSplit_show.classList.remove("noSplit_displayNone");
        input_sum.style.display = "none";
    }
    else {
        output_basis.innerHTML = `Splittingtarif`;
        split_show.classList.remove("split_displayNone");
        noSplit_show.classList.add("noSplit_displayNone");        
    }
}

//check for valid entries
let check = () => {
     if (
        isNaN(+input.value) || 
        isNaN(+input_p1.value) || 
        isNaN(+input_p2.value) ||
        input.value == " " ||
        input_p1.value == " " ||
        input_p2.value == " "
        ) {
            invalid.classList.remove("d-none")
            correct.classList.add("d-none")
            console.log(isNaN(+input_p1.value), isNaN(+input_p2.value))
        }
        else {
            console.log("Input is correct")
            //calc()
        }
}


let calc = () => {

    let input_num;
    let y, z, tax;
    //let total_income;

    check()
    

    if (calc_basis.value == 2) {        
        input_num = (Number(input_splitp1.value) + Number(input_splitp2.value)) / 2;
        input_sum.innerHTML = `Gemitteltes versteuerbares Einkommen: ${input_num.toFixed(2).toLocaleString().replace(/\B(?<!\,\d*)(?=(\d{3})+(?!\d))/g, ".").replace(/.([^.]*)$/, ",$1") } €`;
    }
//regex to insert thousand separators: replace(/\B(?<!\,\d*)(?=(\d{3})+(?!\d))/g, ".")) } €`;

    else {
        input_num = Number(input.value);
        input_sum.innerHTML = ` `;    
    }
    console.log(input_num);


    if (input_num <= 9744) {
        output_tax.innerHTML = "Fall 1, keine Besteuerung: 0,00 €";

    }
    else if (input_num > 9744 && input_num <= 14753) {
        y = (input_num - 9744) / 10000;
        tax = (995.21 * y + 1400) * y;
        console.log("fall2");
        if (calc_basis.value == 2) {
            tax *= 2;
            console.log(tax);
        }
        output_tax.innerHTML = `Fall 2: ${Math.floor(tax).toFixed(2).toLocaleString().replace(/\B(?<!\,\d*)(?=(\d{3})+(?!\d))/g, ".").replace(/.([^.]*)$/, ",$1")} €`;
    }



    else if (input_num > 14753 && input_num <= 57918) {
        z = (input_num - 14753) / 10000;
        tax = (208.85 * z + 2397) * z + 950.96;
        if (calc_basis.value == 2) {
            tax *= 2;
            console.log(tax);
        }
        output_tax.innerHTML = `Fall 3: ${Math.floor(tax).toFixed(2).toLocaleString().replace(/\B(?<!\,\d*)(?=(\d{3})+(?!\d))/g, ".").replace(/.([^.]*)$/, ",$1")} €`;

    }
    else if (input_num > 57918 && input_num <= 274612) {
        tax = 0.42 * input_num - 9136.63;
        if (calc_basis.value == 2) {
            tax *= 2;
            console.log(tax);
        }
        output_tax.innerHTML = `Fall 4: ${Math.floor(tax).toFixed(2).toLocaleString().replace(/\B(?<!\,\d*)(?=(\d{3})+(?!\d))/g, ".").replace(/.([^.]*)$/, ",$1")} €`;

    }
    else {
        tax = 0.45 * input_num - 17374.99;
        if (calc_basis.value == 2) {
            tax *= 2;
            console.log(tax);
        }
        output_tax.innerHTML = `Fall 5: ${Math.floor(tax).toFixed(2).toLocaleString().replace(/\B(?<!\,\d*)(?=(\d{3})+(?!\d))/g, ".").replace(/.([^.]*)$/, ",$1")} € (Reichensteuer)`;
    }


}

