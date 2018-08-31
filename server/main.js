import express from 'express';
import graphqlHTTP from 'express-graphql';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import schema from './graphql';
import colors from 'colors';

require('dotenv').config();

/* eslint-disable no-console */

const hostName = process.env.HOST_NAME;
const port = process.env.PORT;
const app = express();
const compiler = webpack(config);
const cors = require('cors');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// console.log('path.join( __dirname, ../src/index.html', path.join( __dirname, '../src/index.html'));

app.get('*', function(req, res) {
  // console.log('app path: ', path.join( __dirname, '../src/index.html'));
  res.sendFile(path.join( __dirname, '../src/index.html'));
  // res.sendFile(__dirname + '/../src/index.html')
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(colors.green(`Application is running on ${hostName}:${port}`));
    open(`${hostName}:${port}`);
  }
});

app.use('/graphql', cors(), graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
  formatError(err) {
    console.log('formatError(err): ', JSON.stringify(err));
    /* errors.report(err, req);   // <-- log the error
    return {
      status = status;
      message = message;
      path = path;
      method = method;
      payload = payload
      timeThrown = timeThrown;

      message: err.message,
      code: err.originalError && err.originalError.code,   // <--
      locations: err.locations,
      path: err.path
    }; */
  }
}));

// console.log('process.env: ', JSON.stringify(process.env));
// app.isDevelopment = process.env.NODE_ENV === 'development';
// app.userMgmtBaseUrl = `http://${process.env.USER_MGMT_HOST}:${process.env.USER_MGMT_PORT}`;
// console.log('app: ', JSON.stringify(app));
