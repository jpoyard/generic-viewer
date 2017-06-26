import { GenericViewerPage } from './app.po';

describe('generic-viewer App', () => {
  let page: GenericViewerPage;

  beforeEach(() => {
    page = new GenericViewerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Generic viewer !!');
  });
});
