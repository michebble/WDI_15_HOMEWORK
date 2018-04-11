require'pry'

class Monkey
  def initialize(name, species)
    @name = name
    @species = species
    @foods_eaten = []
  end

  def eat(food)
    @foods_eaten << food
  end

  def introduce
    food_string = make_string(@foods_eaten)
    puts "Hi my name is #{@name}. I am a #{@species}. I had a #{food_string} for brunch."
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
    output_string = array.join(", a ").reverse!
    output_string[output_string.index(" ,")] = " dna "
    return output_string.reverse!
  end

end

binding.pry

puts 'ukiki bye bye'