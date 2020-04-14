import wget


def string_to_int(string_value):
    tmp = string_value.replace(',', '')
    try:
        return int(tmp)
    except ValueError:
        return 0


def download_data(from_url, save_as):
    return wget.download(from_url, save_as)
