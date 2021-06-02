function depositar(){
    var real1 = document.getElementById("1real").value;
    var cents50 = document.getElementById("50cents").value;
    var cents25 = document.getElementById("25cents").value;
    var cents10 = document.getElementById("10cents").value;
    var cents5 = document.getElementById("5cents").value;
    var cents1 = document.getElementById("1cents").value;

    var calculo = (real1*1)+(cents50*0.5)+(cents25*0.25)+(cents10*0.1)+(cents5*0.05)+(cents1*0.01);

    document.getElementById("total").innerText = calculo.toFixed(2)
}