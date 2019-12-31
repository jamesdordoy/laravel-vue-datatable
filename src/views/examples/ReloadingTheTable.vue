<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="markdown-header">Reloading the Datatable</h2>
            </div>
        </div>
    
        <div class="row">
            <div class="col-md-12">
                <reload-the-table-markdown>
                </reload-the-table-markdown>
            </div>
        </div>
    </div>
</template>

<script>
    import CodeExample from '../../mixins/CodeExample';
    import ReloadTheTableMarkdown from '../../markdown/examples/reloading-the-table.md';
    
    export default {
        name: 'Reloading-The-Datatable',
        components: {
            // eslint-disable-next-line
            ReloadTheTableMarkdown,
        },
        mixins: [CodeExample],
    }
</script>
