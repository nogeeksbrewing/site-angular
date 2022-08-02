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

    recipe: Recipe;
}

export interface Recipe {
    name: string;
    tags: string[];
}

export const BATCHES: Batch[] = [
    {
        'id': 'yuCBOFDiFo7qdhAd9kWaH72LWfo8jM',
        'name': 'Wiggle & Grunt',
        'number': 94,
        'status': 'Planning',
        'brewer': 'Allan Lewis',
        'date': 1660363200000,
        'recipe': {
            'name': 'Wiggle & Grunt',
            'tags': ['ngb']
        }
    }
];