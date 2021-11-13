import { MongoDB } from "../db/db";
import { Url } from "./url-interface";
import { UrlSchema } from "./url-schema";

let model;
try {
    model = MongoDB.model<Url>('Url');
} catch (err) {
    model = MongoDB.model<Url>('Url', UrlSchema)
}
export const UrlModel = model;