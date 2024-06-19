

document.addEventListener('DOMContentLoaded', () => {
    const getSongsBtn = document.getElementById('get-songs');

    const findSongs = async () => {
        try {
            const response = await fetch('/audio');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    const displaySongs = (data) => {
        const songs = data.result;
        const emptyBox = document.getElementById('empty');
        const songsListHtml = '<ul class="songs__list"></ul>'
        emptyBox.insertAdjacentHTML('afterend', songsListHtml);
        emptyBox.remove();

        let audiosHtml = '';
        songs.forEach(song => {
            const sourseHtml = `<source src="${song.path}" type="audio/mpeg">`
            const audioHtml = `<label><audio controls>${sourseHtml}</audio>${song.name}</label>`
            const liHtml = `<li class="song__item">${audioHtml}</li>`;
            audiosHtml += liHtml;
        });
        const songsListElem = document.querySelector('.songs__list');
        songsListElem.insertAdjacentHTML('afterbegin', audiosHtml);
    };

    const clickHandler = async () => {
        const data = await findSongs();
        displaySongs(data);
    };

    getSongsBtn.addEventListener('click', clickHandler);
});
