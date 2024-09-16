#### 安装or启动调试
--verbose

#### 安装日志
setup.exe /LOG="filename.log"
获取日志

#### vscode linux可能需要的依赖
aptitude install -y build-essential g++ libx11-dev libxkbfile-dev libsecret-1-dev libkrb5-dev python-is-python3 pkg-config fakeroot

#### electron cache
https://www.bookstack.cn/read/Electron-15.0-zh/e53c490d348e8b0f.md

Linux: $XDG_CACHE_HOME or ~/.cache/electron/
macOS: ~/Library/Caches/electron/
Windows: $LOCALAPPDATA/electron/Cache or ~/AppData/Local/electron/Cache/

安装electron 
set ELECTRON_MIRROR=xxxx    electron
set ELECTRON_CUSTOM_DIR=25.9.7  要替换的版本
npm install electron的过程中，会生成这个缓存目录
我们可以在缓存目录里找需要替换的版本，例如25.9.7

#### GUID 全球唯一标识符
 [guid]::NewGuid().ToString()   --powershell


 #### docker
 build
docker build -t arm64:v8-18.04.02 .
scp到堡垒机
然后堡垒机scp到x86构建机

docker引入

 docker save arm64v8:18.04.02 | gzip > arm64v8-18.04.02.tar.gz
 docker load -i ubuntu-20.04_arm64v8.tar 


docker import arm64v8-18.04.02.tar.gz url
docker push  url

docker 更改标签
 docker tag ubuntu:20.04.01  url

 https://blog.csdn.net/bocai_xiaodaidai/article/details/92838004


 #### icon

我们只做独立子客户端形态，每个子客户端有其自己的logo。我们在构建脚本中，依据构建产品的不同，打入不同的子产品图标。

 

其中ico图标的制作流程，记录一下：

 

首先，检查UCD出图质量，如果原图质量一般（锯齿，模糊，位深度低，偏移）等，那么在实际产物中，图标情况只能会更糟（因为用户环境的分辨率，屏幕缩放比例等）；

 

windows应用程序的ico是由多种分辨率的位图合成的，我们依据旧基座的logo，拆包可知有8张图：
 https://redketchup.io/icon-editor

我们收到质量ok的这八张图后，开始合成：

可以使用工具ImageMagick – Download来合成ico。

https://imagemagick.org/script/download.php


cli：

magick convert -depth 32 .\16x16.bmp .\20x20.bmp .\24x24.bmp .\32x32.bmp .\40x40.bmp .\48x48.bmp .\64x64.bmp .\256.png  icon.ico
