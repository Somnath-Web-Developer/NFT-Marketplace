// Import necessary modules
import express, { Request, Response } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

// Create an instance of Express
const app = express();

const prisma = new PrismaClient();

// Enable CORS
app.use(cors());

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/:nftId', async(req: Request, res: Response) => {
    const nftId = req.params.nftId;
    try {
        const comment = await prisma.comment.findMany({
            where: {
                nftId: nftId
            },
            select: {
                body: true,
            }
        })

        return (
            res.json({
                msg: "Successfully Fetched!",
                comment
            })
        )
    }
    catch(e) {
        return (
            res.status(411).json({
                msg: "Error while fetching!"
            })
        )
    }
    // res.send('Hello World!');
});

// Example POST route
app.post('/:nftId', async(req: Request, res: Response) => {
    console.log(req.body);
    const nftId = req.params.nftId;
    const comment = await prisma.comment.create({
        data: {
            nftId: nftId,
            body: req.body.body,
        }
    })

    const id = comment.id;

    return (
        res.json({
            msg: "Successfully Posted!",
            id
        })
    )
    // res.send('Received a POST request');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
