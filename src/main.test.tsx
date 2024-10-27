function add(x: number, y: number): number {
    return x + y;
}

test('add 함수', () => {
    expect(add(1, 2)).toBe(3);
});

const context = describe;

describe('add 함수', () => {
    context('두 개의 양수가 주어졌을 때', () => {
        it('항상 두 개의 숫자보다 큰 값을 돌려준다.', () => {
            expect(add(1, 2)).toBeGreaterThan(1);
        });
    })
});