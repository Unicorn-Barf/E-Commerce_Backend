const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories with its associated Products
  try {
    const allCategories = await Category.findAll({
      include: [
        {
          model: Product
        }
      ]
    });
    // respond with json of all categories
    res.status(200).json(allCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value with its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ]
    });
    if (!category) {
      res.status(404).json({ error: 'No category found with this ID!' });
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
  await Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  });
  const category = await Category.findByPk(req.params.id);
  res.status(200).json({ updated: category });
} catch (error) {
  console.log(error);
  res.status(500).json({ error });
}
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      res.status(404).json({ error: 'No category found with this ID!' });
      return;
    }
    await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    // Respond with the deleted category
    res.status(200).json({deleted: category});
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
