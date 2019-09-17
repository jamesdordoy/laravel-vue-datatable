<template>
    <div>
        <pre v-highlightjs>
            <introduction-markdown>
            </introduction-markdown>
        </pre>
    </div>
</template>

<script>
    import IntroductionMarkdown from '../markdown/introduction.md';
    import CorrectTextStyling from '../mixins/CorrectTextStyling';
    
    export default {
        name: 'home',
        mixins: [CorrectTextStyling],
        components: {
            IntroductionMarkdown,
        }
    }
</script>
