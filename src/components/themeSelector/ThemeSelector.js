import { useTheme } from '../../hooks/useTheme';

// styles
import { ThemeButtons, ThemeContainer } from './ThemeSelector.styled';

const themeColors = ['#4B0082', '#58249c', '#9370DB'];

export default function ThemeSelector() {
  const { changeColor } = useTheme();

  return (
    <ThemeContainer>
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
