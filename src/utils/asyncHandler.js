// const asyncHandler = () => {};
// const asyncHandler = (func) => {
//   () => {};
// };

// const asyncHandler = (func) => () => {}; // this one and previous one are same
// const asyncHandler = (func) => async () => {};

// we are creating a wrapper function
// we will use it to connect to database i.e connectDB function
// first approach -> using try-catch

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
