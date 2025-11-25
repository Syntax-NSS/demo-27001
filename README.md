# Sistema de Gestión ISO 27001 / ISO 20000-1

Sistema completo de gestión de calidad para certificaciones ISO 27001 (Seguridad de la Información) e ISO 20000-1 (Gestión de Servicios TI). Aplicación web funcional construida con HTML, CSS y JavaScript vanilla, sin dependencias externas.

## 🚀 Características

- ✅ **100% Frontend** - Sin base de datos ni backend requerido
- 💾 **LocalStorage** - Persistencia de datos en el navegador
- 📱 **Responsive** - Diseño adaptable a móviles y tablets
- 🎨 **Interfaz moderna** - Diseño limpio estilo Syntax
- ⚡ **Sin dependencias** - JavaScript vanilla puro
- 🔄 **CRUD completo** - Crear, leer, actualizar y eliminar en todos los módulos

## 📋 Módulos Funcionales

### 1. Dashboard Principal
- Vista general del sistema
- Estadísticas en tiempo real
- Acceso rápido a todos los módulos

### 2. Plan de Acciones Correctivas (PAC)
- ✅ Crear, editar y eliminar acciones correctivas
- 📊 Seguimiento de progreso con barra visual
- 🔍 Filtros por estado, prioridad y responsable
- 📅 Control de plazos y fechas

### 3. Quejas y Reclamaciones
- ✅ Gestión completa de quejas de clientes
- ⚠️ Clasificación por gravedad (Alta, Media, Baja)
- 📈 Estadísticas de tiempo medio de resolución
- 🔄 Estados: Abierta, En progreso, Resuelta, Cerrada

### 4. Indicadores de Proceso (KPIs)
- 📊 Visualización de indicadores clave
- 🎯 Comparación con metas establecidas
- 📈 Tendencias (arriba, abajo, estable)
- 🚦 Estados: En meta, En alerta, Crítico

### 5. Pruebas de Continuidad
- 📅 Calendario de pruebas anuales
- ✅ Seguimiento de pruebas completadas y planificadas
- 📝 Registro de resultados, hallazgos y lecciones aprendidas
- 📊 Tasa de éxito calculada automáticamente

## 📁 Estructura del Proyecto

```
DIUSFRAMI/
├── index.html                 # Página principal / landing
├── README.md                  # Este archivo
│
├── css/
│   ├── global.css            # Estilos globales y variables CSS
│   └── components.css        # Estilos de componentes reutilizables
│
├── js/
│   ├── storage.js            # Gestión de LocalStorage y datos
│   └── components.js         # Componentes UI reutilizables
│
├── pages/
│   ├── dashboard.html        # Dashboard principal
│   ├── pac.html             # Plan de Acciones Correctivas
│   ├── quejas.html          # Quejas y Reclamaciones
│   ├── indicadores.html     # Indicadores de Proceso
│   └── pruebas-continuidad.html  # Pruebas de Continuidad
│
├── data/                     # (Opcional) Para archivos JSON locales
└── assets/                   # (Opcional) Imágenes y recursos
```

## 🛠️ Instalación y Uso

### Opción 1: Servidor HTTP Simple con Python

Si tienes Python instalado:

```bash
# Python 3
cd D:\NSS\DIUSFRAMI
python -m http.server 8000

# Python 2 (legacy)
python -m SimpleHTTPServer 8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 2: Live Server (VS Code)

1. Instala la extensión "Live Server" en VS Code
2. Abre la carpeta del proyecto en VS Code
3. Click derecho en `index.html` → "Open with Live Server"
4. Se abrirá automáticamente en `http://127.0.0.1:5500`

### Opción 3: Servidor HTTP con Node.js

Si tienes Node.js instalado:

```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar servidor
cd D:\NSS\DIUSFRAMI
http-server -p 8000
```

Abre: `http://localhost:8000`

### Opción 4: Abrir directamente (limitado)

⚠️ **No recomendado**: Puedes abrir `index.html` directamente en el navegador, pero algunas funcionalidades pueden no funcionar correctamente debido a restricciones CORS.

## 📚 Guía de Uso

