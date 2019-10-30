describe("Add-Tab controlled", () => {
    beforeAll(async () => {
      await page.goto(`${PREFIX}/controlled/add-tab`);
    });
  
    it("should correctly add new tab", async () => {
      await page.reload();
  
      expect(await page.screenshot()).toMatchImageSnapshot();

      const button = await page.$("button");
      await button.click();

      expect(await page.screenshot()).toMatchImageSnapshot();

      await button.click();

      expect(await page.screenshot()).toMatchImageSnapshot();
    });
  });
  