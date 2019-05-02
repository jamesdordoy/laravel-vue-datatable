<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <!-- Brand/logo -->
      <a class="navbar-brand" href="#">Logo</a>
      
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 3</a>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 mt-4 mb-4">
          <data-table
            url="http://vue-datatable.test/"
            :per-page="perPage"
            :columns="columns">
          </data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VueDataTable from './components/DataTable.vue'
import DataTableButtonCell from './components/generic/DataTableButtonCell.vue'
import DataTableAnchorCell from './components/generic/DataTableAnchorCell.vue'

export default {
  name: 'app',
  data() {
    return {
      perPage: ['10', '25', '50'],
      columns: [
          {label: 'ID', name: 'id' },
          {label: 'Name', name: 'name' },
          { label: 'Email', name: 'email', component: DataTableAnchorCell },
          {label: '', name: 'view', component: DataTableButtonCell, classes: {'btn': true, 'btn-primary': true } },
          
      ]
    }
  },
  components: {
    'data-table': VueDataTable,
    // eslint-disable-next-line
    DataTableButtonCell,
    // eslint-disable-next-line
    DataTableAnchorCell
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
