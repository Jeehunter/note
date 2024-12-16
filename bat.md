

#### 打印所有环境变量
//
Get-ChildItem Env:


Get-ChildItem Env:APPDATA




####  windows 计算sha256
windowssha256
certutil -hashfile [file] SHA256






#### windows 通过 pid 找到运行程序的路径

运行前修改下方pid为自己要查询的pid号
wmic process get name,executablepath,processid|findstr pid


二、创建自签名证书（用于测试）
使用 PowerShell 创建自签名证书
打开 PowerShell（以管理员身份运行）：

输入以下命令创建证书：

powershell
$cert = New-SelfSignedCertificate -Type CodeSigningCert -Subject "CN=MyTestCertificate" -CertStoreLocation "Cert:\CurrentUser\My"  
参数说明：
-Type CodeSigningCert：指定证书类型为代码签名。
-Subject "CN=MyTestCertificate"：证书的名称，可根据需要更改。
-CertStoreLocation "Cert:\CurrentUser\My"：存储位置。
导出证书为 PFX 文件：

powershell
Export-PfxCertificate -Cert $cert -FilePath "C:\Path\To\MyTestCertificate.pfx" -Password (ConvertTo-SecureString -String "YourPassword" -Force -AsPlainText)  
参数说明：
-Cert $cert：指定要导出的证书。
-FilePath：导出文件路径。
-Password：为 PFX 文件设置密码。

