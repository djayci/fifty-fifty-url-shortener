import mongoose, { Mongoose } from "mongoose";

class Mongo {
    private instance;
    public mongoose;

    constructor() {
        this.instance = this.connect();
        this.mongoose = mongoose;
    }

    private async connect(): Promise<Mongoose | void> {
        if (this.instance) return this.instance;
        const { DB_HOST, DB_USER, DB_PASS } = process.env;
        return await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`
        );
    }
}

export const DB = new Mongo().mongoose;