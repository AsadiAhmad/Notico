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
        error:   './image/error.png'
    };
  
    toastIconImg.src = iconMap[type];
    toastTitle.textContent = title;
    toastBody.textContent = message;
  
    toast.style.display = 'flex';
  
    toastExit.onclick = () => {
      toastContainer.removeChild(toast);
    };
  
    toastContainer.appendChild(toast);
  
    setTimeout(() => {
      toast.style.display = 'none';
      toastContainer.removeChild(toast);
    }, 7000);
  }
  