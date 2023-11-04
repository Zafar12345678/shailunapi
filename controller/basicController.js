const Post = require("../models/basicModel");

const postCreate = async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      description: req.body.description, // corrected typo: 'discription' to 'description'
      // image: req.file.filename, // Assuming you are handling file upload separately
    });

    const postData = await newPost.save();
    res.status(201).send({ success: true, msg: "Post Data", data: postData });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const getGatedata = async (req, res) => {
  try {
    const myData = await Post.find();
    const imagePath = myData.map((img) => ({
      title: img.title,
      description: img.description, // corrected typo: 'discription' to 'description'
      // imagePath: path.join(__dirname, '..', 'public/postImages', img.image),
    }));
    res.status(200).json(imagePath); // corrected variable name: 'imagepath' to 'imagePath'
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

let inspect; // inspect is undefined
let defaultInspect = "Default Value";
inspect ??= defaultInspect;
console.log(inspect); // Output: "Default Value"

// Alternative approach without nullish coalescing assignment operator
let inspectAlt; // inspect is undefined
let defaultInspectAlt = "Default Value";
inspectAlt = inspectAlt !== undefined ? inspectAlt : defaultInspectAlt;
console.log(inspectAlt); // Output: "Default Value"

module.exports = {
  postCreate,
  getGatedata
};
