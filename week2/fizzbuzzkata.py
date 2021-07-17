# Defining function
def FizzBuzz(num):
    if num == 1:
        return "1"
    elif num == 2:
        return "2"
    elif num % 3 == 0 and num % 5 == 0:
        return "FizzBuzz"
    elif num % 3 == 0:
        return "Fizz"
    elif num % 5 == 0:
        return "Buzz"

# # Displaying results when ran..
# print(FizzBuzz(1))
# print(FizzBuzz(2))
# print(FizzBuzz(3))
# print(FizzBuzz(5))
# print(FizzBuzz(6))
# print(FizzBuzz(10))
# print(FizzBuzz(15))