function enviardados(){

 if(document.dados.tx_nome.value=="" || document.dados.tx_nome.value.length > 150 || document.dados.tx_nome.value.length < 7)
{
alert( "Preencha campo NOME corretamente!" );
document.dados.tx_nome.focus();

}
 
//if( document.dados.tx_email.value=="" || document.dados.tx_email.value.indexOf('@')==-1 || document.dados.tx_email.value.indexOf('.')==-1 )
//{
//alert( "Preencha campo E-MAIL corretamente!" );
//document.dados.tx_email.focus();

//}

if( document.dados.idade.value < 18)
{
alert( "Menor de 18 anos" );
document.dados.idade.focus();

}

if( document.dados.idade.value > 120)
{
alert( "Idade maior de 120 anos" );
document.dados.idade.focus();
}

//if( document.dados.idade.value=="")
//{
//alert( "Idade não especificada" );
//document.dados.idade.focus();
//}

if( document.dados.password.value != document.dados.password2.value )
{
alert( "Senhas diferentes" );
document.dados.password.focus();
}

if( document.dados.password.value=="" || document.dados.password2.value=="" )
{
alert( "Senha não digitada" );
document.dados.password.focus();
}
 
if( document.dados.tx_email.value != "555")
{
usuario = dados.tx_email.value.substring(0, dados.tx_email.value.indexOf("@"));
dominio = dados.tx_email.value.substring(dados.tx_email.value.indexOf("@")+ 1, dados.tx_email.value.length);
 
if ((usuario.length >=1) &&
    (dominio.length >=3) && 
    (usuario.search("@")==-1) && 
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) && 
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&      
    (dominio.indexOf(".") >=1)&& 
    (dominio.lastIndexOf(".") < dominio.length - 1)) {

}
else{
alert("E-mail invalido");
}
}

return false;
}

function enviardados2(){

if( document.dados2.l_email.value == "adm@adm" )
{
alert( "Acesso a adm liberado" );
document.dados2.l_email.focus();
return false;
}

if( document.dados2.l_email.value != "555")
{
usuario2 = dados2.l_email.value.substring(0, dados2.l_email.value.indexOf("@"));
dominio2 = dados2.l_email.value.substring(dados2.l_email.value.indexOf("@")+ 1, dados2.l_email.value.length);
 
if ((usuario2.length >=1) &&
    (dominio2.length >=3) && 
    (usuario2.search("@")==-1) && 
    (dominio2.search("@")==-1) &&
    (usuario2.search(" ")==-1) && 
    (dominio2.search(" ")==-1) &&
    (dominio2.search(".")!=-1) &&      
    (dominio2.indexOf(".") >=1)&& 
    (dominio2.lastIndexOf(".") < dominio2.length - 1)) {

}
else{
alert("E-mail invalido");
}
}
 
return false;
}