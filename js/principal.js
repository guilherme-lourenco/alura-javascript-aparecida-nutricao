var divPacientes = document.querySelectorAll(".paciente")
var divPesos = document.querySelectorAll(".info-peso");
var divAlturas = document.querySelectorAll(".info-altura");
var divImcs = document.querySelectorAll(".info-imc");
var calculaImc;
for(var i = 0; i < divImcs.length ;i++)
{
    if(divPesos[i].innerHTML <=0 || divPesos[i].innerHTML >=1000)
    {
        divImcs[i].innerHTML = "Peso inválido.";
        divPacientes[i].classList.add("paciente-invalido");
    }else if(divAlturas[i].innerHTML <=0 || divAlturas[i].innerHTML >=3.00)
    {
        divImcs[i].innerHTML ="Altura inválida.";
        divPacientes[i].classList.add("paciente-invalido");
    }else{
        divImcs[i].innerHTML = (divPesos[i].innerHTML/(divAlturas[i].innerHTML * divAlturas[i].innerHTML)).toFixed(2);
    }
   
}   
