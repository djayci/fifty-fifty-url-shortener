
import type { NextApiRequest, NextApiResponse } from 'next'
import { Shortener } from '../../src/services/shortener/shortener';

type Data = {
    entry: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const nano = req.query.nano;
    const entry = await Shortener.find({ nano })

    res.status(200).json({ entry })
}

