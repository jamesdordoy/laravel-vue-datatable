<template>
    <pre>
        <options-markdown>
        </options-markdown>
    </pre>
</template>

<script>

    import Prism from 'prismjs';
    import OptionsMarkdown from '../../markdown/laravel/options.md';

    export default {
        name: 'Laravel-Options',
        components: {
            OptionsMarkdown
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>
