import { Angular2RoutesMusicPage } from './app.po';

describe('angular2-routes-music App', () => {
  let page: Angular2RoutesMusicPage;

  beforeEach(() => {
    page = new Angular2RoutesMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
