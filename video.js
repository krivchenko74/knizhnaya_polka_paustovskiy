document.querySelector('#video-button').addEventListener('click', function () {
    if (!document.querySelector('.frame-wrapper')) {
        let frame_wrapper = document.createElement('div');
        frame_wrapper.classList.add('frame-wrapper');
        document.querySelector('body').appendChild(frame_wrapper)
        let frame_link = document.createElement('div');
        frame_link.classList.add('frame-link');
        frame_wrapper.appendChild(frame_link);
        let iframe = document.createElement('iframe');
        iframe.setAttribute('width', '560');
        iframe.setAttribute('height', '315');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/t5DjrG1UUzk?si=bsWbB7d7Iv_oYSlU');
        iframe.setAttribute('title', 'YouTube video player');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', '');
        frame_link.appendChild(iframe);
        let img = document.createElement('img');
        img.setAttribute('id', 'close');
        frame_link.appendChild(img)
        img.setAttribute('src', './Close-small (关闭-小).png');
        document.querySelector('#close').addEventListener('click', function () {
            let del = document.querySelector('.frame-wrapper');
            let parent = del.parentNode;
            parent.removeChild(del)
        })
    } 
    
})