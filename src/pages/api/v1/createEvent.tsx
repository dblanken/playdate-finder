import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req : NextApiRequest, res : NextApiResponse<Event>) {
    const body = req.body;

    console.log('body: ', body);

    console.log(!body.title)
    if (!body.title) {
        return res.status(400).json({ data: 'Event title not found' })
    }

    res.status(200).json({ data: `${body.title}` })
}