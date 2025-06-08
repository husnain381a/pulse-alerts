# pulse-alerts by Husnain Mazhar  
*Simple, beautiful, animated popup notifications for React and JavaScript.*

---

## Install

npm install pulse-alerts

---
## Usage

import { showPopup } from 'pulse-alerts';

showPopup({
  type: 'success',           // 'success' | 'error' | 'info' | 'warning'
  message: 'Operation done!',
  duration: 3000,            // popup auto closes after 3000ms
  showClose: true            // show close (×) button, optional
});

---

