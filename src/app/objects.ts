export interface Brewery {
    name: string;
    location: string;
    info: string;
    contact: string;
}

export const BREWERY: Brewery = {
    name: 'No Geeks Brewing',
    location: 'Hoboken, NJ',
    info: 'since 2018',
    contact: 'allan@nogeeksbrewing.com',
};

export interface Batch {
    id: string;
    name: string;
    number: number;
    status: string;
    brewer: string;
    date: number;
    style: string;
    category: string;

    recipe: Recipe;
}

export interface Recipe {
    name: string;
    tags: string[];
}

export const PLANNING: Batch[] = [
    {
        'id': 'yuCBOFDiFo7qdhAd9kWaH72LWfo8jM',
        'name': 'Wiggle & Grunt',
        'number': 94,
        'status': 'Planning',
        'brewer': 'Allan Lewis',
        'date': 1660363200000,
        'style': 'Double IPA',
        'category': '22A',
        'recipe': {
            'name': 'Wiggle & Grunt',
            'tags': ['ngb']
        }
    }
];

export const COMPLETED: Batch[] = [
    {
        "id": "hWPoHI78Kv5kF8jkzP7cXgsPasdFGr",
        "name":"Tickle",
        "number":93,
        "status":"Completed",
        "brewer": 'Allan Lewis',
        "date":1656216000000,
        'style': 'Gose',
        'category': '27A',
        "recipe":{"name":"Tickle", tags: []}
    }, {
        "id":"JHVFUba6Wy47h1vlp5dTPIukJ4GRNK",
        "name":"Boleyn (Bourbon/Oak)",
        "number":91,
        "status":"Completed",
        "brewer":"Allan Lewis",
        "date":1651377600000,
        'style': 'English Barleywine',
        'category': '17D',
        "recipe":{"name":"Boleyn", tags: []}
    }, {
        "id":"OhzFLQBzNr3KrgISTtKoGR5rSN1pMO",
        "name":"Neely",
        "number":89,
        "status":"Completed",
        "brewer":"Allan Lewis",
        "date":1646456400000,
        'style': 'Oud Bruin',
        'category': '23C',
        "recipe":{"name":"Neely", tags: []}
    }
];

/*
*/