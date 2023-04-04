import {render, screen,fireEvent} from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn()

describe("add input functionality",()=>{

    test("should render input element",async ()=>{
        render(<AddInput setTodos={mockedSetTodo}  todos={[]}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    })

    test('should able to write into input', async ()=>{
        render(<AddInput setTodos={mockedSetTodo}  todos={[]}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement,{target:{value:'Learn unit and integration test'}});
        expect(inputElement.value).toBe('Learn unit and integration test');
    })

    test('Input element value should be empty after add button clicked', async()=>{
        render(<AddInput setTodos={mockedSetTodo} todos={[]}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement,{target:{value:'Learn unit and integration test'}});
        const buttonElement = screen.getByRole('button',{name:'Add'});
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe('')
    })
})  