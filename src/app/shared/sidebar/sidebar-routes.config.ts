import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/reservas', title: 'Reservas', icon: 'ft-calendar',
        class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/reservacion', title: 'Reservación', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/planning', title: 'Planning', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '/checkin', title: 'Check In', icon: 'ft-log-in',
        class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/checkout', title: 'Check Out', icon: 'ft-log-out',
        class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/cuenta', title: 'Cuenta Huesped', icon: 'ft-user-check',
        class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/caja', title: 'Caja Recepción', icon: 'ft-credit-card',
        class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/inventarios', title: 'Inventarios', icon: 'ft-package',
        class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/reportes', title: 'Reportes', icon: 'ft-layers',
        class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/partespoliciales', title: 'Partes Policiales', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },

];
