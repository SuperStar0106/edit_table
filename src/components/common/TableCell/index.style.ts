import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from '../../../styles/type';

type TableCellComponentStyleProps = StyledComponentProps & {
    clicking: boolean;
};

export const TableCellComponentStyle = styled('td')<TableCellComponentStyleProps>(
    ({ theme, ...props }) => {
        const { clicking } = {...props};

        const customTheme = theme as CustomTheme;

        return {
            // border: `1px solid ${clicking ? customTheme.colors.primary80 : '#000'}`,
            padding: '8px',
            cursor: 'pointer',
            backgroundColor: clicking ? customTheme.colors.primaryLight60 : customTheme.colors.primary80,

            '.editing': {
                backgroundColor: '#f0f0f0',
            }
        };
    }
);