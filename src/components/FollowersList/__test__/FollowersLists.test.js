import {render, screen} from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowerList =()=>{
    return(
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe('Follower list async test',()=>{

    beforeAll(()=>{
        console.log('Runs before all test')
    })

    beforeEach(()=>{
        console.log('Running before each tests');
    })

    afterEach(()=>{
        console.log('Runs after each test')
    })

    afterAll(()=>{
        console.log('Runs after all tests')
    })
    test('follower list', async ()=>{
        render(<MockFollowerList />);
        const followerItem = await screen.findByTestId('follower-item-0');
        screen.debug(followerItem)
        expect(followerItem).toBeInTheDocument();
    })

    test('follower lists', async ()=>{
        render(<MockFollowerList />);
        const followerItems = await screen.findAllByTestId(/follower-item/i);
        expect(followerItems.length).toBe(1);
    })
})