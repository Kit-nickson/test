for (i = 1; i <= 10; ++i) {
    for (k = 1; k <= 10; ++k) {
        let num = (String(i * k) + " \n ");
        let text = document.createTextNode(num);
        let table = document.getElementById('table');
        table.appendChild(text);
    };
};