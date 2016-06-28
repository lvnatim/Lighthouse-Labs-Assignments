def non_duplicated_values(values)
  counts = Hash.new(0)
  returned_Array = []
  values.each do |i|
    counts[i] += 1
  end
  counts.each do |number, count|
    returned_Array.push(number) if count == 1
  end
  returned_Array
end