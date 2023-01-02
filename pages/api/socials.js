import { socials } from './data/socials';

export default function handler(req, res) {
  if (req.method === 'GET') return res.status(200).json(socials);
}
