const express = require('express')

const router = express.Router();
const expenseController = require('../controller/expenseController')

router.get('/get-expense', expenseController.getExpense)

router.post('/add-expense', expenseController.createExpense)

router.post('/delete-expense', expenseController.deleteExpense)

module.exports = router;