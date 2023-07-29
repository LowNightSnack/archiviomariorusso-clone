// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const payment_capture = 1;
    const amount = "50000";
    const currency = "INR";
    const options = {
      amount,
      currency,
      receipt: 1,
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        key: process.env.RAZORPAY_KEY,
        name: "Mamoor Jaan Khan Tests Ltd.",
        order_id: response.id,
        currency: response.currency,
        amount: response.amount,
        image: "logo.svg",
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}
