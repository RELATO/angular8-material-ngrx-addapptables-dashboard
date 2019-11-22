import { MenuModel } from '@addapptables/menu';

export const menus: MenuModel[] = [
    {
        id: '1',
        class: 'material-icons',
        value: 'dashboard',
        title: 'menu.dashboard',
        isOpen: false,
        multiOption: false,
        url: '/admin/dashboard',
        exact: true,
    },
    {
        id: '2',
        class: 'material-icons',
        value: 'chrome_reader_mode',
        title: 'menu.forms',
        isOpen: false,
        multiOption: true,
        exact: true,
        children: [
            {
                id: '3',
                value: 'BF',
                title: 'menu.form.basicForm',
                isOpen: false,
                multiOption: false,
                url: '/admin/forms/basic-form',
                exact: true
            },
            {
                id: '4',
                value: 'VF',
                title: 'menu.form.validationForm',
                isOpen: false,
                multiOption: false,
                url: '/admin/forms/validation-form',
                exact: true
            },
            {
                id: '5',
                value: 'WF',
                title: 'menu.form.wizardForm',
                isOpen: false,
                multiOption: false,
                url: '/admin/forms/wizard-form',
                exact: true
            }
        ]
    },
    {
        id: '6',
        class: 'material-icons',
        value: 'view_quilt',
        title: 'menu.components.title',
        isOpen: false,
        multiOption: true,
        exact: true,
        children: [
            {
                id: '7',
                value: 'BT',
                title: 'menu.components.buttons',
                isOpen: false,
                multiOption: false,
                url: '/admin/components/buttons',
                exact: true
            },
            {
                id: '8',
                value: 'CD',
                title: 'menu.components.cards',
                isOpen: false,
                multiOption: false,
                url: '/admin/components/cards',
                exact: true
            },
            {
                id: '9',
                value: 'MA',
                title: 'menu.components.modalsAlerts',
                isOpen: false,
                multiOption: false,
                url: '/admin/components/modals-alerts',
                exact: true
            },
            {
                id: '10',
                value: 'NT',
                title: 'menu.components.notifiers',
                isOpen: false,
                multiOption: false,
                url: '/admin/components/notifiers',
                exact: true
            },
            {
                id: '11',
                value: 'PN',
                title: 'menu.components.panels',
                isOpen: false,
                multiOption: false,
                url: '/admin/components/panels',
                exact: true
            }
        ]
    },
    {
        id: '12',
        class: 'material-icons',
        value: 'chrome_reader_mode',
        title: 'menu.tables.title',
        isOpen: false,
        multiOption: true,
        exact: true,
        children: [
            {
                id: '13',
                value: 'ST',
                title: 'menu.tables.simpleTable',
                isOpen: false,
                multiOption: false,
                url: '/admin/tables/simple-table',
                exact: true
            },
            {
                id: '14',
                value: 'PT',
                title: 'menu.tables.paginationTable',
                isOpen: false,
                multiOption: false,
                url: '/admin/tables/pagination-table',
                exact: true
            }
        ]
    },
    {
        id: '28',
        class: 'material-icons',
        value: 'shopping_cart',
        title: 'menu.ecommerce',
        isOpen: false,
        multiOption: true,
        exact: true,
        children: [
            {
                id: '29',
                value: 'IN',
                title: 'menu.invoice',
                isOpen: false,
                multiOption: false,
                url: '/admin/ecommerce/invoice',
                exact: true
            },
            {
                id: '30',
                value: 'PD',
                title: 'product.title',
                isOpen: false,
                multiOption: false,
                url: '/admin/ecommerce/products',
                exact: true
            }
        ]
    },
    {
        id: '15',
        class: 'material-icons',
        value: 'calendar_today',
        title: 'menu.calendar',
        isOpen: false,
        multiOption: false,
        url: '/admin/calendar',
        exact: true,
    },
    {
        id: '16',
        class: 'material-icons',
        value: 'format_size',
        title: 'menu.typography',
        isOpen: false,
        multiOption: false,
        url: '/admin/typography',
        exact: true,
    },
    {
        id: '17',
        class: 'material-icons',
        value: 'drag_indicator',
        title: 'menu.dragAndDrop',
        isOpen: false,
        multiOption: false,
        url: '/admin/drag-and-drop',
        exact: true,
    },
    {
        id: '18',
        class: 'material-icons',
        value: 'timeline',
        title: 'menu.timeLine',
        isOpen: false,
        multiOption: false,
        url: '/admin/time-line',
        exact: true,
    },
    {
        id: '19',
        class: 'material-icons',
        value: 'pages',
        title: 'menu.pages.title',
        isOpen: false,
        multiOption: true,
        exact: true,
        children: [
            {
                id: '20',
                value: 'LO',
                title: 'menu.pages.login',
                isOpen: false,
                multiOption: false,
                url: '/',
                exact: true
            },
            {
                id: '21',
                value: 'LO2',
                title: 'menu.pages.login2',
                isOpen: false,
                multiOption: false,
                url: '/pages',
                exact: true
            },
            {
                id: '28',
                value: 'RG',
                title: 'menu.pages.register',
                isOpen: false,
                multiOption: false,
                url: '/register',
                exact: true
            }
        ]
    },
    {
        id: '22',
        class: 'material-icons',
        value: 'library_books',
        title: 'menu.documentation.title',
        isOpen: false,
        multiOption: true,
        exact: true,
        children: [
            {
                id: '23',
                value: 'GS',
                title: 'menu.documentation.introduction',
                isOpen: false,
                multiOption: false,
                url: '/admin/documentation/introduction',
                exact: true
            },
            {
                id: '24',
                value: 'IT',
                title: 'menu.documentation.installation',
                isOpen: false,
                multiOption: false,
                url: '/admin/documentation/installation',
                exact: true
            },
            {
                id: '25',
                value: 'CO',
                title: 'documentation.components.title',
                isOpen: false,
                multiOption: true,
                exact: true,
                children: [
                    {
                        id: '26',
                        value: 'CA',
                        title: 'documentation.components.card.title',
                        isOpen: false,
                        multiOption: false,
                        url: '/admin/documentation/card',
                        exact: true
                    },
                    {
                        id: '27',
                        value: 'AL',
                        title: 'documentation.components.alert.title',
                        isOpen: false,
                        multiOption: false,
                        url: '/admin/documentation/alert',
                        exact: true
                    },
                    {
                        id: '28',
                        value: 'NT',
                        title: 'documentation.components.notifier.title',
                        isOpen: false,
                        multiOption: false,
                        url: '/admin/documentation/notifier',
                        exact: true
                    }
                ]
            }
        ]
    }
];
