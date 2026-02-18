const cloudinary = require('cloudinary').v2;

const uploadMedia = (req, res) => {
    console.log(req.body.file);
    // cloudinary.uploader
    //     .upload("./assets/images/femi professional picture.png")
    //     .then((result) => {
    //         console.log(result.secure_url)
    //         const size = `${(result.bytes)/1024}kb`
    //         res.status(201).json({url: result.secure_url, size, filename: result.original_filename})
    //     })
    //     .catch(error => console.error(error));
}

module.exports = { uploadMedia }