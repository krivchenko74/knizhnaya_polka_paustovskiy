$(document).ready(function() {
    $('#form').submit(function (event) {
        errors = []
        event.preventDefault();
        document.querySelector('.confirm p').innerText = 'Ответы отправлены';
        document.querySelector('.confirm').classList.add('yes');
        id = 0;
        if (document.querySelector('input[name="q1"]').value.toLowerCase() == 'вороной') {
            id += 1;
        } else {
            errors.push('1');
        }
        if (document.querySelector('input[name="q2"]').value.toLowerCase() == 'мельник') {
            id += 1;
        } else {
            errors.push('2');
        }
        if (document.querySelector('input[name="q3"]').value.toLowerCase() == 'ну тебя') {
            id += 1;
        } else {
            errors.push('3');
        }
        if (document.querySelector('input[name="q4"]').value.toLowerCase() == 'солдата') {
            id += 1;
        } else {
            errors.push('4');
        }
        if (document.querySelector('input[name="q5"]').value.toLowerCase() == 'сорока') {
            id += 1;
        } else {
            errors.push('5');
        }
        if (document.querySelector('input[name="q6"]').value.toLowerCase() == '100') {
            id += 1;
        } else {
            errors.push('6');
        }
        if (document.querySelector('input[name="q7"]').value.toLowerCase() == 'полынью') {
            id += 1;
        } else {
            errors.push('7');
        }
        if (document.querySelector('input[name="q8"]').value.toLowerCase() == 'к мельнику') {
            id += 1;
        } else {
            errors.push('8');
        }
        if (document.querySelector('input[name="q9"]').value.toLowerCase() == 'в деревне') {
            id += 1;
        } else {
            errors.push('9');
        }
        if (document.querySelector('input[name="q10"]').value.toLowerCase() == 'филька') {
            id += 1;
        } else {
            errors.push('10');
        }
        
        document.querySelector('#good').innerText = `${id}`;
        if (errors.length != 0) {
            document.querySelector('#last').style.display = 'block';
            document.querySelector('#last b').innerText = `${errors.join(', ')}`
        }
        console.log(`Ошиблись в вопросах: ${errors.join(', ')}`)
        document.querySelector('.popup_bg').style.display = 'block';
    })
    
})
