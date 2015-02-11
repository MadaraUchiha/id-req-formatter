import {Router} from 'express';

let indexRouter = Router();

indexRouter.get('/', (request, response, next) => {
    response.render('index', {foo: 'test'});
});

export {indexRouter};