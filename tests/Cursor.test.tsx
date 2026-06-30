import { render } from '@testing-library/react';
import Cursor from '../src/Cursor';

describe('Cursor', () => {
    it('applies the correct cursor style', () => {
        render(<Cursor type="pointer" />);
        expect(document.body.style.cursor).toBe('pointer');
    });

    it('resets cursor on unmount', () => {
        const { unmount } = render(<Cursor type="crosshair" />);
        unmount();
        expect(document.body.style.cursor).toBe('auto');
    });
});
