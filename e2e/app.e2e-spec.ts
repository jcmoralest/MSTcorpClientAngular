import { ClientbasicPage } from './app.po';

describe('clientbasic App', function() {
  let page: ClientbasicPage;

  beforeEach(() => {
    page = new ClientbasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
