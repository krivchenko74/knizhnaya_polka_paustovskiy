window.onload = function () {
    console.log(window.innerWidth)
    if (window.innerWidth < 1100) {

        alert(`Данный тип экрана пока не поддерживается, рекомендуем использовать ПК или ноутбук, с разрешением экрана не меньше 1440 пискелей в ширину. Ширина вашего: ${window.innerWidth} пикселей`)
        console.log('сработало')
    }
    else {
        document.querySelector('body').style.display = 'block';
    }
}
