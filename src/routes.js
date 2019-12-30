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
        path: '/laravel-vue-datatable/props/cell',
        component: require('./views/props/Cell.vue').default,
    },
    {
        path: '/laravel-vue-datatable/laravel/installation',
        component: require('./views/laravel/Install.vue').default,
    },
    {
        path: '/laravel-vue-datatable/laravel/options',
        component: require('./views/laravel/Options.vue').default,
    },
    {
        path: '/laravel-vue-datatable/laravel/trait',
        component: require('./views/laravel/AddingTrait.vue').default,
    },
    {
        path: '/laravel-vue-datatable/laravel/controller-resource',
        component: require('./views/laravel/ControllerResource.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/basic',
        component: require('./views/examples/Basic.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/relationships',
        component: require('./views/examples/relationships/Introduction.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/belongs-to',
        component: require('./views/examples/relationships/BelongsTo.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/has-many',
        component: require('./views/examples/relationships/HasMany.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/belongs-to-many',
        component: require('./views/examples/relationships/BelongsToMany.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/injecting-dynamic-components',
        component: require('./views/examples/InjectingDynamicComponents.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/override-filters',
        component: require('./views/examples/OverrideFilters.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/override-table-body',
        component: require('./views/examples/OverrideTableBody.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/custom-filters',
        component: require('./views/examples/CustomFilters.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/styling',
        component: require('./views/Soon.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/modal',
        component: require('./views/examples/Modal.vue').default,
    },
    {
        path: '/laravel-vue-datatable/examples/joins',
        component: require('./views/examples/Joins.vue').default,
    },
];