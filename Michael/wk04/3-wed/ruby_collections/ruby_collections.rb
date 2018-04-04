# Arrays
# Starting with the following array...

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in planeteers.

puts planeteers[1]
puts
#Add "Heart" to the end of planeteers.

planeteers.push('Heart')
puts planeteers
puts
#Remove "Captain Planet" from the array (without using pop or unshift).

planeteers.slice!(2)
puts planeteers
puts
#Combine planeteers with 
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] 
# and save the result in a variable called heroes.

heroes =planeteers.concat(rangers)
puts heroes
puts
#Alphabetize the contents of heroes using a method. The Ruby documentation might help.

heroes.sort!
puts heroes
puts

#Randomize the contents of heroes using a method. The Ruby documentation might help.

heroes.shuffle!
puts heroes
puts

#Bonus
#Select a random element from heroes using a method. The Ruby documentation might help.

my_favourite_hero = heroes.sample
puts my_favourite_hero
puts
#Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.

the_b_team = heroes.select{ |first_letter| first_letter[0] == 'B' }
puts the_b_team


#Hashes
#Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.

ninja_turtle = {
  name: 'Michelangelo',
  weapon: "Nunchucks",
  radical: true
}


#Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.

ninja_turtle["age"] = 15




#Remove the radical key-value pair from ninja_turtle.

ninja_turtle.delete(:radical)

#Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).

ninja_turtle["pizza_toppings"] = ["cheese", "pepperoni", "peppers"]
puts ninja_turtle
#Access the first element of pizza_toppings.

puts ninja_turtle["pizza_toppings"].first

#Produce an array containing all of ninja_turtle's keys using a method. The Ruby documentation might help.

turtle_array = ninja_turtle.to_a


#Bonus
#Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. The Ruby documentation might help.

ninja_turtle.each_pair do |key, value|
  puts "#{key} is equal to #{value}"
end