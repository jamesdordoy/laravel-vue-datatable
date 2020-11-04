import { mapState } from 'vuex';

export default {
    data() {
        return {
            code: this.$store.state.showCode,
        }
    },
    computed: mapState(['showCode']),
    watch: {
        showCode(newValue) {
            this.code = newValue;
        }
    },
    mounted() {
        let styleingFunction = element => {
            element.style.overflowWrap = "normal";
            element.style.whiteSpace = "normal";
        };

        let paragraphs = document.querySelectorAll("p");
        let h1 = document.querySelectorAll("h1");
        let h2 = document.querySelectorAll("h2");
        let h3 = document.querySelectorAll("h3");
        let h4 = document.querySelectorAll("h4");
        let h5 = document.querySelectorAll("h5");

        paragraphs.forEach(styleingFunction);
        h1.forEach(styleingFunction);
        h2.forEach(styleingFunction);
        h3.forEach(styleingFunction);
        h4.forEach(styleingFunction);
        h5.forEach(styleingFunction);
    }
}