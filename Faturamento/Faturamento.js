fetch("./dados.json")
    .then((response) => response.json())
    .then((data) => {
        const diasComFaturamento = data.filter((item) => item.valor > 0);

        const menor = Math.min(...diasComFaturamento.map((item) => item.valor));
        const maior = Math.max(...diasComFaturamento.map((item) => item.valor));

        const somaFaturamento = diasComFaturamento.reduce((acc, item) => acc + item.valor, 0);
        
        const mediaMensal = somaFaturamento / diasComFaturamento.length;

        const diasAcima = diasComFaturamento.filter((item) => item.valor > mediaMensal).length;

        document.getElementById("menor").textContent = `R$ ${menor.toFixed(2)}`;
        document.getElementById("maior").textContent = `R$ ${maior.toFixed(2)}`;
        document.getElementById("diasAcima").textContent = `${diasAcima} dias`;
    })
    .catch((error) => {
        console.error("Erro ao processar os dados:", error);
        document.getElementById("menor").textContent = "Erro ao carregar";
        document.getElementById("maior").textContent = "Erro ao carregar";
        document.getElementById("diasAcima").textContent = "Erro ao carregar";
    });