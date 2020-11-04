# Release Notes

## [v0.6.0 (2020-10-04)]


### Changed
- Updated the slot-scope name for tableData to tableFilters. the slot-scope for tableData now reflects the table data 


## [v0.3.0 (2019-07-23)]


### Changed
- Updated the event system to allow for different events to be passed through. Changed column prop `click-event` to `event` and `handler`  ([#2f28d66](https://github.com/jamesdordoy/vue-datatable/commit/2f28d6646b4ed3c980d79d81f7c131c106a1aecd))


## [v0.3.1 (2019-08-12)]


### Changed
- Added new column attribute `meta`. This allows custom values, functions etc. to be parsed to the custom components  ([#2570f00](https://github.com/jamesdordoy/vue-datatable/commit/2570f0004f17cb1d1f220f956c90be4b7f6217c3))

## [v0.4.0 (2019-11-21)]


### Changed
- Changed the model trait method in the Laravel Package. Changed method name `dataTableQuery` to `eloquentQuery` as there is now an additional method for using the Laravel Query Builder. ([#2570f00](https://github.com/jamesdordoy/vue-datatable/commit/2570f0004f17cb1d1f220f956c90be4b7f6217c3))

## [v0.5.0 (2019-12-26)]


### Changed
- Changed the filterable column prop in the table to orderable as it is a more appropriate name.  ([#a521a8](https://github.com/jamesdordoy/vue-datatable/commit/a521a86a4c17dba809a9d26c3d845f5c5b1cae31))

## [v0.6.0 (2020-01-23)]

### Changed
- Changed table cell comp prop to component.  ([#a521a8](https://github.com/jamesdordoy/vue-datatable/commit/a521a86a4c17dba809a9d26c3d845f5c5b1cae31))
