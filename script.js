function showToast(type, title, message) {
    const toastContainer = document.getElementById('toast-container');
    const toastTemplate = document.getElementById('toast-template');

    const toast = toastTemplate.cloneNode(true);
    toast.id = '';
    toast.classList.add(type);

    const toastIconImg = toast.querySelector('#toast-icon-img');
    const toastTitle = toast.querySelector('#toast-title');
    const toastBody = toast.querySelector('#toast-body');
    const toastExit = toast.querySelector('#toast-exit');

    const iconMap = {
        info: './image/info.png',
        success: './image/success.png',
        warning: './image/warning.png',
        error: './image/error.png'
    };
    toastIconImg.src = iconMap[type];
    toastTitle.textContent = title;
    toastBody.textContent = message;

    toast.style.display = 'flex';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-110%)';

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
        setTimeout(() => {
            toast.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
            toast.style.transform = 'translateX(15%)';
            toast.style.opacity = '1';
        }, 300);

        setTimeout(() => {
            toast.style.transform = 'translateX(0%)';
            toast.classList.add('toast-visible');
        }, 600);
    });

    toastExit.onclick = () => closeToast(toast);

    setTimeout(() => closeToast(toast), 7000);
}

function closeToast(toast) {
    toast.style.opacity = '0';
    setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
}