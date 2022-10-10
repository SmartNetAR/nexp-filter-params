import { Pagination } from '../Pagination';

test('get pagination object from next url api response', () => {
  const nextUrlApì =
    'https://my-domain.com/roles?pagination[limit]=6&pagination[offset]=6';
  const expectedPagination = { limit: '6', offset: '6' };
  expect(Pagination.getNextPage(nextUrlApì)).toEqual(expectedPagination);
});

test('get pagination object from encoded next url api response', () => {
  const nextUrlApì =
    'https://my-domain.com/roles?pagination%5Blimit%5D=6&pagination%5Boffset%5D=6';
  const expectedPagination = { limit: '6', offset: '6' };
  expect(Pagination.getNextPage(nextUrlApì)).toEqual(expectedPagination);
});
