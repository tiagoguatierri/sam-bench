
function fibonacci(n) {
  if (n <= 1) {
      return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export const lambdaHandler = async (event, context) => {
    const n = 40;
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Fibonacci of ${n} is ${fibonacci(n)}`,
      }),
    };

    return response;
  };
  