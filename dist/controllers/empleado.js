"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmpleado = exports.postEmpleado = exports.deleteEmpleado = exports.getEmpleado = exports.getEmpleados = void 0;
const empleado_1 = __importDefault(require("../models/empleado"));
const getEmpleados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listEmpleados = yield empleado_1.default.findAll();
        res.json(listEmpleados);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        });
    }
});
exports.getEmpleados = getEmpleados;
const getEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const empleado = yield empleado_1.default.findByPk(id);
    if (empleado) {
        res.json(empleado);
    }
    else {
        res.status(404).json({ msg: `No existe el empleado con la id: ${id}` });
    }
});
exports.getEmpleado = getEmpleado;
const deleteEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const empleado = yield empleado_1.default.findByPk(id);
    if (!empleado) {
        res.status(404).json({ msg: `No existe el empleado con la id: ${id}` });
    }
    else {
        yield empleado_1.default.destroy();
        res.json({
            msg: 'El empleado fue eliminado con exito'
        });
    }
});
exports.deleteEmpleado = deleteEmpleado;
const postEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield empleado_1.default.create(body);
        res.json({
            msg: 'El empleado fue agregado con exito',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.postEmpleado = postEmpleado;
const updateEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const empleado = yield empleado_1.default.findByPk(id);
    try {
        if (empleado) {
            yield empleado.update(body);
            res.json({
                msg: 'El empleado fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el empleado con la id: ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.updateEmpleado = updateEmpleado;
