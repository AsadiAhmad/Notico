const showToast = {
    createToast({ type, title = type, message = '', time = 7000 }) {
        const style = document.createElement("style");
        style.textContent = `
            .toast-container {
                position: fixed;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                top: 25px;
                left: 25px;
                z-index: 256;
            }
            .toast {
                display: flex;
                position: relative;
                flex-direction: row;
                align-items: center;
                max-width: 400px;
                margin-bottom: 10px;
                padding: 15px;
                color: #fff;
                background-color: rgba(22, 22, 23, 0.8);
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                font-family: 'Arial', sans-serif;
                overflow: hidden;
                opacity: 0;
                transform: translateX(-110%);
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
            .toast-visible {
                opacity: 1;
                transform: translateX(0);
            }
            .toast::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: -1;
                backdrop-filter: saturate(180%) blur(14px);
                -webkit-backdrop-filter: blur(5px);
                border-radius: 8px;
                box-sizing: border-box;
            }
            .toast-icon-img {
                margin-right: 15px;
                width: 35px;
                height: 35px;
            }
            .toast-message {
                flex-grow: 1;
            }
            .toast-title {
                font-weight: bold;
                margin-bottom: 5px;
            }
            .toast-exit {
                cursor: pointer;
                margin-left: 10px;
                font-size: 20px;
            }
        `;
        if (!document.head.contains(style)) {
            document.head.appendChild(style);
        }

        let toastContainer = document.getElementById("toast-container");
        if (!toastContainer) {
            toastContainer = document.createElement("div");
            toastContainer.id = "toast-container";
            toastContainer.className = "toast-container";
            document.body.appendChild(toastContainer);
        }

        const iconMap = {
            info: './image/info.png',
            success: './image/success.png',
            warning: './image/warning.png',
            error: './image/error.png'
        };

        const toastHTML = `
            <div class="toast ${type}">
                <img class="toast-icon-img" src="${iconMap[type]}" alt="Toast icon">
                <div class="toast-message">
                    <div class="toast-title">${title}</div>
                    <div class="toast-body">${message}</div>
                </div>
                <span class="toast-exit">&times;</span>
            </div>
        `;

        const toastElement = document.createElement("div");
        toastElement.innerHTML = toastHTML;
        const toast = toastElement.firstElementChild;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.transform = "translateX(15%)";
            toast.style.opacity = "1";
        }, 100);

        setTimeout(() => {
            toast.style.transform = "translateX(0)";
            toast.classList.add("toast-visible");
        }, 400);

        toast.querySelector(".toast-exit").onclick = () => this.closeToast(toast);

        if (time < 2000) {time = 2000;}
        setTimeout(() => this.closeToast(toast), time);
    },

    closeToast(toast) {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-110%)";
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
    },

    info({ title, message, time }) {
        this.createToast({ type: "info", title, message, time });
    },
    success({ title, message, time }) {
        this.createToast({ type: "success", title, message, time });
    },
    warning({ title, message, time }) {
        this.createToast({ type: "warning", title, message, time });
    },
    error({ title, message, time }) {
        this.createToast({ type: "error", title, message, time });
    }
};