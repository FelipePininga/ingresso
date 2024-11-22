function comprar(){
    const tipoIngressoSelect = document.getElementById('tipo-ingresso');
    const quantidadeInput = document.getElementById('qtd');
    const tipoIngresso = tipoIngressoSelect.value;
    const quantidadeDesejada = parseInt(quantidadeInput.value);
    if (isNaN(quantidadeDesejada) || quantidadeDesejada <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }
    let quantidadeDisponivelSpan;
    switch (tipoIngresso) {
        case "inferior":
            quantidadeDisponivelSpan = document.getElementById('qtd-inferior');
            break;
        case "superior":
            quantidadeDisponivelSpan = document.getElementById('qtd-superior');
            break;
        case "pista":    
            quantidadeDisponivelSpan = document.getElementById('qtd-pista');
            break;
        default:
            alert("Tipo de ingresso inválido.");
            return;    
    }
    const quantidadeDisponivel = parseInt(quantidadeDisponivelSpan.textContent);
    if (quantidadeDesejada > quantidadeDisponivel) {
        alert("Quantidade insuficiente de ingressos disponíveis.");
        return;
    }
    const novaQuantidadeDisponivel = quantidadeDisponivel - quantidadeDesejada;
    quantidadeDisponivelSpan.textContent = novaQuantidadeDisponivel;
    alert("Compra realizada com sucesso!");
}