/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).

describe("Sample tests", () => {
  it ('h = 3.0, bounce = 0.66, window = 1.5', () => {
    assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
  });
    
  it ('h = 30.0, bounce = 0.66, window = 1.5', () => {
    assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
  });
  
  it ('h = 3.0, bounce = 1.0, window = 1.5', () => {
    assert.strictEqual(bouncingBall(3.0, 1.0, 1.5), -1);
  });
});
  
 */

function bouncingBall(h: number, bounce: number, window: number) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 0
    while (h > window) {
      h *= bounce
      h > window ? (count += 2) : count++
    }
    return count
  } else {
    return -1
  }
}
console.log(bouncingBall(3.0, 0.66, 1.5))

/**
h = 2, bounce = 0.5, window = 1
h = 3, bounce = 0.66, window = 1.5
h = 30, bounce = 0.66, window = 1.5
h = 30, bounce = 0.75, window = 1.5
h = 30, bounce = 0.4, window = 10
h = 40, bounce = 0.4, window = 10
h = 10, bounce = 0.6, window = 10
h = 40, bounce = 1, window = 10
h = -5, bounce = 0.66, window = 1.5
h = 5, bounce = -1, window = 1.5
h = 4, bounce = 0.25, window = 1

const bouncingBall=(h, b, w)=>(b>=1 || h<w || b<=0) ? -1 : Math.ceil(Math.log(w/h)/Math.log(b))*2-1;s

const bouncingBall = (h, b, w) => (h <= 0 || b <= 0 || b >= 1 || w >= h) ? -1 : 2 + bouncingBall(h*b, b, w);
 */
