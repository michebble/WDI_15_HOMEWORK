class Integer

  def in_english
    ones = [
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
    teens = [
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
    tens = {
      2 => "twenty",
      3 => "thirty",
      4 => "fourty",
      5 => "fifty",
      6 => "sixty",
      7 => "seventy",
      8 => "eighty",
      9 => "ninety"}
    if !self.between?(0,99)
      puts "Number must be between 0 and 99, inclusive."
    elsif self/10 == 0
      puts ones[self%10]
    elsif self/10 == 1
      puts teens[self%10]
    elsif (self/10) >=2
      puts over_nineteen(self,tens, ones)
    end
  end

  def over_nineteen(number, tens, ones)
    str = ""
    if (number%10).nonzero?
      str = tens[number/10] + '-' + ones[number%10]
    else 
      str = tens[number/10]
    end
  end

end
