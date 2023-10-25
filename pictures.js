let id = 0;
list = [".//1692.png", "./66c21712e3608037bb24dce776bec6f8cab91e54727f424eaa35ee04bbdfa3a5.png", "./f570d07a3c0ab0311e7cca82a375ebc1.png", "./illiustratsiia_k_skazke_teplyi_khleb_dlia_srisovki_3 (1).png"];

function slider (list) {
    document.querySelector('.right').addEventListener('click', function () {
        if (id < list.length - 2) {
            id += 1;
        } else {
            id = 0;
        }
        document.querySelector('#main').src = list[id]
    })
    document.querySelector('.left').addEventListener('click', function () {
        if (id - 1 > 0) {
            id -= 1;
        } else {
            id = list.length - 1;
        }
        
        console.log(list[id])
        document.querySelector('#main').src = list[id];
    })
}
slider(list)