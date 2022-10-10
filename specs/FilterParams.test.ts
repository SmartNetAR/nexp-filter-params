import { FilterParams } from '../Filter';

test('get array fields from search params object', () => {
  const nextUrlApì = {
    'filter[name]': 'John',
    'filter[email]': 'john@mail.com',
  };
  const expectedSearchParamsList = [
    { field: 'name', value: 'John' },
    { field: 'email', value: 'john@mail.com' },
  ];

  expect(FilterParams.getSearchParamsList(nextUrlApì)).toEqual(
    expectedSearchParamsList
  );
});

test('get empty array when no searchParams', () => {
  const nextUrlApì = {};
  const expectedSearchParamsList = [];

  expect(FilterParams.getSearchParamsList(nextUrlApì)).toEqual(
    expectedSearchParamsList
  );
});

test('get formated Filter Param', () => {
  const field = 'name';
  const value = 'John';
  const expectedFormatFilterParam = {
    ['filter[name]']: 'John',
  };

  expect(FilterParams.getFormattedFilterParam(field, value)).toEqual(
    expectedFormatFilterParam
  );
});

test('get null value in formated Filter Param', () => {
  const field = 'name';
  const value = null;
  const expectedFormatFilterParam = {
    ['filter[name]']: null,
  };

  expect(FilterParams.getFormattedFilterParam(field, value)).toEqual(
    expectedFormatFilterParam
  );
});
