/** 
 * Skapa en tabell med 5 kolumner och 2 rader
 * Första raden i tabellen skall innehålla en knapp per kolumn, dvs totalt fem knappar på först raden.
 * - Första knappen skall heta "1", och hämta endast ett ord från https://codexplained.se/lorem_json_array.php?numberOfWords= värdet som anges
 * - Andra knappen skall heta "2", och hämta två ord från samma URL
 * - Tredje knappen skall heta "3", och hämta tre ord från samma URL
 * - Gör samma sak för knapp 4 och 5
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * https://codexplained.se/lorem_json_array.php?numberOfWords=3
 * https://codexplained.se/lorem_json_array.php?numberOfWords=10
 *
 * Varje knapp hämtar datan och placerar datan under respektive knapp, i andra raden.
 * Datan är en array med ord, dessa ord skall visas i en lista där varje ord är en listitem <il>
 * 
 * 
 * Skall ungefär se ut på följande sätt, efter att varje knapp gjort ett anrop
 * |-----|-----|-----|-----|-----|
 * |  1  |  2  |  3  |  4  |  5  |
 * |-----|-----|-----|-----|-----|
 * |.asd |.asd |.qwe |.qwe |.wer |
 * |     |.weq |.ewr |.gfd |.sfd |
 * |     |     |.ewr |.gfd |.cvx |
 * |     |     |     |.gfd |.dff |
 * |     |     |     |     |.bvc |
 * |-----|-----|-----|-----|-----|
 */

const btns = document.getElementsByTagName('button');
for(let btn of btns) {
    btn.addEventListener('click', fetchData)
}

async function fetchData(e) {
    const btnNumber = e.target.innerHTML
    clearList(btnNumber);

    try{
        let response = await fetch('https://codexplained.se/lorem_json_array.php?numberOfWords=' + btnNumber);
        let data = await response.json();

        let listHTML = '';
        for(let word of data) {
            listHTML += `<li>${word}</li>`;
        }
        document.getElementById('list-column-' + btnNumber).innerHTML = `<ul>${listHTML}</ul>`;
    } catch(error) {
        console.log(error)
    }
}

function clearList(btnNumber) {
    document.getElementById('list-column-' + btnNumber).innerHTML = '';
}