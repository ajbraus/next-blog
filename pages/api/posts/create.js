const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const post = await prisma.post.create(req.body);
        res.status(200).json(post);
    } catch(err) {
        res.status(400).json({ err })
    }
} 