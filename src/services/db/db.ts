import mongoose, { Mongoose } from "mongoose";

class Mongo {
    private instance;
    public mongoose;

    constructor() {
        this.instance = this.connect();
        this.mongoose = mongoose;
    }

    private async connect(): Promise<Mongoose | boolean> {
        if (this.instance) return this.instance;

        try {
            const instance = await mongoose.connect(
                'mongodb+srv://djayci:!Peq697th@cluster0.itwol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
            );
            console.log('connected to db...');
            return instance;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

export const DB = new Mongo().mongoose;

//mongodb+srv://djayci:!Peq697th@cluster0.itwol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority