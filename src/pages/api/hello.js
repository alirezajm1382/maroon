// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req);
  if (req.method === "POST") {
    res.status(200).json({ id: 1, name: "Sepid", email: "sepid@berlin.com" });
  }
}
