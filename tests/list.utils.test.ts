import { sortByKey, findByField } from '../src/list.utils';

const mockList = () => [{ name: 'Galloway, Ayan', score: 630 },
{ name: 'Mcgrath, Ian', score: 750 }, { name: 'Farrell, Beckett', score: 750 },
{ name: 'Craig, Luke', score: 401 }, { name: 'Kelley, Ty', score: 555 }];

const sortedByName = [{ name: 'Craig, Luke', score: 401 },
{ name: 'Farrell, Beckett', score: 750 }, { name: 'Galloway, Ayan', score: 630 },
{ name: 'Kelley, Ty', score: 555 }, { name: 'Mcgrath, Ian', score: 750 }];

const sortedByScore = [{ name: 'Craig, Luke', score: 401 },
{ name: 'Kelley, Ty', score: 555 }, { name: 'Galloway, Ayan', score: 630 },
{ name: 'Mcgrath, Ian', score: 750 }, { name: 'Farrell, Beckett', score: 750 }];

describe('[List]', () => {
    describe('sortByKey(list, key)', () => {
        test('Sorts list by "name" key', () => {
            expect(sortByKey([...mockList()], 'name')).toEqual(sortedByName);
        });

        test('Sorts list by "score" key', () => {
            expect(sortByKey([...mockList()], 'score')).toEqual(sortedByScore);
        });
    });

    describe('findByField(list, key, value)', () => {
        test('Find item with "score"=750', () => {
            expect(findByField([...mockList()], 'score', 750)).toEqual(mockList()[1]);
        });

        test('Find item with "name"="Craig, Luke"', () => {
            expect(findByField([...mockList()], 'name', 'Craig, Luke')).toEqual(mockList()[3]);
        });

        test('Returns undefined with "name"="Allen, Luke"', () => {
            expect(findByField([...mockList()], 'name', 'Allen, Luke')).toBeUndefined();
        });
    });
});