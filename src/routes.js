export default [
    {
        path: '/laravel-vue-datatable',
        component: require('./views/Home.vue').default,
    },
    {
        path: '/laravel-vue-datatable/introduction',
        component: require('./views/Introduction.vue').default,
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
];