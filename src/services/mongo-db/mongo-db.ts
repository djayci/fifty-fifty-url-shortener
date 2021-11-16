import mongoose, { Mongoose } from "mongoose";
import { ErrorHandler } from '../decorators/error-handler'
import { ProcessEnv } from "../process-env/process-env";

class Mongo {
    private instance;
    public mongoose;

    constructor() {
        this.instance = this.connect();
        this.mongoose = mongoose;
    }

    @ErrorHandler
    private async connect(): Promise<Mongoose> {
        if (this.instance) return this.instance;

        const DB_HOST = ProcessEnv.get('DB_HOST');
        const DB_USER = ProcessEnv.get('DB_USER');
        const DB_PASS = ProcessEnv.get('DB_PASS');
        return await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`
        );
    }
}

export const MongoDB = new Mongo().mongoose;