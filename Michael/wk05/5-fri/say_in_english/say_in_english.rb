require'pry'

class Say

  def initialize(number)
    @number = number
    @ones = [
      "zero", 
      "one", 
      "two", 
      "three", 
      "four", 
      "five", 
      "six", 
      "seven", 
      "eight", 
      "nine"]
    @teens = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen", 
      "nineteen"]
    @tens = {
      2 => "twenty",
      3 => "thirty",
      4 => "fourty",
      5 => "fifty",
      6 => "sixty",
      7 => "seventy",
      8 => "eighty",
      9 => "ninety"}
  end

  def in_english
    if !@number.between?(0,99)
      puts "Number must be between 0 and 99, inclusive."
    elsif @number/10 == 0
      puts @ones[@number%10]
    elsif @number/10 == 1
      puts @teens[@number%10]
    elsif (@number/10) >=2
      puts over_nineteen(@number)
    end
  end

  def over_nineteen(number)
    str = ""
    if (number%10).nonzero?
      str = @tens[number/10] + '-' + @ones[number%10]
    else 
      str = @tens[number/10]
    end
  end

end

Say.new(0).in_english
Say.new(14).in_english
Say.new(50).in_english
Say.new(98).in_english
Say.new(-1).in_english
Say.new(100).in_english

puts 'thats all'