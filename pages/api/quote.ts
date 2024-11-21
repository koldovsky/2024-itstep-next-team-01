import type { NextApiRequest, NextApiResponse } from "next";

type QuoteResponse = {
  quote: string;
  author: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuoteResponse>
) {
  res.status(200).json({
    quote: "After women, flowers are the most lovely thing God has given the world.",
    author: "Christian Dior",
  });
}
