import mongoose, { Mongoose } from "mongoose";
import { ErrorHandler } from '../decorators/error-handler'

class DB {
    private instance;
    public mongoose;

    constructor() {
        this.instance = this.connect();
        this.mongoose = mongoose;
    }

    @ErrorHandler
    private async connect(): Promise<Mongoose> {
        if (this.instance) return this.instance;

        const { DB_HOST, DB_USER, DB_PASS } = process.env;
        return await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`
        );
    }
}

export const MongoDB = new DB().mongoose;