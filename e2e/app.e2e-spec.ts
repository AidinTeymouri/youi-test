import { YouiTestPage } from './app.po';

describe('youi-test App', () => {
  let page: YouiTestPage;

  beforeEach(() => {
    page = new YouiTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
