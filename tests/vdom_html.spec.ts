import { } from 'jasmine';
import app from '../index';

const model = 'y';
const view = _ => `<div>${_}</div>`;
const update = {
  hi: (_, val) => val
}

document.body.removeChild(document.body.firstChild);
app.start(document.body, model, view, update);

describe('vdom-html', () => {

  let element;
  beforeEach(()=>{
    element = document.createElement('div');
    document.body.appendChild(element);
    app.start(element, model, view, update);
  });

  it('should create first child element', () => {
    expect(element.firstChild.nodeName).toEqual('DIV');
    expect(element.firstChild.textContent).toEqual('y');
  });

  it('should re-create child element', () => {
    element.removeChild(element.firstChild);
    app.run('hi', 'yy');
    expect(element.firstChild.nodeName).toEqual('DIV');
    expect(element.firstChild.textContent).toEqual('yy');
  });

  it('should update child element', () => {
    app.run('hi', 'yyy');
    expect(element.firstChild.nodeName).toEqual('DIV');
    expect(element.firstChild.textContent).toEqual('yyy');
  });

});