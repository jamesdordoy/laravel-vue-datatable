<template>
    <div>
        <pre v-highlightjs>
            <controller-resource-markdown>
            </controller-resource-markdown>
        </pre>
    </div>
</template>

<script>

    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import ControllerResourceMarkdown from '../../markdown/laravel/controller-resource.md';

    export default {
        name: 'Controller Resources',
        mixins: [CorrectTextStyling],
        components: {
            ControllerResourceMarkdown
        },
    }
</script>
