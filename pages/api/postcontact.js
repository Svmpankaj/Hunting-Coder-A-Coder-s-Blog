export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        res.status(200).json(["yes post request"])
    } else {
        // Handler any other HTTP method
        res.status(200).json(["allBlogs"])
        // name, email, desc, phone 
    }
}