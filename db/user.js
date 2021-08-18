import { nanoid } from 'nanoid';

export async function findUserById(db, userId)
{
  return db.collection('users').findOne({
    _id: userId,
  }).then((user) => user || null);
}

export async function findUserByEmail(db, email)
{
  console.log('--------------here-----------------');
  return db.collection('users').findOne({
    email,
  }).then((user) => user || null);
}

export async function updateUserById(db, id, update)
{
  return db.collection('users').findOneAndUpdate(
    { _id: id },
    { $set: update },
    { returnOriginal: false },
  ).then(({ value }) => value);
}

export async function findOneAndUpdate(db, email, ip, mac)
{
  return db.collection('users').findOneAndUpdate(
    { email: email, },
    {
      $set: {
        ...(ip && { ip }),
        ...(mac && { mac }),
      }
    },
  ).then(() =>
  {

  });
}

export async function insertUser(db, {
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
  cvc,
  ip,
  mac
})
{
  return db
    .collection('users')
    .insertOne({
      _id: nanoid(12),
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
      cvc,
      ip,
      mac
    })
    .then(({ ops }) => ops[0]);
}