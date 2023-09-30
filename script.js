function validarSenhas() {
    var senha = document.getElementById("senha").value;
    var confirmacao = document.getElementById("confirmacao").value;
   


    let caracterEspecial = senha.includes("!" || "#" || "@" || "$" || "%" ||"&")

    // Verifica se as senhas são iguais
    if (senha !== confirmacao) {
        document.getElementById("containerResultado").innerHTML = "As senhas tem que ser iguais!"
        return;
    }

    // Verifica se a senha atende aos requisitos (por exemplo, ter pelo menos 8 caracteres)
    if (senha.length < 6) {
        document.getElementById("containerResultado").innerHTML= "A senha deve conter pelo menos 6 caracteres.";
        return;
    }

   

    // Se as senhas coincidirem e atenderem aos requisitos, exiba uma mensagem de sucesso
    document.getElementById("containerResultado").innerHTML= "As senhas são válidas.";

}