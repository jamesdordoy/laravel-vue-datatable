export default [
    {
        path: '/laravel-vue-datatable',
        component: require('./views/Introduction.vue').default,
    },
    {
        path: '/laravel-vue-datatable/installation',
        component: require('./views/Install.vue').default,
    },
    {
        path: '/laravel-vue-datatable/props/table',
        component: require('./views/props/Table.vue').default,
    },
    {
        path: '/laravel-vue-datatable/props/column',
        component: require('./views/props/Column.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples',
        component: require('./views/Example.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/basic',
        component: require('./views/examples/Basic.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/injecting-dynamic-components',
        component: require('./views/examples/InjectingDynamicComponents.vue').default,
    },
];