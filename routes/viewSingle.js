import {Router} from 'express';

let viewSingleRouter = Router();

viewSingleRouter.use('/:name', (request, response, next) => {

});

export {viewSingleRouter};