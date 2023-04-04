import {fireEvent, render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = ()=>{
    return(
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTodo=(todos)=>{
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button');
    todos.map((todo)=>{
        fireEvent.change(inputElement,{target:{value:todo}});
        fireEvent.click(buttonElement)
})
}

describe('first Integration testing of todo app',()=>{
    test('todo',async()=>{
        render(<MockTodo />);
        addTodo(['Integration testing']);
        
        const todoElement = screen.getByText(/Integration testing/i);
        expect(todoElement).toBeInTheDocument();
    })

    test('add todos',async()=>{
        render(<MockTodo />);
        addTodo(['Unit testing','Integration testing']);
        const todoElements = screen.getAllByTestId('todo');
        expect(todoElements.length).toBe(2);
    })

    test('task should not have completed class when initially rendered',async()=>{
        render(<MockTodo />);
        addTodo(['Going for shopping']);
        const todoElements = screen.getByText('Going for shopping');
        expect(todoElements).not.toHaveClass('todo-item-active');
    })

    test('task should have completed class when task clicked',async()=>{
        render(<MockTodo />);
        addTodo(['Going for shopping']);
        const todoElements = screen.getByText('Going for shopping');
        fireEvent.click(todoElements);
        expect(todoElements).toHaveClass('todo-item-active');
    })
})

