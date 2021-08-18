import nc from 'next-connect';
import { all } from 'middlewares/index';
import passport from 'middlewares/passport';
import { extractUser } from 'lib/api-helpers'
import { findOneAndUpdate } from 'db/index';

const handler = nc();

handler.use(all);

handler.post(passport.authenticate('local'), async (req, res) =>
{
  await findOneAndUpdate(req.db, req.body.email, req.body.ip, req.body.mac)
  console.log(req, '6666666666666')
  res.json({ user: extractUser(req.user) });
});

handler.delete((req, res) =>
{
  req.logOut();
  res.status(204).end();
});

export default handler;
