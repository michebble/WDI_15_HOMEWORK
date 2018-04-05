print 'Enter filename: '
file_name =  gets.chomp

loc = IO.readlines(file_name)

print "#{loc.length} lines of code."