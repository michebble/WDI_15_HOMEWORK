# Create a variable named days_of_the_week as an array of the following:

days_of_the_week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

# 2. My calendar says the first day is Sunday...

new_first_day = days_of_the_week.pop

days_of_the_week.unshift(new_first_day)
puts days_of_the_week
puts
# 3. Create a new array of the days of the week:
types_of_days = []
types_of_days[0] = days_of_the_week.slice!(1..5)
types_of_days[1] = days_of_the_week
puts 
puts types_of_days[0]
puts
puts types_of_days[1]

#  4. Remove either the weekdays or the weekends
types_of_days.pop
puts
puts types_of_days
puts

# 5. Sort the remaining days alphabetically
puts types_of_days[0].sort!


