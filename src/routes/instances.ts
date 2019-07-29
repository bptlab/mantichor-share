import express from 'express';
import Instance from '@/models/Instance';

const router: express.Router = express.Router();

router.get('/:id', async (req: express.Request, res: express.Response) => {
  const instance = await Instance.findById(req.params.id).exec();
  res.send(JSON.stringify(instance));
});

router.post('/', async (req: express.Request, res: express.Response) => {
  const newInstance = new Instance(req.body);
  await newInstance.save();

  res.status(201).send(JSON.stringify({ shareId: newInstance._id }));
});

export default router;
