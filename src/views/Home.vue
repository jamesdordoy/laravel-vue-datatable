<template>
    <div>
        <vue-markdown>
    [![Build Status](https://travis-ci.org/jamesdordoy/vue-datatable.svg?branch=master)](https://travis-ci.org/jamesdordoy/vue-datatable) [![npm](https://img.shields.io/npm/v/laravel-vue-datatable.svg)](https://www.npmjs.com/package/laravel-vue-datatable) [![Downloads](https://img.shields.io/npm/dt/laravel-vue-datatable.svg)](https://www.npmjs.com/package/laravel-vue-datatable)

    # Laravel Vue Datatable
    A Vue.js datatable component for Laravel that works with Bootstrap.

    ## Requirements

    * [Vue.js](https://vuejs.org/) 2.x
    * [Laravel](http://laravel.com/docs/) 5.x
    * [Bootstrap](http://getbootstrap.com/) 4 (Optional)

    This package makes use of an optional default component, the [Laravel Vue Pagination](https://github.com/gilbitron/laravel-vue-pagination)  component created by [gilbitron](https://github.com/gilbitron). If you need a pagination component for other areas of your website and you are using a Laravel API &amp; Bootstrap, i highly suggest using this flexible component.

    ## Component Installation

    ```bash
    npm install laravel-vue-datatable
    ```

    or

    ```bash
    yarn add laravel-vue-datatable
    ```

    ### Register the Plugin

    ```javascript
    import DataTable from 'laravel-vue-datatable';

    Vue.use(DataTable);
    ```
        </vue-markdown>
    </div>
</template>

<script>
    import Prism from 'prismjs';
    import InstallMarkdown from '../markdown/install.md';

    export default {
        name: 'home',
        components: {
            InstallMarkdown
        },
        updated() {
            
        }
    }
</script>
