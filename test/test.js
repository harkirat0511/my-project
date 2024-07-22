// test/test.js
(async () => {
    const { expect } = await import('chai');
    
    describe('Sample Test', function() {
      it('should return true', function() {
        expect(true).to.be.true;
      });
    });
  })();
  