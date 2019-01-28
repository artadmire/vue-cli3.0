import { use } from '../utils';
import Loading from '../loading';

var _use = use('button'),
    sfc = _use[0],
    bem = _use[1];

export default sfc({
  props: {
    text: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  },
  render: function render(h) {
    return h(this.tag, {
      "attrs": {
        "type": this.nativeType,
        "disabled": this.disabled
      },
      "class": bem([this.type, this.size, {
        block: this.block,
        plain: this.plain,
        round: this.round,
        square: this.square,
        loading: this.loading,
        disabled: this.disabled,
        'bottom-action': this.bottomAction
      }]),
      "on": {
        "click": this.onClick
      }
    }, [this.loading ? h(Loading, {
      "attrs": {
        "size": "20px",
        "color": this.type === 'default' ? undefined : ''
      }
    }) : h("span", {
      "class": bem('text')
    }, [this.$slots.default || this.text])]);
  }
});