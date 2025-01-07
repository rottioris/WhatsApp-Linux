const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');

let mainWindow;
let tray = null;

app.on('ready', () => {
    // Crear la ventana principal
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    // Configurar el User Agent para compatibilidad con WhatsApp Web
    mainWindow.webContents.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
    );

    // Cargar WhatsApp Web
    mainWindow.loadURL('https://web.whatsapp.com');

    // Minimizar a la bandeja del sistema
    tray = new Tray(path.join(__dirname, 'icon.png')); // Icono de la bandeja
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Abrir', click: () => mainWindow.show() },
        { label: 'Salir', click: () => app.quit() },
    ]);
    tray.setToolTip('WsApp - WhatsApp Web para Linux');
    tray.setContextMenu(contextMenu);

    // Evento para minimizar la ventana a la bandeja
    mainWindow.on('minimize', (event) => {
        event.preventDefault();
        mainWindow.hide();
    });

    // Restaurar ventana al hacer clic en el icono de la bandeja
    tray.on('click', () => {
        if (mainWindow.isVisible()) {
            mainWindow.hide();
        } else {
            mainWindow.show();
        }
    });

    // Cerrar completamente al salir
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit();
    });
});
