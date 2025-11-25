/**
 * Sistema de gestión de datos con LocalStorage
 * Maneja CRUD de todas las entidades del sistema
 */

class StorageManager {
    constructor() {
        this.initializeData();
    }

    /**
     * Inicializa los datos mock si no existen
     */
    initializeData() {
        if (!localStorage.getItem('iso_initialized')) {
            this.loadMockData();
            localStorage.setItem('iso_initialized', 'true');
        }
    }

    /**
     * Carga datos mock iniciales
     */
    loadMockData() {
        // PAC - Plan de Acciones Correctivas
        const pac = [
            {
                id: 'PAC-001',
                descripcion: 'Actualizar política de contraseñas según ISO 27001',
                origen: 'Auditoría Interna',
                prioridad: 'alta',
                responsable: 'Juan Pérez',
                fechaInicio: '2024-10-15',
                fechaLimite: '2024-11-30',
                progreso: 75,
                estado: 'en_progreso',
                acciones: 'Revisar política actual, actualizar documento, comunicar cambios',
                fechaCreacion: '2024-10-15'
            },
            {
                id: 'PAC-002',
                descripcion: 'Revisar y actualizar plan de continuidad de negocio',
                origen: 'Revisión Gerencia',
                prioridad: 'alta',
                responsable: 'María García',
                fechaInicio: '2024-10-20',
                fechaLimite: '2024-12-15',
                progreso: 45,
                estado: 'en_progreso',
                acciones: 'Actualizar procedimientos de backup, revisar contactos de emergencia',
                fechaCreacion: '2024-10-20'
            },
            {
                id: 'PAC-003',
                descripcion: 'Implementar controles de acceso físico en sala de servidores',
                origen: 'Incidente Seguridad',
                prioridad: 'media',
                responsable: 'Carlos López',
                fechaInicio: '2024-10-25',
                fechaLimite: '2024-12-20',
                progreso: 30,
                estado: 'en_progreso',
                acciones: 'Instalar control biométrico, actualizar registros de acceso',
                fechaCreacion: '2024-10-25'
            },
            {
                id: 'PAC-004',
                descripcion: 'Corregir deficiencias en el proceso de gestión de cambios',
                origen: 'Auditoría Externa',
                prioridad: 'media',
                responsable: 'Ana Martínez',
                fechaInicio: '2024-11-01',
                fechaLimite: '2025-01-10',
                progreso: 15,
                estado: 'pendiente',
                acciones: 'Revisar procedimiento, capacitar al personal, implementar mejoras',
                fechaCreacion: '2024-11-01'
            },
            {
                id: 'PAC-005',
                descripcion: 'Actualizar matriz de riesgos con amenazas identificadas',
                origen: 'Revisión Anual',
                prioridad: 'alta',
                responsable: 'Luis Fernández',
                fechaInicio: '2024-11-05',
                fechaLimite: '2024-11-30',
                progreso: 90,
                estado: 'revision',
                acciones: 'Identificar nuevas amenazas, evaluar impacto, definir controles',
                fechaCreacion: '2024-11-05'
            }
        ];

        // Quejas y Reclamaciones
        const quejas = [
            {
                id: 'QR-024',
                fechaRegistro: '2024-11-20',
                cliente: 'TechCorp S.A.',
                servicio: 'Servicio de Hosting',
                descripcion: 'Caída prolongada del servicio durante fin de semana',
                gravedad: 'alta',
                responsable: 'Carlos Ruiz',
                estado: 'abierta',
                fechaLimite: '2024-11-25',
                resolucion: '',
                fechaCreacion: '2024-11-20'
            },
            {
                id: 'QR-023',
                fechaRegistro: '2024-11-18',
                cliente: 'Innovatech',
                servicio: 'Soporte Técnico',
                descripcion: 'Tiempo de respuesta excesivo en tickets críticos',
                gravedad: 'media',
                responsable: 'Ana López',
                estado: 'en_progreso',
                fechaLimite: '2024-11-28',
                resolucion: 'Se ha asignado personal adicional al equipo de soporte',
                fechaCreacion: '2024-11-18'
            },
            {
                id: 'QR-022',
                fechaRegistro: '2024-11-15',
                cliente: 'Global Systems',
                servicio: 'Gestión de Cambios',
                descripcion: 'Cambio no comunicado que afectó operaciones',
                gravedad: 'alta',
                responsable: 'María Sánchez',
                estado: 'en_progreso',
                fechaLimite: '2024-11-22',
                resolucion: 'Implementando nuevo proceso de notificación de cambios',
                fechaCreacion: '2024-11-15'
            },
            {
                id: 'QR-021',
                fechaRegistro: '2024-11-12',
                cliente: 'DataSoft Inc.',
                servicio: 'Backup y Recuperación',
                descripcion: 'Fallo en restauración de backup crítico',
                gravedad: 'alta',
                responsable: 'Pedro García',
                estado: 'abierta',
                fechaLimite: '2024-11-19',
                resolucion: '',
                fechaCreacion: '2024-11-12'
            }
        ];

        // Indicadores de Proceso
        const indicadores = [
            {
                id: 'IND-001',
                titulo: 'Tiempo medio de resolución de incidentes',
                proceso: 'Gestión de Incidentes',
                valorActual: '2.3h',
                meta: '≤ 4 horas',
                unidad: 'horas',
                estado: 'en_meta',
                tendencia: 'up',
                tendenciaValor: '15%',
                periodo: '2024-11',
                descripcion: 'Tiempo promedio desde la apertura hasta el cierre de incidentes',
                fechaActualizacion: '2024-11-25'
            },
            {
                id: 'IND-002',
                titulo: 'Disponibilidad de servicios críticos',
                proceso: 'Gestión de Servicios',
                valorActual: '99.7%',
                meta: '≥ 99.5%',
                unidad: 'porcentaje',
                estado: 'en_meta',
                tendencia: 'stable',
                tendenciaValor: '0%',
                periodo: '2024-11',
                descripcion: 'Porcentaje de tiempo que los servicios críticos están disponibles',
                fechaActualizacion: '2024-11-25'
            },
            {
                id: 'IND-003',
                titulo: 'Cambios implementados sin incidentes',
                proceso: 'Gestión de Cambios',
                valorActual: '88%',
                meta: '≥ 95%',
                unidad: 'porcentaje',
                estado: 'alerta',
                tendencia: 'down',
                tendenciaValor: '7%',
                periodo: '2024-11',
                descripcion: 'Porcentaje de cambios que no generaron incidentes',
                fechaActualizacion: '2024-11-25'
            },
            {
                id: 'IND-004',
                titulo: 'Satisfacción del cliente',
                proceso: 'Gestión de Calidad',
                valorActual: '4.6/5',
                meta: '≥ 4.5/5',
                unidad: 'puntos',
                estado: 'en_meta',
                tendencia: 'up',
                tendenciaValor: '3%',
                periodo: '2024-11',
                descripcion: 'Calificación promedio de satisfacción de clientes',
                fechaActualizacion: '2024-11-25'
            },
            {
                id: 'IND-005',
                titulo: 'Incidentes de seguridad detectados',
                proceso: 'Gestión de Seguridad',
                valorActual: '8',
                meta: '≤ 5 por mes',
                unidad: 'incidentes',
                estado: 'critico',
                tendencia: 'down',
                tendenciaValor: '60%',
                periodo: '2024-11',
                descripcion: 'Número de incidentes de seguridad detectados en el período',
                fechaActualizacion: '2024-11-25'
            },
            {
                id: 'IND-006',
                titulo: 'Backups completados exitosamente',
                proceso: 'Gestión de Continuidad',
                valorActual: '100%',
                meta: '= 100%',
                unidad: 'porcentaje',
                estado: 'en_meta',
                tendencia: 'stable',
                tendenciaValor: '0%',
                periodo: '2024-11',
                descripcion: 'Porcentaje de backups programados completados sin errores',
                fechaActualizacion: '2024-11-25'
            }
        ];

        // Pruebas de Continuidad
        const pruebasContinuidad = [
            {
                id: 'PC-001',
                titulo: 'Prueba de Restauración de Backup',
                fecha: '2024-01-15',
                descripcion: 'Validación de la restauración completa de backups de sistemas críticos y verificación de integridad de datos.',
                responsable: 'Carlos Ruiz',
                duracion: '4 horas',
                estado: 'completada',
                resultado: 'exitosa',
                hallazgos: 'Todos los sistemas se restauraron correctamente. Se validó la integridad de datos.',
                leccionesAprendidas: 'Documentar mejor el proceso de restauración para reducir tiempos.',
                fechaCreacion: '2024-01-15'
            },
            {
                id: 'PC-002',
                titulo: 'Simulación de Fallo de Centro de Datos Principal',
                fecha: '2024-02-28',
                descripcion: 'Activación del sitio alterno y migración de servicios críticos. Validación de RTO y RPO definidos.',
                responsable: 'María García',
                duracion: '8 horas',
                estado: 'completada',
                resultado: 'exitosa',
                hallazgos: 'El sitio alterno se activó según lo previsto. RTO y RPO cumplidos.',
                leccionesAprendidas: 'Mejorar la comunicación entre equipos durante la activación.',
                fechaCreacion: '2024-02-28'
            },
            {
                id: 'PC-003',
                titulo: 'Prueba de Comunicaciones de Crisis',
                fecha: '2024-04-15',
                descripcion: 'Validación de canales de comunicación alternativos y activación del equipo de gestión de crisis.',
                responsable: 'Ana Martínez',
                duracion: '3 horas',
                estado: 'completada',
                resultado: 'parcial',
                hallazgos: 'Algunos canales alternativos presentaron fallas. Equipo de crisis activado correctamente.',
                leccionesAprendidas: 'Implementar canales de comunicación redundantes adicionales.',
                fechaCreacion: '2024-04-15'
            },
            {
                id: 'PC-004',
                titulo: 'Recuperación de Base de Datos Crítica',
                fecha: '2024-05-20',
                descripcion: 'Prueba de recuperación point-in-time de la base de datos principal y validación de consistencia.',
                responsable: 'Pedro Sánchez',
                duracion: '5 horas',
                estado: 'completada',
                resultado: 'exitosa',
                hallazgos: 'Recuperación exitosa con pérdida mínima de datos (< 5 minutos).',
                leccionesAprendidas: 'Automatizar scripts de validación post-recuperación.',
                fechaCreacion: '2024-05-20'
            },
            {
                id: 'PC-005',
                titulo: 'Simulacro de Ciberataque y Respuesta',
                fecha: '2024-12-10',
                descripcion: 'Prueba de detección, contención y recuperación ante un incidente de seguridad grave. Activación del plan de respuesta.',
                responsable: 'Laura Fernández',
                duracion: '6 horas',
                estado: 'proxima',
                resultado: '',
                hallazgos: '',
                leccionesAprendidas: '',
                fechaCreacion: '2024-11-25'
            },
            {
                id: 'PC-006',
                titulo: 'Prueba de Continuidad de Operaciones Remotas',
                fecha: '2025-01-15',
                descripcion: 'Validación de la capacidad del equipo para operar completamente en remoto durante una emergencia.',
                responsable: 'Javier López',
                duracion: '1 día',
                estado: 'planificada',
                resultado: '',
                hallazgos: '',
                leccionesAprendidas: '',
                fechaCreacion: '2024-11-25'
            }
        ];

        // Guardar en LocalStorage
        localStorage.setItem('pac', JSON.stringify(pac));
        localStorage.setItem('quejas', JSON.stringify(quejas));
        localStorage.setItem('indicadores', JSON.stringify(indicadores));
        localStorage.setItem('pruebas_continuidad', JSON.stringify(pruebasContinuidad));
    }

