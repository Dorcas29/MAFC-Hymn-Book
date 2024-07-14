document.addEventListener("DOMContentLoaded", function () {
    const hymns = [
        { title: "Ishe Taungana", lyrics: "ISHE taungana, Muno mumba yako, Uya newe zvatapinda, Ishe mberi kwako.Iyo mwoyo yedu Inokurwarira, Nayo mweya yedu Ishe, Inokutarira. Hurukuro dzako, Baba ngatidzinzwe; Razarurwa dama rako, Newe ngatikunzwe. Ngautigadzire, Isu vanhu vako: Kana tafa, tipinzewo, Kune denga rako" },
        { title: "Great is Thy Faithfulness", lyrics: "Great is Thy faithfulness, O God my Father..." },
        { title: "How Great Thou Art", lyrics: "O Lord my God, when I in awesome wonder..." },
        // Add more hymns as needed
    ];

    const hymnList = document.getElementById('hymn-list');

    hymns.forEach(hymn => {
        const hymnElement = document.createElement('div');
        hymnElement.classList.add('hymn');

        const hymnTitle = document.createElement('h2');
        hymnTitle.textContent = hymn.title;
        hymnElement.appendChild(hymnTitle);

        const hymnLyrics = document.createElement('p');
        hymnLyrics.textContent = hymn.lyrics;
        hymnElement.appendChild(hymnLyrics);

        hymnList.appendChild(hymnElement);
    });
});

