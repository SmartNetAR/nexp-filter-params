import { PaginationParams } from './interfaces';

class Pagination {
  static getNextPage(nextUrl: string): PaginationParams {
    const url = new URL(nextUrl);
    const params = new URLSearchParams(url.search);

    const nextPage = {
      limit: params.get('pagination[limit]'),
      offset: params.get('pagination[offset]'),
    };

    return nextPage;
  }
}

export default Pagination;
