/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {

    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined and not empty', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it('have a URL link defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).toBeGreaterThan(0);
      });
    });

    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */


    it('have a name defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).toBeGreaterThan(0);
      });

    });

  });

  /* New test suite named "The menu" */

  describe('The menu', function() {

    //   /* Test that ensures the menu element is
    //    * hidden by default.

    it('is hidden by default', function() {
      const bodyClass = document.body.classList.contains("menu-hidden");

      expect(bodyClass).toBe(true);
    });


    /* Test that ensures the menu changes
     * visibility when the menu icon is clicked with two expectations: does the menu display when
     * clicked and does it hides when clicked again.
     */

    it('changes visibility on click', function() {
      let body = document.body.classList;


      // first click on menu-icon-link to see menu --> class menu-hidden disappears

      $('a.menu-icon-link').click();
      expect(body).not.toContain('menu-hidden');

      // second click on menu-icon-link to see menu --> class menu-hidden appears

      $('a.menu-icon-link').click();
      expect(body).toContain('menu-hidden');

    });

  });

  /* New test suite named "Initial Entries" */

  describe("Initial Entries", function() {
    let feedLength;

    /* Test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    beforeEach(function(done) {
      loadFeed(0, function() {
        feedLength = $('.feed .entry').length;
        done();

      });
    });

    it('loads at least one entry', function(done) {

      expect(feedLength).toBeGreaterThan(0);
      done();
    });
  });

  /* New test suite named "New Feed Selection" */

  describe("New Feed Selection", function() {
    let oldFeed,
      newFeed;

    /* Test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    beforeEach(function(done) {
      loadFeed(0, function() {
        oldFeed = $('.feed').html;


        loadFeed(1, function() {
          newFeed = $('.feed').html;
          done();
        });

      });

      it('changes content at load', function(done) {

        expect(newFeed !== oldFeed).toBe(true);
        done();
      });

    });
  });

}());
