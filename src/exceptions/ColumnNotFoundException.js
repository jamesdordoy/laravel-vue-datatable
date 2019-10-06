export default class ColumnNotFoundException extends Error {
    constructor(message) {
        super(message)
        this.name = 'Column Not Found Exception'
        this.message = message
    }
}