import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from './header';
import { BrowserRouter } from 'react-router-dom';


const Mock = () => {
    return(
    <BrowserRouter>
    <Home />
    </BrowserRouter>
    )
}
 
test('render items in the website', async () => {
  render(<Mock/>);
  const textElement = screen.getByText(/items/i);
  expect(textElement).toBeInTheDocument();
});

 