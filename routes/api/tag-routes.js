const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tags) {
      res.status(404).json({ message: "No tags found with that ID" });
      return;
    }
    res.status(200).json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  //  Verify if tag_name to be updated to is provided
  if (!req.body.tag_name) {
    res.status(304).json();
    return;
  }
  // update a tag's name by its `id` value
  try {
    const [updateTag] = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(updateTag);
    if (updateTag === 0) {
      res.status(200).json({ message: "No update has been made" });
      return;
    }
    res.status(200).json("Tag name has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteTag) {
      res.status(404).json({ message: "No tag found with that ID" });
      return;
    }
    res.status(200).json("Tag has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
