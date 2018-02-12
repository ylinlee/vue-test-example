import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import SimpleForm from '@/components/SimpleForm'

describe('SimpleForm.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(SimpleForm, {
      propsData: {
        btnName: 'Test Text'
      }
    })
    expect(wrapper.find('.inputValue').exists()).to.equal(true)
    expect(wrapper.find('.button').exists()).to.equal(true)
  })

  it('should set button text', () => {
    const customText = 'My Text'
    const wrapper = mount(SimpleForm, {
      propsData: {
        btnName: customText
      }
    })
    expect(wrapper.find('.button').text()).to.equal(customText)
  })

  it('should send click event', () => {
    const wrapper = mount(SimpleForm, {
      propsData: {
        btnName: 'Click'
      }
    })

    wrapper.find('.button').trigger('click')
    expect(wrapper.emitted().clickBtn).to.deep.equal([ [ 'default' ] ])
  })
})