    /**
     * Obtiene todos los registros de una entidad
     */
    getAll(entity) {
        const data = localStorage.getItem(entity);
        return data ? JSON.parse(data) : [];
    }

    /**
     * Obtiene un registro por ID
     */
    getById(entity, id) {
        const data = this.getAll(entity);
        return data.find(item => item.id === id);
    }

    /**
     * Crea un nuevo registro
     */
    create(entity, data) {
        const items = this.getAll(entity);

        // Generar ID automático
        if (!data.id) {
            const prefix = this.getEntityPrefix(entity);
            const maxId = items.reduce((max, item) => {
                const num = parseInt(item.id.split('-')[1]);
                return num > max ? num : max;
            }, 0);
            data.id = `${prefix}-${String(maxId + 1).padStart(3, '0')}`;
        }

        // Agregar fecha de creación
        data.fechaCreacion = new Date().toISOString().split('T')[0];

        items.push(data);
        localStorage.setItem(entity, JSON.stringify(items));
        return data;
    }

    /**
     * Actualiza un registro existente
     */
    update(entity, id, data) {
        const items = this.getAll(entity);
        const index = items.findIndex(item => item.id === id);

        if (index !== -1) {
            items[index] = { ...items[index], ...data };
            localStorage.setItem(entity, JSON.stringify(items));
            return items[index];
        }
        return null;
    }

