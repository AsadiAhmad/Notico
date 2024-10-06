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
            info: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LmE4ZDQ3NTM0OSwgMjAyMy8wMy8yMy0xMzowNTo0NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI0M0VCRUIxODBGNzExRUY4NzRERThCRjZFRkVEMzA5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI0M0VCRUIyODBGNzExRUY4NzRERThCRjZFRkVEMzA5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjQzRUJFQUY4MEY3MTFFRjg3NERFOEJGNkVGRUQzMDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjQzRUJFQjA4MEY3MTFFRjg3NERFOEJGNkVGRUQzMDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IpnoOAAAMpUlEQVR42uxd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',
            success: 'data:image/png;base64,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',
            warning: 'data:image/png;base64,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',
            error: 'data:image/png;base64,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'
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