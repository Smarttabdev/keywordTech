import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import { all } from 'middlewares/index';
import { extractUser } from 'lib/api-helpers';
import { insertUser, findUserByEmail } from 'db/index';

const handler = nc();

handler.use(all);

handler.post(async (req, res) =>
{
  const {
    firstName,
    lastName,
    email,
    password,
    company,
    companyName,
    vatNumber,
    addres1,
    addres2,
    city,
    country,
    zip,
    payment,
    paypalMail,
    paypalPwd,
    cardNumber,
    kkmonth,
    kkyear,
    cvc
  } = req.body;
  if (await findUserByEmail(req.db, email))
  {
    res.status(403).send('The email has already been used.');
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await insertUser(req.db, {
    firstName,
    lastName,
    email,
    password: hashedPassword,
    company,
    companyName,
    vatNumber,
    addres1,
    addres2,
    city,
    country,
    zip,
    payment,
    paypalMail,
    paypalPwd,
    cardNumber,
    kkmonth,
    kkyear,
    cvc
  });
  req.logIn(user, (err) =>
  {
    if (err) throw err;
    res.status(201).json({
      user: extractUser(req.user),
    });
  });
});

export default handler;