    /**
     * Elimina un registro
     */
    delete(entity, id) {
        const items = this.getAll(entity);
        const filteredItems = items.filter(item => item.id !== id);
        localStorage.setItem(entity, JSON.stringify(filteredItems));
        return true;
    }

    /**
     * Filtra registros según criterios
     */
    filter(entity, criteria) {
        const items = this.getAll(entity);
        return items.filter(item => {
            return Object.keys(criteria).every(key => {
                if (!criteria[key]) return true;
                return item[key] && item[key].toString().toLowerCase().includes(criteria[key].toString().toLowerCase());
            });
        });
    }

    /**
     * Obtiene el prefijo según la entidad
     */
    getEntityPrefix(entity) {
        const prefixes = {
            'pac': 'PAC',
            'quejas': 'QR',
            'indicadores': 'IND',
            'pruebas_continuidad': 'PC'
        };
        return prefixes[entity] || 'GEN';
    }

    /**
     * Obtiene estadísticas del dashboard
     */
    getDashboardStats() {
        const pac = this.getAll('pac');
        const quejas = this.getAll('quejas');
        const indicadores = this.getAll('indicadores');
        const pruebas = this.getAll('pruebas_continuidad');

        return {
            pac: {
                activas: pac.filter(p => p.estado === 'en_progreso').length,
                cerradas: pac.filter(p => p.estado === 'cerrada').length,
                pendientes: pac.filter(p => p.estado === 'pendiente').length,
                total: pac.length
            },
            quejas: {
                abiertas: quejas.filter(q => q.estado === 'abierta').length,
                enProgreso: quejas.filter(q => q.estado === 'en_progreso').length,
                resueltas: quejas.filter(q => q.estado === 'resuelta').length,
                total: quejas.length
            },
            indicadores: {
                enMeta: indicadores.filter(i => i.estado === 'en_meta').length,
                enAlerta: indicadores.filter(i => i.estado === 'alerta').length,
                criticos: indicadores.filter(i => i.estado === 'critico').length,
                total: indicadores.length
            },
            pruebas: {
                completadas: pruebas.filter(p => p.estado === 'completada').length,
                planificadas: pruebas.filter(p => p.estado === 'planificada' || p.estado === 'proxima').length,
                total: pruebas.length
            }
        };
    }

    /**
     * Resetea todos los datos a los valores iniciales
     */
    reset() {
        localStorage.removeItem('iso_initialized');
        this.initializeData();
    }
}

// Exportar instancia global
const storage = new StorageManager();
