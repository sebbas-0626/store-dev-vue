declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // Use unknown for the generic props to avoid implicit any
  // Use object instead of {} to avoid @typescript-eslint/ban-types warnings
  const component: DefineComponent<object, object, unknown>;
  export default component;
}
