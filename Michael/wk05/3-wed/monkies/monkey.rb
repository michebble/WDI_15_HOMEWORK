require'pry'

class Monkey
  def initialize(name, species)
    @name = name
    @species = species
    @foods_eaten = []
  end

  def eat(food)
    if food.end_with?("s")
      @foods_eaten << food
    elsif food.downcase.start_with?("a","e","i","o","u")
      @foods_eaten << 'an ' + food
    elsif
      @foods_eaten << 'a ' + food
    end
  end

  def introduce
    if @foods_eaten.empty?
      food_sentence = 'I am hungry!'
    else
      food_string = make_string(@foods_eaten)
      food_sentence = "I had #{food_string} for brunch."
    end
    puts "Hi my name is #{@name}. I am a #{@species} and #{food_sentence}"
  end

  private

  def make_string(array)
    if array.length > 1
      return add_and(array)
    else
      return array.join(", ")
    end
  end

  def add_and(array)
    output_string = array.join(", ").reverse!
    output_string[output_string.index(" ,")] = " dna "
    return output_string.reverse!
  end

end
