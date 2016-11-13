import simulateIfPresent from './simulateIfPresent';

let clickLink = (targetText, targetDom) => {
  let targetElement = targetDom.findWhere(n => {
    return n.type() === 'a' && n.text() === targetText;
  });
  simulateIfPresent(targetElement, 'click', { button: 0 });
};

export default clickLink;
