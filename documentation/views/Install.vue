<template>
    <div>
        <pre>
            <install-markdown>
            </install-markdown>
        </pre>        
    </div>
</template>

<script lang="ts">

    import Prism from 'prismjs';
    import InstallMarkdown from '../markdown/install.md';
    import { Component, Vue } from 'vue-property-decorator';
    import CorrectTextStyling from '../mixins/CorrectTextStyling';
    
    @Component({
        name: 'Component-Install',
        mixins: [CorrectTextStyling],
        components: {
            InstallMarkdown
        },
        mounted() {
            Prism.highlightAll();
        },
    })

    export default class Install extends Vue {}
</script>
