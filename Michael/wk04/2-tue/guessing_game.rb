# require 'pry'
# while loop
# how to get input
puts 'Welcome to the guessing game.'
puts 'Please guess a number between 1 and 10.'
guess = gets.to_i  
secret_number = rand(1..10) 

while guess != secret_number
  if guess > secret_number
    puts 'The secret number is less than that.'
    guess = gets.to_i
  elsif guess< secret_number
    puts 'The secret number is higher than that.'
    guess = gets.to_i
  end
end

puts("You win, #{secret_number} was the correct number.")