<template>
    <div>
        <pre v-highlightjs>
            <install-markdown>
            </install-markdown>
        </pre>
    </div>
</template>

<script>

    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import InstallMarkdown from '../../markdown/laravel/install.md';

    export default {
        name: 'home',
        mixins: [CorrectTextStyling],
        components: {
            InstallMarkdown
        },
    }
</script>
