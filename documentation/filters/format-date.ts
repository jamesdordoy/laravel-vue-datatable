import moment from "moment";

export default (value, format='Do MMMM YYYY') => {
    if (value) {
        return moment(String(value)).format(format);
    }
    return 'N/A';
};