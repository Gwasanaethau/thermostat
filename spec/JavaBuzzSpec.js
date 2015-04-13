describe('JavaBuzz', function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new JavaBuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by three', function() {
      expect(javabuzz._isDivisibleBy(3, 3)).toBe(true);
    });

    it('divisible by five', function() {
      expect(javabuzz._isDivisibleBy(5, 5)).toBe(true);
    });

    it('divisible by fifteen', function() {
      expect(javabuzz._isDivisibleBy(15, 15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by three', function() {
      expect(javabuzz._isDivisibleBy(1, 3)).toBe(false);
    });

    it('divisible by five', function() {
      expect(javabuzz._isDivisibleBy(1, 5)).toBe(false);
    });

    it('divisible by fifteen', function() {
      expect(javabuzz._isDivisibleBy(1, 15)).toBe(false);
    });
  });
});
