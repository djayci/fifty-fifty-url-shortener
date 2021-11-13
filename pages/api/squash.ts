import { nanoid } from 'nanoid'
import type { NextApiRequest, NextApiResponse } from 'next'
import { UrlModel } from '../../src/services/url/url-model';

type Data = {
  nano: string
}

export default async function handler({ query: { url }, headers: { host } }: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const nano: string = nanoid(4);
    const urlModel = new UrlModel({ url, nano })
    await urlModel.save();

    res.status(200).json({ nano })
  } catch (e) {
    console.error(e);
    res.status(500);
  }
}

