import app from '../../index'

const model = 'hello world';

const h = app.createElement;
const view = (val) => {
  return h('div', {},
    h('div', {}, val),
    h('input', {
      value: val,
      oninput: function() { app.run('render', this.value)}
    }, null)
  );
};

const update = {
  'render': (_, val) => val,
};

const element = document.getElementById('my-app');
const component = app.start(element, model, view, update);


