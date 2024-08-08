"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sucursal_1 = require("../controllers/sucursal");
const router = (0, express_1.Router)();
router.get('/', sucursal_1.getSucursales);
exports.default = router;
