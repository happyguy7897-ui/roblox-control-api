let data = {
    owner: "Soulz",
    enabled: true
};

export default function handler(req, res) {
    if (req.method === "POST") {
        // update the enabled state
        const { enabled } = req.body;
        if (enabled !== undefined) {
            data.enabled = enabled;
        }
        return res.status(200).json({ success: true, data });
    } else {
        // GET request returns current state
        return res.status(200).json(data);
    }
}
