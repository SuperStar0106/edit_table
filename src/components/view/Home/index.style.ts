import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from './../../../styles/type';

type HomeViewStyleProps = StyledComponentProps & {};

export const HomeViewStyle = styled('div')<HomeViewStyleProps>(
    ({ theme }) => {
        const customTheme = theme as CustomTheme;
        return {
        };
    }
);
