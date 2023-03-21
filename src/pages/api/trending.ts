import type { NextApiRequest, NextApiResponse } from 'next';
const axios = require('axios');
import Cors from 'cors';

const cors = Cors({
  methods: ['GET'],
  origin: process.env.NEXT_PUBLIC_DOMAIN,
  optionsSuccessStatus: 200,
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse<any>) {
  // Get data from your database
  await runMiddleware(_req, res, cors);
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://www.tiktok.com/node/share/discover',
  };

  let data = null;

  await axios
    .request(config)
    .then((response: any) => {
      data = response.data?.body;
    })
    .catch((error: any) => {
      data = null;
    });

  res.status(200).json({
    data,
  });
}
