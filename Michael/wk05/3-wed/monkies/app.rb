require'pry'
require_relative'monkey.rb'

names = ["Mike", "Dev", "Meg", "Tilda", "Nic", "Shaz", "Cisco", "Kaz", "Gio" , "Marti", "Kash", "Rief", "DT"]
species = ["mandrill", "capuchin", "proboscis monkey", "gelada", "macaque", "pygmy marmoset", "baboon", "howler monkey"]

def random(array)
  return array[rand(1..array.length)]
end

park_monkey = Monkey.new(random(names), random(species))


puts "Welcome to the Monkey Park"
puts "You see a monkey"
loop do
 print "Feed, Talk, or say Bye? "
 action = gets.chop
 
 if action[0].downcase == "b"
  break
 elsif action[0].downcase == "t"
  puts park_monkey.introduce
 elsif action[0].downcase == "f"
  print "What will you give the monkey? "
  food = gets.chomp
  park_monkey.eat(food)
 end
end

puts "We hope you enjoyed your time at the monkey park."