class FilterParams {
  static getFieldWithoutFilterArrayText(field: string) {
    return field.replace('filter[', '').replace(']', '');
  }

  static getSearchParamsList(searchParams: Record<string, string>) {
    if (searchParams) {
      const searchEntries = Object.entries(searchParams).map(
        ([field, value]) => ({
          field: this.getFieldWithoutFilterArrayText(field),
          value,
        })
      );
      return searchEntries;
    } else {
      return [];
    }
  }

  static getFormattedFilterParam(field: unknown, value: string | null) {
    return { [`filter[${field}]`]: value };
  }
}

export default FilterParams;
