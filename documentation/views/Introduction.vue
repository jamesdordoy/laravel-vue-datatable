<template>
    <pre>
        <introduction-markdown>
        </introduction-markdown>
    </pre>
</template>

<script>
    import Prism from 'prismjs';
    import CorrectTextStyling from '../mixins/CorrectTextStyling';
    import IntroductionMarkdown from '../markdown/introduction.md';
    
    export default {
        name: 'home',
        mixins: [CorrectTextStyling],
        components: {
            IntroductionMarkdown,
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>
