const ICONS = {
  success: '✔️',
  error: '❌',
  info: 'ℹ️',
  warning: '⚠️',
};

(function injectStyles() {
  if (document.getElementById('better-popup-style')) return;

  const style = document.createElement('style');
  style.id = 'better-popup-style';
  style.textContent = `
    .better-popup-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      pointer-events: none;
    }

    .better-popup {
      pointer-events: auto;
      background: #fff;
      padding: 20px 24px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      min-width: 280px;
      max-width: 90%;
      text-align: center;
      position: relative;
      transform: scale(0.85);
      opacity: 0;
      animation: popupIn 0.35s ease forwards;
      font-family: 'Segoe UI', sans-serif;
    }

    @keyframes popupIn {
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes popupOut {
      to {
        opacity: 0;
        transform: scale(0.85);
      }
    }

    .popup-icon {
      font-size: 32px;
      margin-bottom: 8px;
    }

    .popup-message {
      font-size: 16px;
      color: #333;
      margin-bottom: 12px;
    }

    .popup-close {
      position: absolute;
      top: 8px;
      right: 12px;
      background: none;
      border: none;
      font-size: 18px;
      color: #aaa;
      cursor: pointer;
    }

    .popup-bar {
      height: 3px;
      background: #4caf50;
      position: absolute;
      bottom: 0;
      left: 0;
      animation: popupBar linear forwards;
    }

    .success .popup-bar { background: #4CAF50; }
    .error .popup-bar { background: #E74C3C; }
    .info .popup-bar { background: #3498DB; }
    .warning .popup-bar { background: #F39C12; }

    @keyframes popupBar {
      from { width: 100%; }
      to { width: 0%; }
    }
  `;
  document.head.appendChild(style);
})();

export function showPopup({
  type = 'info',
  message = 'Something happened!',
  duration = 3000,
  showClose = true,
}) {
  const overlay = document.createElement('div');
  overlay.className = 'better-popup-overlay';

  const popup = document.createElement('div');
  popup.className = `better-popup ${type}`;

  const icon = document.createElement('div');
  icon.className = 'popup-icon';
  icon.textContent = ICONS[type] || ICONS.info;

  const msg = document.createElement('div');
  msg.className = 'popup-message';
  msg.textContent = message;

  const bar = document.createElement('div');
  bar.className = 'popup-bar';
  bar.style.animationDuration = `${duration}ms`;

  if (showClose) {
    const btn = document.createElement('button');
    btn.className = 'popup-close';
    btn.innerHTML = '&times;';
    btn.onclick = () => close();
    popup.appendChild(btn);
  }

  popup.appendChild(icon);
  popup.appendChild(msg);
  popup.appendChild(bar);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  function close() {
    popup.style.animation = 'popupOut 0.3s ease forwards';
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 300);
  }

  setTimeout(() => close(), duration);
}
