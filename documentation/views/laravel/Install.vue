<template>
    <div>
        <pre v-highlightjs>
            <install-markdown>
            </install-markdown>
        </pre>
    </div>
</template>

<script>

    import InstallMarkdown from '../../markdown/laravel/install.md';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';

    export default {
        name: 'Laravel-Installation',
        mixins: [CorrectTextStyling],
        components: {
            // eslint-disable-next-line
            InstallMarkdown
        },
    }
</script>
