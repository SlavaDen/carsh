import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UsersList from './UsersList';
import { USERS_MOCK } from '@/__mocks__/users';

describe('UsersList component tests', () => {
  it('correct paint component', () => {
    render(<UsersList users={USERS_MOCK} />);
    expect(screen.getByText(/Terry/i)).toBeInTheDocument();
    expect(screen.getByTestId('user-list')).toBeInTheDocument();
  });
});
