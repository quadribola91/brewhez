// pages/api/contact.js
import dbConnect from '../api/dbConnect';
import Contact from '../api/Contact';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      const newContact = await Contact.create({ name, email, message });
      res.status(201).json({ success: true, data: newContact });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
