import express from 'express';
import Choreography from '@/models/Choreography';

const router: express.Router = express.Router();

router.post('/', async (req: express.Request, res: express.Response) => {
  const newChoreography = new Choreography(req.body);
  await newChoreography.save();
  res.status(201).send(newChoreography._id);
});

export default router;
