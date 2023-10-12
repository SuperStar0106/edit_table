import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/type';

type TableViewStyleProps = StyledComponentProps & {};

export const TableViewSytle = styled('div')<TableViewStyleProps>(
    ({ theme }) => {
        const customTheme = theme as CustomTheme;
        return {
            width: '100%',
            height: '100vh',
            backgroundColor: customTheme.colors.primary80,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            flexDirection: 'column'
        };
    }
);