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
    
    export default {
        name: 'home',
        data() {
            return {};
        },
        components: {
            IntroductionMarkdown,
        }
    }
</script>
