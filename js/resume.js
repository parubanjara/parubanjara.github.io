window.addEventListener('DOMContentLoaded', () => {
    let printer_text = document.querySelector('#print li');

    if (printer_text) {
        printer_text.addEventListener('click', () => {
            window.print();
        });
    }
});
