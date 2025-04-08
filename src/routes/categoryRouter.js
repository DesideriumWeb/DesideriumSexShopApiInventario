const express = require("express");
const {
  saveCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  deleteCategoriesBulk
} = require("../controllers/categoryController");
const verifyToken = require("../middleware/validateToken");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categorías
 *   description: Endpoints para la gestión de categorías
 */

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Crear una nueva categoría
 *     tags: [Categorías]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría creada exitosamente
 */
router.post('/categories', verifyToken, saveCategory);

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Categorías]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de categorías
 */
router.get('/categories', verifyToken, getAllCategories);

/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Obtener una categoría por ID
 *     tags: [Categorías]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Datos de la categoría
 */
router.get('/categories/:id', verifyToken, getCategoryById);

/**
 * @swagger
 * /api/categories/{id}:
 *   put:
 *     summary: Actualizar una categoría existente
 *     tags: [Categorías]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
 */
router.put('/categories/:id', verifyToken, updateCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Categorías]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 */
router.delete('/categories/:id', verifyToken, deleteCategory);

/**
 * @swagger
 * /api/categories/delete-bulk:
 *   post:
 *     summary: Eliminar múltiples categorías
 *     tags: [Categorías]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Categorías eliminadas correctamente
 */
router.post('/categories/delete-bulk', verifyToken, deleteCategoriesBulk);

module.exports = router;
