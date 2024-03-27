"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelFilterInput = void 0;
// ModelFilterInput.ts
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
let ModelFilterInput = class ModelFilterInput {
};
exports.ModelFilterInput = ModelFilterInput;
__decorate([
    (0, type_graphql_1.Field)(type => mongodb_1.ObjectId, { nullable: true }),
    __metadata("design:type", mongodb_1.ObjectId)
], ModelFilterInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ModelFilterInput.prototype, "firstname", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ModelFilterInput.prototype, "lastname", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ModelFilterInput.prototype, "picture", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ModelFilterInput.prototype, "gender", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], ModelFilterInput.prototype, "dob", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ModelFilterInput.prototype, "profession", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ModelFilterInput.prototype, "shoesize", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ModelFilterInput.prototype, "hairColor", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ModelFilterInput.prototype, "hairLength", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ModelFilterInput.prototype, "waist", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ModelFilterInput.prototype, "height", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ModelFilterInput.prototype, "weight", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], ModelFilterInput.prototype, "castings", void 0);
exports.ModelFilterInput = ModelFilterInput = __decorate([
    (0, type_graphql_1.InputType)()
], ModelFilterInput);
