context("ui 조작 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500");
  });

  describe("계산기는 2개의 숫자에 대해 덧셈이 가능하다.", () => {
    it("1) 2 + 3의 결과 값은 5이다.", () => {
      cy.get(`[data-cy="2"]`).click();
      cy.get(`[data-cy="+"]`).click();
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="="]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 5);
    });
    it("2) 2 + 3의 결과 값은 5이다.", () => {
      cy.get(`[data-cy="2"]`).click();
      cy.get(`[data-cy="+"]`).click();
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="="]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 5);
    });
  });
  describe("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
    it("1) 4 - 3의 결과 값은 1이다.", () => {
      cy.get(`[data-cy="4"]`).click();
      cy.get(`[data-cy="-"]`).click();
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="="]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 1);
    });
    it("2) 1 - 3의 결과 값은 -2이다.", () => {
      cy.get(`[data-cy="1"]`).click();
      cy.get(`[data-cy="-"]`).click();
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="="]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", -2);
    });
  });
  describe("2개의 숫자에 대해 곱셈이 가능하다.", () => {
    it("1) 1 * 3의 결과 값은 3이다.", () => {
      cy.get(`[data-cy="1"]`).click();
      cy.get(`[data-cy="X"]`).click();
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="="]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 3);
    });
    it("2) 0 * 3의 결과 값은 0이다.", () => {
      cy.get(`[data-cy="0"]`).click();
      cy.get(`[data-cy="X"]`).click();
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="="]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 0);
    });
  });
  describe("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
    it("1) 3 / 3의 결과 값은 1이다.", () => {
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="/"]`).click();
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="="]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 1);
    });
  });
  describe("AC(All Clear)버튼을 누르면 0으로 초기화 한다.", () => {
    it("1) AC(All Clear)버튼을 누르면 0으로 초기화 한다.", () => {
      cy.get(`[data-cy="AC"]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 0);
    });
    it("2) 1 / 3 누른 후에 AC 버튼을 누르면 total을 0으로 초기화 한다.", () => {
      cy.get(`[data-cy="1"]`).click();
      cy.get(`[data-cy="/"]`).click();
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="AC"]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 0);
    });
  });
  describe("숫자는 한번에 최대 3자리 수까지 입력 가능하다.", () => {
    it("1) 1111을 입력하면 111이 나와야 한다.", () => {
      cy.get(`[data-cy="1"]`).click();
      cy.get(`[data-cy="1"]`).click();
      cy.get(`[data-cy="1"]`).click();
      cy.get(`[data-cy="1"]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 111);
    });
  });
  describe("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
    it("1) 1 / 3 을 입력하면, 0이 나와야 한다.", () => {
      cy.get(`[data-cy="1"]`).click();
      cy.get(`[data-cy="/"]`).click();
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="="]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 0);
    });
    it("2) -1 / 3 을 입력하면, 0이 나와야 한다.", () => {
      cy.get(`[data-cy="-"]`).click();
      cy.get(`[data-cy="1"]`).click();
      cy.get(`[data-cy="/"]`).click();
      cy.get(`[data-cy="3"]`).click();
      cy.get(`[data-cy="AC"]`).click();
      cy.get(`[data-cy="total"]`).should("have.text", 0);
    });
  });
});
