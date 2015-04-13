describe('JavaBuzz', function() {
  var javabuzz;

  describe('knows when a number is', function() {
    it('divisible by three', function() {
      javabuzz = new JavaBuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by three', function() {
      javabuzz = new JavaBuzz();
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });
});
