{function mostrarTabelaBorda()
{
    $("#tabelaEscondidaOpcoesPizza").hide();
    $("#tabelaEscondidaSabores").hide();
    $("#tabelaEscondidaBordas").show();
}

function mostrarTabelaOpcoesPizza()
{
    $("#tabelaEscondidaBordas").hide();
    $("#tabelaEscondidaSabores").hide();
    $("#tabelaEscondidaOpcoesPizza").show();
}


function mostrarTabelaSabores()
{
    $("#tabelaEscondidaBordas").hide();
    $("#tabelaEscondidaOpcoesPizza").hide();
    $("#tabelaEscondidaSabores").show();

}

}

{
function validarForm()

{
var nome = document.getElementById("nome").value
var telefone = document.getElementById("telefone").value
var email = document.getElementById("email").value
var data = document.getElementById("data").value
var mensagem = document.getElementById("mensagem").value

if(nome =="" || nome.length <=3){
    alert("Informe o nome completo!");
    document.nome.focus();
    return false;}

 if(telefone == "" || telefone.length <= 10){
	alert("Informe telefone completo!");
	document.telefone.focus();
	return false;    }

if(email == "" || email.length < 10){
    alert("E-mail não atende os requisitos!");
    document.email.focus();
    return false; }      

if(data == "" || data.length <= 3){
    alert("Informe uma data válida!");
    document.data.focus();
    return false;}

if(mensagem == "" || mensagem.length <= 3){
    alert("Digite sua mensagem!");
    document.mensagem.focus();
    return false;}


}
}