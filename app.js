import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import './connections';

import usersRouter from './routes/users';


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());


app.use('/users', usersRouter);


process.on('uncaughtException', (err) => {
  console.error('uncaughtException');
  console.error(err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('未捕捉到的 rejection:', promise, '原因:', reason);
});

const resErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const resErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    console.error('出現重大錯誤', err);
    res.status(400).json({
      status: 'error',
      message: '系統錯誤，請洽系統管理員',
    });
  }
};

app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: '無此路由資訊',
  });
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  if (process.env.NODE_ENV === 'dev') {
    resErrorDev(err, res);
    return;
  }
  if (err.name === 'ValidationError') {
    err.message = '資料欄位填寫錯誤，請重新輸入';
    err.isOperational = true;
  }
  if (err.code === 11000) {
    err.message = 'email已使用';
    err.isOperational = true;
  }
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    err.message = '請使用JSON格式';
    err.isOperational = true;
  }
  resErrorProd(err, res);
});

module.exports = app;
