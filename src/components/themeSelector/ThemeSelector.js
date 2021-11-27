import { useTheme } from '../../hooks/useTheme';
import modeIcon from '../../assets/mode-icon.svg';

// styles
import {
  ModeButtons,
  ThemeButtons,
  ThemeContainer,
} from './ThemeSelector.styled';

const themeColors = ['#4B0082', '#58249c', '#9370DB'];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContainer>
      <ModeButtons>
        <img
          src={modeIcon}
          alt='mode-toggle'
          onClick={toggleMode}
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
      </ModeButtons>
      <ThemeButtons>
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </ThemeButtons>
    </ThemeContainer>
  );
}
