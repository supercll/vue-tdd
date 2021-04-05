import { mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "lc";
    // shallowMount 浅渲染，只渲染组件的一层，不关心子组件，适用于单元测试
    // mount 渲染所有组件，适用于继承测试
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
    expect(wrapper.props("msg")).toEqual(msg);
    // expect(wrapper.findAll("lc").length).toBe(1);
  });

  it("组件渲染正常", () => {
    // 自动快照测试
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: "lc" }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
