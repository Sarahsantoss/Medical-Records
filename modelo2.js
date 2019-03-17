function lercookie() {
cookie = document.cookie.substring(document.cookie.indexOf(""),document.cookie.indexOf("end"));
if (cookie=="") document.membros.login.value="";
else document.membros.login.value=""+cookie+"";
}

function lockaccess() {
L = document.membros.login.value;
S = document.membros.senha.value;
if (L=="" || S=="") document.membros.acesso.disabled=true, document.membros.lembrar.disabled=true;
else document.membros.acesso.disabled=false, document.membros.lembrar.disabled=false;
}

function logar() {
if (L.length < 11) alert("O nome de usu�rio precisa ter pelo menos 11 caracteres!");
else if (S.length < 8) alert("A senha do usu�rio precisa ter pelo menos 8 caracteres!");
else {







//CRIE UMA SUBPASTA CHAMADA "usuarios" E COLOQUE AS P�GINAS DENTRO//

if (L=="usuario1" && S=="senha1") abrir('pagina1.htm');
else if (L=="usuario2" && S=="senha2") abrir('pagina2.htm');
else if (L=="usuario3" && S=="senha3") abrir('pagina3.htm');
else if (L=="usuario4" && S=="senha4") abrir('pagina4.htm');
else if (L=="usuario5" && S=="senha5") abrir('pagina5.htm');







else alert("DADOS INV�LIDOS OU INCORRETOS!\n\n\Verifique se seu nome de usu�rio � "+L+" e se sua senha possui "+S.length+" caracteres.\n\Talvez algum caractere esteja faltado ou sobrando.\n\n\Verifique se a luz do 'Caps Lock' est� acesa no teclado.\n\Se estiver, pressione 'Caps Lock' e tente novamente.");
}
}

function abrir(arquivo) {
window.open("usuarios/"+arquivo+"","_blank","menubar=no,toolbar=no,location=no,directories=no,scrollbars=yes,status=no,resizable=yes"); escrever();
}

function escrever() {
Agora = new Date();
Agora.setTime(Agora.getTime()+(365*24*60*60*1000));
if (document.membros.lembrar.checked == true) {
document.cookie=""+document.membros.login.value+"end"+Agora+"; expires="+Agora.toGMTString();+"";
}
else {
document.cookie="end"+Agora+"; expires="+Agora.toGMTString();+"";
}
}