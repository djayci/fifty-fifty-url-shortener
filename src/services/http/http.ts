import { ErrorHandler } from "../decorators/error-handler";

export class Http {
    @ErrorHandler
    static async get<t>(path: string, query: Record<string, string>): Promise<t> {
        const url = new URL(path, window.location.href);
        url.search = new URLSearchParams(query).toString();

        const res = await fetch(url.toString());
        const data = await res.json();
        return data;
    }
}