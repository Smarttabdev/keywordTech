import Stripe from "stripe";
import { all } from 'middlewares/index';
import nc from 'next-connect';

const handler = nc();

handler.use(all);


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

handler.post(async (req, res) =>
{
  console.log(req.body)
  if (req.method === "POST")
  {
    try
    {
      console.log(req.body, '0000000')
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "eur"
      });
      console.log(paymentIntent.client_secret, '200')

      res.status(200).send(paymentIntent.client_secret);
    } catch (err)
    {
      console.log(err, 'err')
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else
  {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
});

export default handler;
