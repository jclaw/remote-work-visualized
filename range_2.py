def range_2(start, end):
    return [] if start > end else [start] + range_2(start + 2, end)
