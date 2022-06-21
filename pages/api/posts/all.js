const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const posts = await prisma.post.findMany();

        return res.status(200).json(posts);
    } catch(err) {
        return res.status(400).json({ err })
    }
}
