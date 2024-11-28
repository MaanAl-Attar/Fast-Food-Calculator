
document.getElementById("Submit").addEventListener("click", Calculate)

function Calculate() {
    
    // Input
    let input1 = document.getElementById("in-1").value;
    let input2 = document.getElementById("in-2").value;
    let input3 = document.getElementById("in-3").value;
    let input4 = document.getElementById("in-4").value;
    let input5 = document.getElementById("in-5").value;
    let input6 = document.getElementById("in-6").value;
    let input7 = document.getElementById("in-7").value;
    let input8 = document.getElementById("in-8").value;
    let input9 = document.getElementById("in-9").value;
    let input10 = document.getElementById("in-10").value;

    // Output
    let answer = ((input1 * 7.99) + (input2 * 1.99) + (input3 * 4.99) + (input4 * 1.99) + (input5 * 1.25) + (input6 * 1.99) + (input7 * 2.90) + (input8 * 1.99) + (input9 * 6.89) + (input10 * 1.99))
    
    let answer2 = (((input1 * 7.99) + (input2 * 1.99) + (input3 * 4.99) + (input4 * 1.99) + (input5 * 1.25) + (input6 * 1.99) + (input7 * 2.90) + (input8 * 1.99) + (input9 * 6.89) + (input10 * 1.99)) * 0.05) + ((input1 * 7.99) + (input2 * 1.99) + (input3 * 4.99) + (input4 * 1.99) + (input5 * 1.25) + (input6 * 1.99) + (input7 * 2.90) + (input8 * 1.99) + (input9 * 6.89) + (input10 * 1.99))

    answer = answer.toFixed(2)

    answer2 = answer2.toFixed(2)

    // What comes out when hit "Submit Order"
    document.getElementById("in-1").value = " ";
    document.getElementById("in-2").value = " ";
    document.getElementById("in-3").value = " ";
    document.getElementById("in-4").value = " ";
    document.getElementById("in-5").value = " ";
    document.getElementById("in-6").value = " ";
    document.getElementById("in-7").value = " ";
    document.getElementById("in-8").value = " ";
    document.getElementById("in-9").value = " ";
    document.getElementById("in-10").value = " ";
    document.getElementById("sp-1").innerHTML = `$${(input1 * 7.99)}`;
    document.getElementById("sp-2").innerHTML = `$${(input3 * 4.99)}`;
    document.getElementById("sp-3").innerHTML = `$${(input5 * 1.25)}`;
    document.getElementById("sp-4").innerHTML = `$${(input7 * 2.90)}`;
    document.getElementById("sp-5").innerHTML = `$${(input9 * 6.89)}`;
    document.getElementById("sp-6").innerHTML = `$${(input2 * 1.99)}`;
    document.getElementById("sp-7").innerHTML = `$${(input4 * 1.99)}`;
    document.getElementById("sp-8").innerHTML = `$${(input6 * 1.99)}`;
    document.getElementById("sp-9").innerHTML = `$${(input8 * 1.99)}`;
    document.getElementById("sp-10").innerHTML = `$${(input10 * 1.99)}`;

    document.getElementById("output").innerHTML = `$${answer}`;

    document.getElementById("output2").innerHTML = `$${answer2}`;

    // What comes up in your console on your website
    let output = `$${answer}`;
    console.log(output);

    let output2 = `$${answer2}`
    console.log(output2)
}