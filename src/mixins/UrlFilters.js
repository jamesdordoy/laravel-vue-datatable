
export default {
    methods: {
        getURLParameter(name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
        },
        tryParseJSON (jsonString){
            try {
                var o = JSON.parse(jsonString);
        
                if (o && typeof o === "object") {
                    return o;
                }
            } catch (e) { }
        
            return false;
        },
        checkParameters(tableData) {

            if (this.addFiltersToUrl) {
                
                let localStorage = window.localStorage;

                Object.keys(tableData).forEach(filter => {
                    if (this.getURLParameter(filter)) {
                        let value = this.getURLParameter(filter);

                        if (! isNaN(value)) {
                            this.tableData[filter] = Number(value);
                        } else if (typeof this.tryParseJSON(value) === 'object') {
                            this.tableData.filters = JSON.parse(value);
                        } else {
                            this.tableData[filter] = value;
                        }

                    } else if (localStorage.getItem(this.$options.name + "_" + filter)){
                        let value = localStorage.getItem(this.$options.name + "_" + filter);

                        if (! isNaN(value)) {
                            this.tableData[filter] = Number(value);
                        } else if (typeof this.tryParseJSON(value) === 'object') {
                            this.tableData.filters = JSON.parse(value);
                        } else {
                            this.tableData[filter] = value;
                        }
                    }
                });

                this.updateParameters(this.tableData);
            }
        },
        updateParameters(tableData) {

            let newFilters = {};

            Object.keys(tableData).forEach(filter => {
                if (typeof this.tableData[filter] === 'object') {
                    newFilters[filter] = JSON.stringify(this.tableData[filter]);
                } else {
                    newFilters[filter] = this.tableData[filter];
                } 
            });

            for (let filter in newFilters) {
                localStorage.setItem(this.$options.name + "_" + filter, newFilters[filter]);
            }

            let parameters = Object.keys(newFilters).map(function(k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(newFilters[k])
            }).join('&')

            let url = document.URL.split('?')[0];

            window.history.pushState(newFilters, 'Title', url + "?" + parameters);
        },
    }
}