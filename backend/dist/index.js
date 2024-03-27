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
// index.ts
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const db_1 = require("./utils/db");
const schema_1 = __importDefault(require("./schema/schema"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, db_1.connectDatabase)();
        const server = new apollo_server_1.ApolloServer({ schema: schema_1.default });
        const { url } = yield server.listen();
        console.log(`Server ready at ${url}`);
    });
}
main().catch(err => console.error(err));
