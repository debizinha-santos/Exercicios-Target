//valores
let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;
let total = sp + rj + mg + es + outros;

function updateDistribuidora() {
    const select = document.getElementById("selectDistribuidora");
    const selectedValue = select.value;
    const percentLabel = document.getElementById("percentLabel");

    // Mapeamento dos percentuais
    const percentuais = {
        sp: (67836.43 / total) * 100,
        rj: (36678.66 / total) * 100,
        mg: (29229.88 / total) * 100,
        es: (27165.48 / total) * 100,
        outros: (19849.53 / total) * 100,
        total: 100
    };

    if (selectedValue && percentuais[selectedValue] !== undefined) {
        percentLabel.textContent = `Porcentagem: ${percentuais[selectedValue].toFixed(2)}%`;
    } else {
        percentLabel.textContent = "Porcentagem: --%";
    }
}