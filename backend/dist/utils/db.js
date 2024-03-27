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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
// db.ts
const typeorm_1 = require("typeorm");
const Model_1 = require("../models/Model");
function connectDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, typeorm_1.createConnection)({
            type: 'mongodb',
            url: 'mongodb://localhost:27017/your-database-name',
            useUnifiedTopology: true,
            useNewUrlParser: true,
            synchronize: true, // You can set this to false in production
            entities: [
                Model_1.Model,
            ],
        });
    });
}
exports.connectDatabase = connectDatabase;
