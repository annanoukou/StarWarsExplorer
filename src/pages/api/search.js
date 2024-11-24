export default async function handler(req, res) {
    const { query, entityType } = req.query;
    
    try {
      const response = await fetch(`https://swapi.dev/api/${entityType}/?search=${query}`);
      const data = await response.json();
      res.status(200).json(data.results || []);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }