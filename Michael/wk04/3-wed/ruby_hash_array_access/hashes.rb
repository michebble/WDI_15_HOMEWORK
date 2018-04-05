# Array and Hash access
# A. Given the following data structure:
a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?

puts a[2]

# How would you add your name to the array?

a.push("Michael")

# B. Given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# How would you return the string "One"?

puts h[1]

# How would you return the string "Two"?

puts h[:two]


# How would you return the number 2?

puts h["two"]

# How would you add {3 => "Three"} to the hash?

h[3] = "Three"



# How would you add {:four => 4} to the hash?

h[:four] = 4
puts h

# C. Given the following data structure:
is = {true => "It's true!", false => "It's false"}
# What is the return value of is[2 + 2 == 4]?

#expected => "It's true!"
#actual      => "It's true!"

# What is the return value of is["Erik" == "Jonathan"]?

#expected => "It's false"
#actual      => "It's false"

# What is the return value of is[9 > 10]?

#expected => "It's false!"
#actual      => "It's false!"

# What is the return value of is[0]?

#expected => "It's false!"
#actual      => nil

# What is the return value of is["Erik"]?

#expected => "It's true!"
#actual      => nil

# D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?

users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?

users["Jonathan"][:favorite_numbers].push(7)

# How would you add yourself to the users hash?

users["Michael"] = {:twitter => "none", :favorite_numbers => [8,9,10]}

# How would you return the array of Erik's favorite numbers?

puts users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?

puts users["Erik"][:favorite_numbers].min

# How would you return an array of Anil's favorite numbers that are also even?

puts anil_favourite_even_numbers = users["Anil"][:favorite_numbers].select { |num| num.even?}

# How would you return an array of the favorite numbers common to all users?

common_favourite_numbers = users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]

#  How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
all_favourite_numbers = []
users.each_value do |user_name|
  all_favourite_numbers.push(user_name[:favorite_numbers])
end
puts all_favourite_numbers.flatten.uniq.sort
