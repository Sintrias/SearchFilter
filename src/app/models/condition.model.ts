export default class Condition {
    _id: string;
    ipaddr: string;
    include: string;
    date: Date;
    
    constructor() {
        this.ipaddr = "";
        this.include = "";
        this.date = new Date();
    }

    static generateMockCondition() : Condition {
        return {
            _id: "new",
            ipaddr: "192.168.0.1",
            include: "puppies",
            date: new Date()
        }
    }
}
