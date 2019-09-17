import { SMARTBOARDPage } from './app.po';

describe('smartboard App', function() {
  let page: SMARTBOARDPage;

  beforeEach(() => {
    page = new SMARTBOARDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
