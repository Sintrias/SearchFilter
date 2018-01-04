export default class Search {
    _id: string;
    ipaddr: string;
    query: string;
    date: Date;
    
    constructor() {
        this.ipaddr = "";
        this.query = "";
        this.date = new Date();
    }

    static generateMockSearch() : Search {
        return {
            _id: "new",
            ipaddr: "192.168.0.1",
            query: "puppies",
            date: new Date()
        }
    }
}
