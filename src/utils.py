

def string_to_int(string_value):
    tmp = string_value.replace(',', '')
    try:
        return int(tmp)
    except:
        return 0
