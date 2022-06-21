const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const post = await prisma.post.findUnique({ where: { id: req.query.id } });

        return res.status(200).json(post);
    } catch(err) {
        return res.status(400).json({ err })
    }
}
