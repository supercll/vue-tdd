import { mount, shallowMount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList/TodoList.vue'

describe('HelloWorld.vue', () => {
  it('组件渲染正常', () => {
    // 自动快照测试
    const wrapper = shallowMount(TodoList)
  })
})
