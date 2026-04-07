const express = require('express');
const authRouter = require('./routes/authRoutes');
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');
const groupRouter = require('./routes/groupRoutes');
const adminRouter = require('./routes/adminRoutes');
const globalErrorHandler = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json()); 

app.use('/auth', authRouter);
app.use('/posts', postRouter);
app.use('/users', userRouter);
app.use('/groups', groupRouter);
app.use('/admin', adminRouter);
app.use(globalErrorHandler);

module.exports = app;