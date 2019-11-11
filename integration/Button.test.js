/* global page */
const globalPage = page;

describe('Button', () => {
  it('visually looks correct', async () => {
    // APIs from jest-puppeteer
    await globalPage.goto('http://localhost:9009/iframe.html?selectedKind=Button&selectedStory=with+text');
    const image = await globalPage.screenshot();

    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
});
