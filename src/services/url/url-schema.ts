import { MongoDB } from '../mongo-db/mongo-db';
import { Url } from './url-interface';

const Schema = MongoDB.Schema;
const urlSchema = new Schema<Url>(
    {
        url: {
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
export const UrlSchema = urlSchema;
