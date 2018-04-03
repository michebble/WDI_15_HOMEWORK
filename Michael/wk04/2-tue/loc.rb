puts 'Welcome to a basic CLI claculator!'
loop do
  puts 'Select which type of arithmetic operation to use.'
  puts 'Press 1 for addition'
  puts 'Press 2 for subtraction'
  puts 'Press 3 for multiplication'
  puts 'Press 4 for division'
  puts 'Press 5 for exponents'
  puts 'Press 6 for square root'
  puts 'Or type "exit" to quit'
  arithmetic_operation_selection = gets.chomp

  if arithmetic_operation_selection.downcase == 'exit' 
    break
  end

  print 'Enter first number: '
  first_number = gets.to_i
  if arithmetic_operation_selection != '6'
    print 'Enter second number: '
    second_number = gets.to_i
  end

  if arithmetic_operation_selection == '1'
    answer = first_number + second_number
    puts "#{first_number} + #{second_number} = #{answer}"
  elsif arithmetic_operation_selection == '2'
    answer = first_number - second_number
    puts "#{first_number} - #{second_number} = #{answer}"
  elsif arithmetic_operation_selection == '3'
    answer = first_number * second_number
    puts "#{first_number} * #{second_number} = #{answer}"
  elsif arithmetic_operation_selection == '4'
    answer = first_number / second_number
    puts "#{first_number} / #{second_number} = #{answer}"
  elsif arithmetic_operation_selection == '5'
    answer = first_number ** second_number
    puts "#{first_number} to the power #{second_number} is #{answer}"
  elsif arithmetic_operation_selection == '6'
    answer = Math.sqrt(first_number)
    puts "The square root of #{first_number}  is #{answer}."
  end

  puts
end