<template>
    <div>
        <pre v-highlightjs>
            <install-markdown>
            </install-markdown>
        </pre>
    </div>
</template>

<script>

    import InstallMarkdown from '../markdown/install.md';

    export default {
        name: 'home',
        components: {
            InstallMarkdown
        },
    }
</script>
