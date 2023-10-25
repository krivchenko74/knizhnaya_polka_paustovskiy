let id = 0;
list1 = ['image 18.png', 'image 15.png', 'image 13.png', 'image 16.png', 'image 17.png', 'image 19.png', 'image 20.png'];
list2 = ['К.Г. Паустовский на Южном фронте. 1941 г.', 'К.Г.Паустовский и В.В.Навашина-Паустовская. Конец 1930-х годов', 'К.Г.Паустовский и В.В.Навашина-Паустовская. Солотча. Конец 1930-х годов', 'Константин Паустовский. 1930-е годы', 'К.Г.Паустовский у любимого им "паровоза-самовара". Конец 1930-х годов', 'К.Г.Паустовский с женой Татьяной Алексеевной Арбузовой. Таруса, 1958 г.', 'К.Г. Паустовский с Ваней. Таруса. Зима 1957г.'];
function slider (list1, list2) {
    document.querySelector('.right').addEventListener('click', function () {
        if (id < list1.length - 1) {
            id += 1;
        } else {
            id = 0;
        }
        document.querySelector('#main').src = list1[id];
        document.querySelector('#desc').innerText = list2[id];

    })
    document.querySelector('.left').addEventListener('click', function () {
        if (id > 0) {
            id -= 1;
        } else {
            id = list1.length - 1;
        }
        document.querySelector('#main').src = list1[id];
        document.querySelector('#desc').innerText = list2[id];
    })
}
slider(list1, list2)