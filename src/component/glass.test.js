import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Glass from './glass';
import { BrowserRouter } from 'react-router-dom';


const Mockk = () => {
    return(
    <BrowserRouter>
    <Glass/>
    </BrowserRouter>
    )
}

test('to check one detail is called', async  () => {
    render(<Mockk/>);
    const count = await screen.findByTestId("user-1");
    // console.log(count.length);
    expect(count).toBeInTheDocument();
  });


  test('to check details is called', async  () => {
    render(<Mockk/>);
    const check= await screen.findAllByTestId(/user/i);
    // console.log(count.length);
    expect(check.length).toBe(2);
  });