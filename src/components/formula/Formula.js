import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($el) {
    super($el, {
      // name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHtml() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    // console.log(this.$root);
    console.log('onInput Formula', event);
  }

  onClick(event) {
    console.log('onClick Formula', event);
  }
}
