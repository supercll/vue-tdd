import { mount, shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'

describe('HelloWorld.vue', () => {
  it('Header 组件包括 input输入框', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    // exists 判断元素是否存在
    expect(input.exists()).toBe(true)
  })
  it('Header中的input初始值为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })
  it('Header中的input值的双向绑定', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('lc')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('lc')
  })
  it('Header中的input触发回车时，若值为空，不作处理', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('')
    input.trigger('keyup.enter')
    // 不应该触发事件
    expect(wrapper.emitted().add).toBeFalsy()
  })
  it('Header中的input触发回车时，若值不为空，则触发事件', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('lc')
    input.trigger('keyup.enter')
    // 不应该触发事件
    expect(wrapper.emitted().add).toBeTruthy()
  })
  it('Header中的input触发回车时，若值不为空，则触发事件，同时清空value', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('lc')
    input.trigger('keyup.enter')
    // 不应该触发事件
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBe('')
  })
})
