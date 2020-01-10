export default class ApplicationModel {
    constructor(id, name, apdex, version, contributors) {
        this.id = id;
        this.name = name;
        this.apdex = apdex;
        this.version = version;
        this.contributors = contributors;
    }
}
