const board = document.getElementById('jsBoard');

function paintCard(champion) {
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.src = champion.imageUrl;
    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = champion.name;
    card.append(img);
    card.append(name);
    board.append(card);
}

async function getData() {
    let parsedArr = [];
    await fetch('http://ddragon.leagueoflegends.com/cdn/11.4.1/data/ko_KR/champion.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            const championObjs = json.data;
            for (let obj in championObjs) {
                const newObj = {
                    name: championObjs[obj].name,
                    imageUrl: `http://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${championObjs[obj].image.full}`,
                };
                parsedArr.push(newObj);
            }
        });
    parsedArr.forEach((ele) => {
        paintCard(ele);
    });
}

function init() {
    getData();
}

init();
