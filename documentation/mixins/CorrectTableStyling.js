export default {
    mounted() {
        document.querySelectorAll("table").forEach(table => {
            table.classList.add("table");
            table.classList.add("table-bordered");
            table.classList.add("table-striped");
        });
    }
}