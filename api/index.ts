import { VercelRequest, VercelResponse } from '@vercel/node'

export default function (request: VercelRequest, response: VercelResponse) {
    const { hello } = request.query 

    response.send({ hello })
}