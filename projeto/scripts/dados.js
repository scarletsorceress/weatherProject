document.getElementById("input_sel_arq").addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const fileContent = e.target.result;
            const rows = fileContent.split('\n');

            const table = document.getElementById("tab_geral");
            table.innerHTML = ""; // Clear existing table

            // Add custom row
            const customRow = table.insertRow(-1);
            const cell1 = customRow.insertCell(0);
            const cell2 = customRow.insertCell(1);
            cell1.textContent = "Temperatura (ºC)";
            cell2.textContent = "Umidade (%)";

            for (let i = 0; i < rows.length; i++) {
                const row = table.insertRow(-1);
                const columns = rows[i].split(';'); // Separate columns using ';'

                for (let j = 0; j < columns.length; j++) {
                    const cell = row.insertCell(-1);
                    cell.textContent = columns[j].trim(); // Trim leading and trailing whitespace
                }
            }
        };

        reader.readAsText(file);
    }
});