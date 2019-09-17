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
    import CorrectTextStyling from '../mixins/CorrectTextStyling';
    
    export default {
        name: 'home',
        mixins: [CorrectTextStyling],
        components: {
            InstallMarkdown
        },
    }
</script>
