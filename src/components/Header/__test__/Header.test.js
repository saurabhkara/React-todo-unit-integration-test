import Header from '../Header';
import {render, screen} from '@testing-library/react';


//Get By query method

test('render header title and getting by text',()=>{
    render(<Header title='my Header' />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
})



// it('render header title  and getting by role',()=>{
//     render(<Header title='my Header' />);
//     const headingElement = screen.getByRole('heading');
//     expect(headingElement).toBeInTheDocument();
// })

it('render header title  and getting by text ...',()=>{
    render(<Header title='my Header' />);
    const headingElement = screen.getByRole('heading',{name:'my Header'});
    expect(headingElement).toBeInTheDocument();
})

test('get by title',()=>{
    render(<Header title='title'/>);
    const headerElement = screen.getByTitle('head');
    expect(headerElement).toBeInTheDocument();
})


test('get element by data-testid',async ()=>{
    render(<Header title="tile"/>);
    const headerElement = screen.getByTestId('header-1');
    expect(headerElement).toBeInTheDocument();
})


//Find By 
//for async code 
test('find by element ..',async ()=>{
    render(<Header  title={'title'}/>);
    const headerElement = await screen.findByRole('heading',{name:'title'});
    expect(headerElement).toBeInTheDocument();
})

//Query by
//It does not give error

test('Query by..',()=>{
    render(<Header title="Title"/>);
    const headerElement = screen.queryByRole('heading',{name:'Titlehhh'});
    expect(headerElement).not.toBeInTheDocument();
})

test('GetAllByRoles',()=>{
    render(<Header title='title'/>);
    const headerElements = screen.getAllByRole('heading');
    expect(headerElements.length).toBe(2);
})

