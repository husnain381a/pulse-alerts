# pulse-alerts by Husnain Mazhar  
*Simple, beautiful, animated popup notification utility for React and JavaScript.*

---

## Install

```bash
npm install pulse-alerts
```

---

## Usage

```js
import { showPopup } from 'pulse-alerts';

showPopup({
  type: 'success',           // 'success' | 'error' | 'info' | 'warning'
  message: 'Operation done!',
  duration: 3000,            // popup auto closes after 3000ms
  showClose: true            // show close (×) button, optional
});
```

---
