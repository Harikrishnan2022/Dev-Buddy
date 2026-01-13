import random

# Set the range for the secret number
lower_bound = 1
upper_bound = 100
secret_number = random.randint(lower_bound, upper_bound)
attempts = 0

print(f"Welcome to the Number Guessing Game!")
print(f"I'm thinking of a number between {lower_bound} and {upper_bound}.")

while True:
    try:
        # Get user input and convert to an integer
        user_guess = int(input("Enter your guess: "))
        attempts += 1

        # Provide feedback to the user
        if user_guess == secret_number:
            print(f"Congratulations! You guessed the number {secret_number} in {attempts} attempts.")
            break # Exit the loop if the guess is correct
        elif user_guess < secret_number:
            print("Too low! Try a higher number.")
        else:
            print("Too high! Try a lower number.")
            
    except ValueError:
        # Handle cases where the user enters non-integer input
        print("Invalid input. Please enter a valid integer.")
    except EOFError:
        # Handle the case where input stream is closed unexpectedly (e.g., in some IDEs)
        print("\nGame ended unexpectedly.")
        break

