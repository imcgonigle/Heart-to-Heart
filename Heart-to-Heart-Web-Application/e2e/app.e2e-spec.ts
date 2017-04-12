import { HeartToHeartWebApplicationPage } from './app.po';

describe('heart-to-heart-web-application App', () => {
  let page: HeartToHeartWebApplicationPage;

  beforeEach(() => {
    page = new HeartToHeartWebApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
