def get_city_from_public_health_unit(public_health_unit):
    # http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx
    if 'Ajax' in public_health_unit:
        return 'Ajax'
    if 'Brant' in public_health_unit:
        return 'Brant'
    if 'Chatham Kent' in public_health_unit:
        return 'Chatham Kent'
    if 'Durham' in public_health_unit:
        return 'Durham'
    if 'Eastern Ontario' in public_health_unit:
        return 'Cornwall'
    if 'Grand River Hospital' in public_health_unit:
        return 'Kitchener'
    if 'Grey Bruce' in public_health_unit:
        return 'Grey Bruce'
    if 'Haliburton' in public_health_unit:
        return 'Haliburton'
    if 'Halton' in public_health_unit:
        return 'Halton'
    if 'Hamilton' in public_health_unit:
        return 'Hamilton'
    if 'Hastings Prince Edward' in public_health_unit:
        return 'Hastings Prince Edward'
    if 'Huron Perth' in public_health_unit:
        return 'Stratford'
    if 'Kingston' in public_health_unit:
        return 'Kingston'
    if 'London' in public_health_unit:
        return 'London'
    if 'Mackezie' in public_health_unit:
        return 'Richmond Hill'
    if 'Mississauga' in public_health_unit:
        return 'Mississauga'
    if 'Mount Sinai' in public_health_unit:
        return 'Toronto'
    if 'Niagara' in public_health_unit:
        return 'Niagara'
    if 'Northwestern' in public_health_unit:
        return 'Kenora'
    if 'North York' in public_health_unit:
        return 'Toronto'
    if 'Ottawa' in public_health_unit:
        return 'Ottawa'
    if 'Peel' in public_health_unit:
        return 'Peel'
    if 'Peterborough' in public_health_unit:
        return 'Peterborough'
    if 'Porcupine' in public_health_unit:
        return 'Porcupine'
    if 'Simcoe' in public_health_unit:
        return 'Simcoe'
    if 'Scarborough' in public_health_unit:
        return 'Scarborough'
    if 'Southlake' in public_health_unit:
        return 'Newmarket'
    if 'Sudbury' in public_health_unit:
        return 'Sudbury'
    if 'Sunnybrook' in public_health_unit:
        return 'Toronto'
    if 'Toronto' in public_health_unit:
        return 'Toronto'
    if 'Waterloo' in public_health_unit:
        return 'Waterloo'
    if 'York' in public_health_unit:
        return 'York'

    return public_health_unit
