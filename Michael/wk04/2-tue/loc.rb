line_width = 50
border = '*'
puts border * line_width
puts (                        'Welcome to a basic CLI claculator!'.center(line_width))
loop do
  puts
  puts ('Select which type of arithmetic operation to use'.center(line_width))
  puts 'Type "1" for addition'
  puts 'Type "2" for subtraction'
  puts 'Type "3" for multiplication'
  puts 'Type "4" for division'
  puts 'Type "5" for exponent'
  puts 'Type "6" for square root'
  puts 'Or type "exit" to quit'
  print 'Enter selection: '
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

 case arithmetic_operation_selection 
 when  '1'
    answer = first_number + second_number
    puts "#{first_number} plus #{second_number} equals #{answer}"
 when '2'
    answer = first_number - second_number
    puts "#{first_number} minus #{second_number} equals #{answer}"
 when '3'
    answer = first_number * second_number
    puts "#{first_number} multiplied by #{second_number} equals #{answer}"
 when '4'
    answer = first_number / second_number
    puts "#{first_number} divided by #{second_number} equals #{answer}"
 when '5'
    answer = first_number ** second_number
    puts "#{first_number} to the power #{second_number} is #{answer}"
 when '6'
    answer = Math.sqrt(first_number)
    puts "The square root of #{first_number}  is #{answer}."
  end
end

puts
puts ('Thank you. Please come again.'.center(line_width))
puts border * line_width