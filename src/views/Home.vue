<template>
    <div>
        <pre v-highlightjs>
            <install-markdown>
            </install-markdown>
        </pre>
    </div>
</template>

<style>
.wrap-text {
    overflow-wrap: normal;
    white-space: normal;
}
</style>

<script>

    import InstallMarkdown from '../markdown/install.md';

    export default {
        name: 'home',
        components: {
            InstallMarkdown
        },
    }
</script>
