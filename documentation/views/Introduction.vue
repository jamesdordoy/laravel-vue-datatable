<template>
    <div>
        <pre v-highlightjs>
            <introduction-markdown>
            </introduction-markdown>
        </pre>
    </div>
</template>

<script>
    import CorrectTextStyling from '../mixins/CorrectTextStyling';
    import IntroductionMarkdown from '../markdown/introduction.md';
    
    export default {
        name: 'home',
        mixins: [CorrectTextStyling],
        components: {
            IntroductionMarkdown,
        }
    }
</script>
