import { SurpriseMfPage } from './app.po';

describe('surprise-mf App', function() {
  let page: SurpriseMfPage;

  beforeEach(() => {
    page = new SurpriseMfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
