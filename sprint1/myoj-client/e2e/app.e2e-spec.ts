import { MyojClientPage } from './app.po';

describe('myoj-client App', function() {
  let page: MyojClientPage;

  beforeEach(() => {
    page = new MyojClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
