def get_city_from_public_health_unit(public_health_unit):
    # http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx
    if 'Toronto' in public_health_unit:
        return 'Toronto'
    if 'Sunnybrook' in public_health_unit:
        return 'Toronto'
    if 'North York' in public_health_unit:
        return 'Toronto'
    if 'Mount Sinai' in public_health_unit:
        return 'Toronto'
    if 'Hamilton' in public_health_unit:
        return 'Hamilton'
    if 'Peel' in public_health_unit:
        return 'Peel'
    if 'Ottawa' in public_health_unit:
        return 'Ottawa'
    if 'Scarborough' in public_health_unit:
        return 'Scarborough'
    if 'Mackezie' in public_health_unit:
        return 'Richmond Hill'
    if 'Halton' in public_health_unit:
        return 'Halton'
    if 'Ajax' in public_health_unit:
        return 'Ajax'
    if 'Waterloo' in public_health_unit:
        return 'Waterloo'
    if 'Haliburton' in public_health_unit:
        return 'Haliburton'
    if 'Simcoe' in public_health_unit:
        return 'Simcoe'
    if 'York' in public_health_unit:
        return 'York'
    if 'London' in public_health_unit:
        return 'London'
    if 'Sudbury' in public_health_unit:
        return 'Sudbury'
    if 'Northwestern' in public_health_unit:
        return 'Kenora'
    if 'Eastern Ontario' in public_health_unit:
        return 'Cornwall'
    if 'Niagra' in public_health_unit:
        return 'Niagra'
    if 'Huron Perth' in public_health_unit:
        return 'Stratford'
    if 'Southlake' in public_health_unit:
        return 'Newmarket'
    if 'Grand River Hospital' in public_health_unit:
        return 'Kitchener'
    if 'Mississauga' in public_health_unit:
        return 'Mississauga'

    return public_health_unit
