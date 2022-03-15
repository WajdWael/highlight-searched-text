/* ===== HILIGHTED WORD ===== */
function search() {
    let textToSea = document.getElementById('text-to-search').value;
    let paragraph = document.getElementById('pargarph');
    // textToSea = textToSea.replace()
    let pattern = new RegExp(`${textToSea}`, 'gi')
    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}
