```
function preloadClearWebdriver(): void {
    Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined,
    });
}

/**
 * Launch the specified browser with remote debugging enabled
 *
 * @param browserPath The path of the browser to launch
 * @param port The port on which to enable remote debugging
 * @param targetUrl The url of the page to open
 * @param userDataDir The user data directory for the launched instance
 */
export async function launchBrowser(browserPath: string, port: number, targetUrl: string, userDataDir?: string): Promise<puppeteer.Browser> {
    const args = [
        '--no-first-run',
        '--no-default-browser-check',
        `--remote-debugging-port=${port}`,
        targetUrl,
    ];

    const headless: boolean = isHeadlessEnabled();

    let browserArgs: string[] = getBrowserArgs();
    browserArgs = browserArgs.filter(arg => !arg.startsWith('--remote-debugging-port') && arg !== targetUrl);

    // There is a possibility that the connection to the login plug-in fails due to the code.
    if (userDataDir) {
        args.unshift(`--user-data-dir=${userDataDir}`);
        browserArgs = browserArgs.filter(arg => !arg.startsWith('--user-data-dir'));
    }

    if (browserArgs.length) {
        args.unshift(...browserArgs);
    }

// ignoreDefalutArgs ： ignore browsers default settings. 忽略浏览器默认的设置。
    const browserInstance = await puppeteer.launch({ executablePath: browserPath, args, headless, ignoreDefaultArgs: ['--hide-scrollbars'] });

// 提前注入，清空webdriver信息。防止部分网页的webdriver的探测
    await (await browserInstance.pages())[0].evaluateOnNewDocument(preloadClearWebdriver);

    return browserInstance;
}

```

```
  // 当页面DOMContentLoaded 已被触发时触发。
  // 关于内部页面缩放问题，可以通过expression传递缩放值，让页面来缩放。（webdriver的情况下无法拿到当前主屏幕的缩放值，需要手动传递）
        this.cdpConnection.registerForEvent('Page.domContentEventFired', result => {
            const scale = window.devicePixelRatio;
            this.cdpConnection.sendMessageToBackend('Runtime.evaluate', {
                expression: `document.body.style.zoom='${scale}'`
            }, undefined, true);

// 读取粘贴板
        this.cdpConnection.registerForEvent('readClipboard', clipboardContents => this.pasteClipboardContents(clipboardContents));

// 页面跳转
        this.cdpConnection.sendMessageToBackend('Page.navigate', { url });

// 截屏录屏获取：
    private updateScreencast(): void {
        const screencastParams = {
            format: 'png',
            quality: 100,
            maxWidth: Math.floor(this.emulatedWidth * window.devicePixelRatio),
            maxHeight: Math.floor(this.emulatedHeight * window.devicePixelRatio)
        };
        this.cdpConnection.sendMessageToBackend('Page.startScreencast', screencastParams);
    }
```


