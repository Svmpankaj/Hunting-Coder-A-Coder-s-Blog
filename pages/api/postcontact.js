export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body)
        res.status(200).json(req)
    } else {
        // Handler any other HTTP method
        res.status(200).json(["allBlogs"])
        // name, email, desc, phone 
    }
}