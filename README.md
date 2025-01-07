# WSApp Linux

**WhatsApp Linux** es una aplicación para acceder a **WhatsApp Web** de manera rápida y optimizada en tu sistema **Linux**. Esta aplicación es un puerto de la versión web de WhatsApp, empaquetado como una aplicación nativa, que te permite acceder a WhatsApp Web desde una interfaz dedicada, sin necesidad de usar un navegador.

## Características

- Acceso rápido y fluido a **WhatsApp Web**.
- Soporte para empaquetado en formatos nativos de Linux: `.deb`, `.AppImage`, `.snap`.
- Minimalista, optimizada para entornos de escritorio Linux.
- Icono en la bandeja del sistema con la opción de minimizar la ventana.

- **Futuro soporte para notificaciones**: Recibe notificaciones de nuevos mensajes, incluso cuando la aplicación esté en segundo plano.

## Instalación

### **Instalación en Ubuntu (Debian-based)**

1. Descarga el archivo `.deb` de la sección de [Releases](https://github.com/rottioris/WhatsApp-Linux/releases).
   
2. Instala el paquete `.deb` usando el siguiente comando:

    ```bash
    sudo dpkg -i wsapp-linux-1.0.0.deb
    ```

3. Si el sistema reporta dependencias faltantes, puedes solucionarlo con:

    ```bash
    sudo apt-get install -f
    ```

4. Después de la instalación, busca "WSApp Linux" en tu menú de aplicaciones o ejecuta el siguiente comando:

    ```bash
    wsapp-linux
    ```

### **Instalación usando AppImage (distribución universal)**

1. Descarga el archivo `.AppImage` de la sección de [Releases](https://github.com/tu-usuario/wsapp-linux/releases).
   
2. Haz que el archivo sea ejecutable:

    ```bash
    chmod +x wsapp-linux-1.0.0.AppImage
    ```

3. Ejecuta la aplicación con:

    ```bash
    ./wsapp-linux-1.0.0.AppImage
    ```

### **Instalación usando Snap**

1. Descarga el archivo `.snap` de la sección de [Releases](https://github.com/tu-usuario/wsapp-linux/releases).
   
2. Instala el paquete snap:

    ```bash
    sudo snap install wsapp-linux-1.0.0.snap --dangerous
    ```

3. Una vez instalado, puedes iniciar la aplicación con el siguiente comando:

    ```bash
    wsapp-linux
    ```

## Uso

1. Después de abrir la aplicación, se mostrará la interfaz de **WhatsApp Web**.
2. Escanea el código QR con tu teléfono para iniciar sesión.
3. Una vez logueado, podrás usar WhatsApp Web como en el navegador.

## Desarrollado con

- **Electron**: Para empaquetar la aplicación como un ejecutable nativo.
- **Node.js**: Para la lógica de la aplicación.
- **WhatsApp Web**: Acceso a la versión oficial de WhatsApp Web.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios.
4. Haz un commit (`git commit -am 'Añadir nueva característica'`).
5. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
6. Crea un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, revisa el archivo [LICENSE](LICENSE).
