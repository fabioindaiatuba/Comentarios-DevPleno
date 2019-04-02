import React from 'react';
import { shallow } from 'enzyme'

import NewComment from './NewComment'

describe('<New Comment />', () => {
    it('should handle changes in textarea ', () => {
        const wrapper = shallow(<NewComment />)
        const event = {
            target: { value: 'test'}
        }
        wrapper.find('textarea').simulate('change', event)
        //testa se o state é igual a test
        expect(wrapper.state().newComment).toBe('test')
    })
    it('should call sendComment on Button click', () => {
        const sendComment = jest.fn()
        const wrapper = shallow(<NewComment sendComment={sendComment}/>)
        const event = {
            target: { value: 'test'}
        }
        wrapper.find('textarea').simulate('change', event)
        wrapper.find('button').simulate('click', event)
        //testa se funçao mockada foi chamada 
        expect(sendComment).toBeCalledWith('test')
        //Esse teste é mesmo do de cima chamado de forma diferente
        expect(sendComment.mock.calls[0][0]).toBe('test')
        //Testa se state limpou
        expect(wrapper.state().newComment).toBe('')
    })
})