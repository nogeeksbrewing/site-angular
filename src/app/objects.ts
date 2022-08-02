export interface Brewery {
    name: string;
    location: string;
    info: string;
    contact: string;
    // TODO - Move these
    futureBatches: string;
    presentBatches: string;
    pastBatches: string;
}

export const BREWERY: Brewery = {
    name: 'No Geeks Brewing',
    location: 'Hoboken, NJ',
    info: 'since 2018',
    contact: 'allan@nogeeksbrewing.com',
    pastBatches: 'Archives',
    presentBatches: 'Now Pouring',
    futureBatches: 'Coming Soon'
};

export interface Batch {
    name: string;
    number: string;
}

export const BATCHES: Batch[] = [
    {
        name: 'Wiggle & Grunt', 
        number: '#94'
    }, {
        name: 'Boleyn', 
        number: '#95'
    }];