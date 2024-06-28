import { getProfile } from "@/lib/data";

export default async function handler(req, res) {
  const { method, query: { username } } = req;

  if (method === 'GET') {
    try {
      const profile = await getProfile(username);
      if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
      }
      return res.status(200).json(profile);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      return res.status(500).json({ error: "Failed to fetch profile" });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
}