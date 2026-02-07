let data = {
    owner: "Soulz",
    enabled: true
};

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    const { owner, enabled } = req.body;

    if (owner !== undefined) data.owner = owner;
    if (enabled !== undefined) data.enabled = enabled;

    res.status(200).json({ success: true });
}
