
import type { NextApiRequest, NextApiResponse } from 'next'
import { UrlModel } from '../../src/services/url/url-model';

type Data = {
    entry: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const nano = req.query.nano;
    const entry = await UrlModel.find({ nano })

    res.status(200).json({ entry })
}

