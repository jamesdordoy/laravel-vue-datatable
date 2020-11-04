<template>
    <pre>
        <controller-resource-markdown>
        </controller-resource-markdown>
    </pre>
</template>

<script>

    import Prism from 'prismjs';
    import ControllerResourceMarkdown from '../../markdown/laravel/controller-resource.md';

    export default {
        name: 'Laravel-Controller-Resources',
        components: {
            ControllerResourceMarkdown
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>
