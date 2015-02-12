import {Router} from 'express';

let searchRouter = Router();

searchRouter.use('/', (request, response, next) => {
    res.json([{title: 'test', url: 'test'}]);
});

export {searchRouter};