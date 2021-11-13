import { nanoid } from 'nanoid'
import type { NextApiRequest, NextApiResponse } from 'next'
import { UrlModel } from '../../src/services/url/url-model';

type Data = {
  nano: string
}

export default async function handler({ query: { url } }: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const id: string = nanoid(4);
    const nano: string = `${process.env.VERCEL_URL}/${id}`;
    const urlModel = new UrlModel({ url, nano, path: id })
    await urlModel.save();

    res.status(200).json({ nano })
  } catch (e) {
    console.error(e);
    res.status(500);
  }
}

