







####  windows 计算sha256
windowssha256
certutil -hashfile [file] SHA256






#### windows 通过 pid 找到运行程序的路径

运行前修改下方pid为自己要查询的pid号
wmic process get name,executablepath,processid|findstr pid

