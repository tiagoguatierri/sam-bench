import json

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


def lambda_handler(event, context):
    n = 40
    result = fibonacci(n)

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": f"Fibonacci of {n} is {result}",
        }),
    }
