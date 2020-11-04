<template>
    <div>
        <pre>
            <trait-markdown>
            </trait-markdown>
        </pre>
    </div>
</template>

<script>

    import Prism from 'prismjs';
    import TraitMarkdown from '../../markdown/laravel/adding-trait.md';
    
    export default {
        name: 'Laravel-Adding-Trait',
        components: {
            TraitMarkdown
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>
