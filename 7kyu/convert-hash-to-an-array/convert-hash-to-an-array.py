def convert_hash_to_array(hash):
    return sorted([[key, value] for key, value in hash.items()])

print(convert_hash_to_array({'a': 1, 'b': 2, 'c': 3}))