import { app, BrowserWindow } from 'electron';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const isDev = !app.isPackaged && process.env.NODE_ENV !== 'production';

const createWindow = () => {
  const win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: join(__dirname, '../preload/preload.js'),
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    const indexPath = join(__dirname, '../renderer/index.html');
    win.loadFile(indexPath);
  }
};

app.whenReady().then(createWindow);
