import { BooksLibraryAppPage } from './app.po';

describe('books-library-app App', () => {
  let page: BooksLibraryAppPage;

  beforeEach(() => {
    page = new BooksLibraryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
