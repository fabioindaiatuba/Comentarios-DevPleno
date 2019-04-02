import React from 'react';
import { render } from 'enzyme'

import Comment from './Comment'

it('should render text', () => {
   const comment = {
       comment: 'test'
   } 
   const wrapper = render(<Comment c={comment} />)
   
   expect(wrapper.text()).toBe('Comentário: test') 
})

it('should render empty', () => {
    const wrapper = render(<Comment />)
    
    expect(wrapper.text()).toBe('Comentário: vazio') 
 })