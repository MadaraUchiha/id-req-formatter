import imgur from 'imgur';
import Promise from 'bluebird';
import request from 'request';
import express from 'express';
import hogan from 'hogan-express';

import {indexRouter} from './routes/index.js';
import {searchRouter} from './routes/search.js';

Promise.longStackTraces();

Promise.promisifyAll(imgur);
Promise.promisifyAll(request);

let app = express();
app.set('view engine', 'html');
app.engine('html', hogan);
app.set('views', './views');
app.set('layout', 'layout');

app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/', express.static('dist/', {}));

app.listen(8080, () => {
    console.info('Server is listening!');
});