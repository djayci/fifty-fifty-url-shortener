import { DB } from '../db/db';

interface schema {
    full: string,
    nano: string,
    createdAt: string
}

const Schema = DB.Schema;
const urlSchema = new Schema<schema>(
    {
        full: {
            type: String,
            required: true
        },
        nano: {
            type: String,
            required: true
        },
        createdAt: Date
    },
    { timestamps: true }
);

urlSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });
let shortener;
try {
    shortener = DB.model<schema>('Url');
} catch (err) {
    shortener = DB.model<schema>('Url', urlSchema)
}
export const Shortener = shortener;