### Primera Ejecución

1. **Datos Mock**: La primera vez que accedes, se cargan automáticamente datos de ejemplo (mock data) en LocalStorage
2. **Navegación**: Usa el sidebar izquierdo para navegar entre módulos
3. **Dashboard**: Visualiza estadísticas generales de todos los módulos

### Gestión de PAC (Acciones Correctivas)

#### Crear Nueva Acción:
1. Ve a "Plan de Acciones Correctivas"
2. Click en "+ Nueva acción correctiva"
3. Completa el formulario:
   - **Descripción** (obligatorio): Breve descripción de la acción
   - **Origen** (obligatorio): Auditoría, Revisión, Incidente, etc.
   - **Prioridad** (obligatorio): Alta, Media, Baja
   - **Responsable** (obligatorio): Nombre de la persona asignada
   - **Fechas** (obligatorio): Inicio y límite
   - **Progreso**: Porcentaje de avance (0-100%)
   - **Estado**: Pendiente, En progreso, En revisión, Cerrada
4. Click en "Guardar"

#### Editar Acción:
- Click en el botón ✏️ (editar) en la fila correspondiente
- Modifica los campos necesarios
- Guardar cambios

#### Eliminar Acción:
- Click en el botón 🗑️ (eliminar)
- Confirma la eliminación

#### Filtrar Acciones:
- Usa los filtros en la parte superior:
  - Por estado
  - Por prioridad
  - Por responsable
  - Búsqueda por texto

### Gestión de Quejas y Reclamaciones

Sigue un flujo similar al PAC:

1. **Crear queja**: "+ Nueva queja/reclamación"
2. **Datos requeridos**:
   - Cliente
   - Servicio afectado
   - Descripción detallada
   - Gravedad (Alta, Media, Baja)
   - Responsable de atención
   - Fechas (registro y límite)
3. **Estados**:
   - **Abierta**: Recién registrada
   - **En progreso**: En proceso de resolución
   - **Resuelta**: Resolución propuesta
   - **Cerrada**: Caso cerrado
4. **Estadísticas**: Panel superior muestra métricas en tiempo real

### Indicadores de Proceso

- **Visualización**: Tarjetas con valor actual, meta y tendencia
- **Estados automáticos**:
  - 🟢 **En meta**: Cumple el objetivo
  - 🟠 **En alerta**: Cerca del umbral
  - 🔴 **Crítico**: Por debajo de la meta
- **Filtros**: Por proceso, periodo y estado
- **Gráficos**: Representación visual de tendencias

### Pruebas de Continuidad

- **Timeline visual**: Muestra todas las pruebas en orden cronológico
- **Estados**:
  - ✅ **Completada**: Prueba realizada
  - ⏰ **Próxima**: Programada próximamente
  - ○ **Planificada**: Programada a futuro
- **Resultados**:
  - **Exitosa**: Prueba sin incidencias
  - **Parcial**: Exitosa con observaciones
  - **Fallida**: Requiere correcciones
- **Resumen**: 4 tarjetas con estadísticas clave

## 💾 Gestión de Datos

### LocalStorage

Todos los datos se almacenan en el navegador usando LocalStorage:

```javascript
// Las entidades se guardan con estas claves:
localStorage.setItem('pac', JSON.stringify(data));
localStorage.setItem('quejas', JSON.stringify(data));
localStorage.setItem('indicadores', JSON.stringify(data));
localStorage.setItem('pruebas_continuidad', JSON.stringify(data));
```

### Resetear Datos

Para volver a los datos iniciales (mock data), ejecuta en la consola del navegador:

```javascript
storage.reset();
location.reload();
```

### Exportar Datos

Para hacer backup de tus datos:

```javascript
// En la consola del navegador
const backup = {
    pac: JSON.parse(localStorage.getItem('pac')),
    quejas: JSON.parse(localStorage.getItem('quejas')),
    indicadores: JSON.parse(localStorage.getItem('indicadores')),
    pruebas: JSON.parse(localStorage.getItem('pruebas_continuidad'))
};
console.log(JSON.stringify(backup, null, 2));
// Copia el resultado y guárdalo en un archivo .json
```

### Importar Datos

```javascript
// Pega tu JSON de backup en una variable
const backup = { /* tu backup aquí */ };

// Restaurar
localStorage.setItem('pac', JSON.stringify(backup.pac));
localStorage.setItem('quejas', JSON.stringify(backup.quejas));
localStorage.setItem('indicadores', JSON.stringify(backup.indicadores));
localStorage.setItem('pruebas_continuidad', JSON.stringify(backup.pruebas));

location.reload();
```

## 🎨 Personalización

### Colores

Edita las variables CSS en `css/global.css`:

```css
:root {
    --color-primary: #1e5a8e;        /* Color principal */
    --color-secondary: #2fa5b8;      /* Color secundario */
    --color-success: #27ae60;        /* Verde */
    --color-warning: #f39c12;        /* Naranja */
    --color-danger: #e74c3c;         /* Rojo */
    /* ... más variables ... */
}
```

### Logo

Cambia el logo en el sidebar editando:
- `index.html`: Línea con `<div class="logo">S</div>`
- Reemplaza "S" por tu inicial o añade una imagen

### Datos Mock Iniciales

Edita `js/storage.js`, método `loadMockData()` para cambiar los datos de ejemplo iniciales.

## 🔧 Validaciones

### Formularios

Todos los formularios incluyen validaciones:

- ✅ **Campos requeridos**: Marcados con asterisco (*)
- ✅ **Tipos de datos**: Fechas, números, textos
- ✅ **Rangos**: Progreso entre 0-100%
- ✅ **Mensajes de error**: En rojo bajo cada campo

### Lógica de Negocio

- **IDs automáticos**: Generados automáticamente (PAC-001, QR-001, etc.)
- **Fechas**: Formato ISO (YYYY-MM-DD)
- **Porcentajes**: Validados entre 0 y 100
- **Estados**: Valores predefinidos (dropdown)

## 📱 Responsive

- **Desktop**: Optimizado para pantallas grandes (≥1024px)
- **Tablet**: Adaptado para pantallas medias (768px - 1023px)
- **Mobile**: Funcional en móviles (≤767px)

## 🐛 Solución de Problemas

### Los datos no se guardan

- **Causa**: LocalStorage deshabilitado o navegador en modo incógnito
- **Solución**: Usa modo normal del navegador y habilita LocalStorage

### Página en blanco

- **Causa**: Ruta incorrecta o servidor no iniciado
- **Solución**: Verifica que estés usando un servidor HTTP (no file://)

### Estilos no se cargan

- **Causa**: Rutas relativas incorrectas
- **Solución**: Verifica que la estructura de carpetas sea correcta

### Error de CORS

- **Causa**: Abriste el archivo directamente (file:///)
- **Solución**: Usa un servidor HTTP local

## 🚀 Mejoras Futuras (opcional)

Posibles extensiones del sistema:

- [ ] Autenticación de usuarios
- [ ] Roles y permisos
- [ ] Exportar a PDF
- [ ] Gráficos avanzados con Chart.js
- [ ] Notificaciones por email
- [ ] Sincronización con backend
- [ ] PWA (Progressive Web App)
- [ ] Tema oscuro
- [ ] Multi-idioma

## 📄 Licencia

Este proyecto es una demo educativa. Siéntete libre de usar y modificar el código según tus necesidades.

## 👤 Autor

Sistema desarrollado como aplicación funcional HTML/CSS/JavaScript para gestión de calidad ISO.

---

## 🆘 Soporte

Si encuentras algún problema:

1. Revisa la consola del navegador (F12) para errores
2. Verifica que estés usando un servidor HTTP local
3. Asegúrate de que LocalStorage esté habilitado
4. Revisa la estructura de carpetas

## ✅ Checklist de Verificación

Antes de usar:

- [ ] Servidor HTTP corriendo
- [ ] Navegador moderno (Chrome, Firefox, Edge, Safari)
- [ ] LocalStorage habilitado
- [ ] JavaScript habilitado
- [ ] Estructura de carpetas correcta

¡Disfruta usando el Sistema de Gestión ISO! 🎉
