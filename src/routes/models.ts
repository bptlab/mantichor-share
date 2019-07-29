import express from 'express';
import Model from '@/models/Model';

const router: express.Router = express.Router();

router.get('/:id', async (req: express.Request, res: express.Response) => {
  const model = await Model.findById(req.params.id).exec();
  res.send(JSON.stringify(model));
});

router.post('/', async (req: express.Request, res: express.Response) => {
  const newModel = new Model(req.body);
  await newModel.save();

  res.status(201).send(JSON.stringify({ shareId: newModel._id }));
});

export default router;
