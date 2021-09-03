"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send('Index'); //se puede hacer lo mismo con el objeto JSON  res.json({text:'texto'});
    }
}
exports.indexController = new IndexController();
