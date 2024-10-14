import Vue from 'vue';
// vant 组件 按需引入
import {
  Button,
  Popup,
  Toast,
  Notify,
  Skeleton,
  Dialog,
  Form,
  Field,
  Uploader,
  Checkbox,
  Loading,
  Icon,
  TabbarItem,
  Tabbar,
  Swipe,
  SwipeItem,
  ImagePreview,
  Empty,
} from 'vant';

Notify.setDefaultOptions({
  duration: 2000,
});

Vue.use(Icon);
Vue.use(Loading);
Vue.use(Button);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(Notify);
Vue.use(Skeleton);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(Checkbox);
Vue.use(TabbarItem);
Vue.use(Tabbar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(ImagePreview);
Vue.use(Empty);
