import { StyledComponentProps, styled } from '@mui/material';

import { CustomTheme } from './../../../styles/type';

type ThComponentStyleProps = StyledComponentProps & {
    isSorted: boolean | undefined;
};

export const ThComponentStyle = styled('th')<ThComponentStyleProps>(({ theme, ...props }) => {
    const customTheme = theme as CustomTheme;
    const { isSorted } = props;
    
    let backgroundColor = isSorted ? customTheme.colors.primary40 : customTheme.colors.primary80;

    return {
        backgroundColor: backgroundColor,

        '.th_align': {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
        }
    };
});
