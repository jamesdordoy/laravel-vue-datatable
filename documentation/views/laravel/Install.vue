<template>
    <pre>
        <install-markdown>
        </install-markdown>
    </pre>
</template>

<script>

    import Prism from 'prismjs';
    import InstallMarkdown from '../../markdown/laravel/install.md';

    export default {
        name: 'Laravel-Installation',
        components: {
            InstallMarkdown
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>
