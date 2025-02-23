# myqr
## QR Code scanner for MikroTik hotspot login

### How to use

1. Add a button in `login.html`:
```html
<button onclick="window.location='https://laksa19.github.io/myqr';">QR Code</button>
```

2. Add the following script in MikroTik via Terminal:
```bash
/ip hotspot walled-garden ip

add action=accept comment="Mikhmon QR Code Scanner" disabled=no dst-host=laksa19.github.io
```

### Powered by [webqr.com](https://webqr.com)

