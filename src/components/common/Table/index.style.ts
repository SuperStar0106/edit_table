import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/type';

type TableComponentStyleProps = StyledComponentProps & {};

export const TableComponentStyle = styled('table')<TableComponentStyleProps>(
    ({ theme }) => {
        const customTheme = theme as CustomTheme;
        return {
            width: '80%',
            height: '100vh',
            backgroundColor: customTheme.colors.primary80,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            color: customTheme.colors.white,

            '& table': {
                borderCollapse: 'collapse',
                width: '100%',
            },

            '& th, td': {
                padding: 8,
                textAlign: 'left',
                border: '1px solid ' + customTheme.colors.primary40,
            },

            '& tr:hover': {
                backgroundColor: customTheme.colors.primary60,
            },

            '.div_align': {
                display: 'flex', 
                width: '60%',
                alignItems: 'center', 
                textAlign: 'center', 
                justifyContent: 'space-between'
            }
        };
    }
);