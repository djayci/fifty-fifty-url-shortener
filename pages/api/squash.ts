import { nanoid } from 'nanoid'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Shortener } from '../../src/services/shortener/shortener'

type Data = {
  nano: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const nano: string = nanoid(4);
  const url = new Shortener({ full: req.query.url, nano })
  await url.save();

  res.status(200).json({ nano })
}

