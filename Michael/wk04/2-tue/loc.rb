puts 'Welcome to a basic CLI claculator!'

loop do
  
  puts 'Select which type of arithmetic operation to use.'
  puts 'Press 1 for addition'
  puts 'Press 2 for subtraction'
  puts 'Press 3 for multiplication'
  puts 'Press 4 for division'
  puts 'Type "exit" to quit'
  arithmetic_operation_selection = gets.chomp

  if arithmetic_operation_selection.downcase == 'exit' 
    break
  end

  puts 'Enter first number:'
  first_number = gets.to_i
  puts 'Enter second number:'
  second_number = gets.to_i

  
  if arithmetic_operation_selection == '1'
    answer = first_number + second_number
  elsif arithmetic_operation_selection == '2'
    answer = first_number - second_number
  elsif arithmetic_operation_selection == '3'
    answer = first_number * second_number
  elsif arithmetic_operation_selection == '4'
    answer = first_number / second_number
  end

  puts "The answer is #{answer}."
end