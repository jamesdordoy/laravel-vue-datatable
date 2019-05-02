<template>
  <div id="app">
    <div class="container">
      <data-table
        url="http://vue-datatable.test/"
        :per-page="perPage"
        :columns="columns">
      </data-table>
    </div>
  </div>
</template>

<script>

import VueDataTable from './components/DataTable.vue'
import DataTableButtonCell from './components/generic/DataTableButtonCell.vue'

export default {
  name: 'app',
  data() {
    return {
      perPage: ['15', '50', '100'],
      columns: [
          {label: 'ID', name: 'id' },
          {label: 'Name', name: 'name' },
          {label: 'Email', name: 'email' },
          {label: '', name: 'view', component: DataTableButtonCell, classes: {'btn': true, 'btn-primary': true } },
          
      ]
    }
  },
  components: {
    'data-table': VueDataTable,
    DataTableButtonCell
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
